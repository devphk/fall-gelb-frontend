import { Component, OnInit } from '@angular/core';
import { FormCustomsComponent } from '../components/form-customs/form-customs.component';
import { DialogService, ToastService } from '@core/services';
import { CustomsService } from './customs.service';
import { CustomsDataTable } from '@shared/models';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styleUrls: ['./customs.component.scss'],
})
export class CustomsComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "ID",
    "Nombre",
    "Dirección",
  ];
  tableColumnsTags: string[] = [
    "id",
    "name",
    "address",
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];


  constructor(private dialogService: DialogService,
              private customsService:CustomsService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getCustoms();
  }

  getCustoms() {
    this.customsService.getCustoms()
      .subscribe((response) => {
        const tableData: CustomsDataTable[] = [];
        
        response.forEach((customs) => {
          const customtoInput:CustomsDataTable = {
            id: customs.id,
            name: customs.name,
            address: customs.address,
            transport_types: customs.transport_types,
            longitude: customs.longitude,
            latitude:customs.latitude
          };

          tableData.push(customtoInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processCustoms(processType: string) {
    this.dialogService
        .openDialog(FormCustomsComponent, 
                    processType === 'Add' ? 'Crear Aduana' : 'Editar Aduana', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.refreshCustoms();
          }
        });
  }

  deleteCustoms() {
    this.dialogService
    .openConfirmationDialog(
            'Eliminar Aduana',
            `¿Desea eliminar aduana '${this.itemsSelected[0].name}'?`)
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.customsService.deleteCustom(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Aduana eliminada correctamente!')
          this.refreshCustoms();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }

  refreshCustoms() {
    this.tableData = [];

    this.customsService.getCustoms()
        .subscribe((customs) => {
          customs.forEach((custom) => {

            const customToInput:CustomsDataTable = {
              id: custom.id,
              name: custom.name,
              address: custom.address,
              transport_types: custom.transport_types,
              longitude: custom.longitude,
              latitude:custom.latitude
            };

            this.tableData.push(customToInput);

          });
        })
  }

}
