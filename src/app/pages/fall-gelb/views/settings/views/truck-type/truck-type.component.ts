import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { FormTruckTypeComponent } from '../components/form-truck-type/form-truck-type.component';
import { TruckTypeService } from './truck-type.service';
import { truckType } from '@shared/models/truck-type';

@Component({
  selector: 'app-truck-type',
  templateUrl: './truck-type.component.html',
  styleUrls: ['./truck-type.component.scss']
})
export class TruckTypeComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "ID",
    "Nombre",
    ];
  tableColumnsTags: string[] = [
    "id",
    "name",
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];


  constructor(private dialogService: DialogService,
              private truckTypeService:TruckTypeService,
              private toastService:ToastService) { }

  ngOnInit(): void {
    this.getTruck();
  }

  getTruck() {
    this.truckTypeService.getTruckType()
      .subscribe((response) => {
        const tableData: truckType[] = [];
        
        response.forEach((truck) => {
          const truckToInput:truckType = {
            id: truck.id,
            name: truck.name,
          };

          tableData.push(truckToInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processTruck(processType: string) {
    this.dialogService
        .openDialog(FormTruckTypeComponent, 
                    processType === 'Add' ? 'Crear Tipo de Camión' : 'Editar Tipo de Camión', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.refreshTruck();
          }
        });
  }

  deleteTruck() {
    this.dialogService
    .openConfirmationDialog(
            'Eliminar Tipo de Camión',
            `¿Desea eliminar tipo de camión '${this.itemsSelected[0].name}?'`)
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.truckTypeService.deleteTruckType(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Tipo de Camión eliminado correctamente!')
          this.refreshTruck();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })

}

refreshTruck() {
  this.tableData = [];

  this.truckTypeService.getTruckType()
      .subscribe((trucks) => {
        trucks.forEach((truck) => {

          const truckToInput:truckType = {
            id: truck.id,
            name: truck.name
          };

          this.tableData.push(truckToInput);

        });
      })
}

}
