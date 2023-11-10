import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { CargoTypeLclService } from './cargo-type-lcl.service';
import { CargoTypeLCL } from '@shared/models/cargo-type-lcl';
import { FormCargoTypeLclComponent } from '../components/form-cargo-type-lcl/form-cargo-type-lcl.component';

@Component({
  selector: 'app-cargo-type-lcl',
  templateUrl: './cargo-type-lcl.component.html',
  styleUrls: ['./cargo-type-lcl.component.scss']
})
export class CargoTypeLclComponent implements OnInit {

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
              private lclCargoService:CargoTypeLclService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getCargoLCL();
  }

  getCargoLCL() {
    this.lclCargoService.getCargoLCL()
      .subscribe((response) => {
        const tableData: CargoTypeLCL[] = [];
        
        response.forEach((cargoType) => {
          const cargoTypetoInput:CargoTypeLCL = {
            id: cargoType.id,
            name: cargoType.name,
          };

          tableData.push(cargoTypetoInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processCargoLCL(processType: string) {
    this.dialogService
        .openDialog(FormCargoTypeLclComponent, 
                    processType === 'Add' ? 'Crear Tipo de Carga LCL' : 'Editar Tipo de Carga LCL', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.refreshCargoLCL();
          }
        });
  }

  deleteCargoLCL() {
    this.dialogService
    .openConfirmationDialog(
            `Desea eliminar tipo de carga lcl '${this.itemsSelected[0].name}'`,
            'Este cambio no se puede revertir')
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.lclCargoService.deleteCargoLCL(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Tipo de Carga LCL eliminada correctamente!')
          this.refreshCargoLCL();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }

  refreshCargoLCL() {
    this.tableData = [];

    this.lclCargoService.getCargoLCL()
      .subscribe((response) => {
        const tableData: CargoTypeLCL[] = [];
        
        response.forEach((cargoType) => {
          const cargoTypetoInput:CargoTypeLCL = {
            id: cargoType.id,
            name: cargoType.name,
          };

          tableData.push(cargoTypetoInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

}
  

