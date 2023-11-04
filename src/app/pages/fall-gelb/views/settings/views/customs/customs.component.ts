import { Component, OnInit } from '@angular/core';
import { NewCustomsComponent } from '../components/new-customs/new-customs.component';
import { DialogService } from '@core/services';
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
              private customsService:CustomsService) { }

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
        .openDialog(NewCustomsComponent, 
                    processType === 'Add' ? 'Crear Aduana' : 'Editar Aduana', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          console.log("custom ", custom);
        });
  }

  deleteCustoms() {
    this.customsService
      .deleteCustoms(this.itemsSelected[0].id)
        .subscribe( (data) => {console.log(data)},
        (error) => {console.log(error)});
  }

}
