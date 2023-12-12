import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { FormUnitsComponent } from '../components/form-units/form-units.component';
import { UnitsService } from './units.service';
import { Units } from '@shared/models/units';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "ID",
    "Nombre"
  ];
  tableColumnsTags: string[] = [
    "id",
    "name"
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];


  constructor(private dialogService: DialogService,
              private unitsService: UnitsService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getUnits();
  }

  getUnits() {
    this.unitsService.getUnits()
      .subscribe((response) => {
        const tableData: Units[] = [];
        
        response.forEach((units) => {
          const unitstoInput:Units = {
            id: units.id,
            name: units.name,
          };

          tableData.push(unitstoInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processUnit(processType: string) {
    this.dialogService
        .openDialog(FormUnitsComponent, 
                    processType === 'Add' ? 'Crear Unidad' : 'Editar Unidad', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.refreshUnits();
          }
        });
  }

  deleteUnit() {
    this.dialogService
    .openConfirmationDialog(
            'Eliminar Unidad',
            `¿Desea eliminar unidad '${this.itemsSelected[0].name}' ?`)
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.unitsService.deleteUnit(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Unidad eliminada correctamente!')
          this.refreshUnits();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }

  refreshUnits() {
    this.tableData = [];

    this.unitsService.getUnits()
        .subscribe((units) => {
          units.forEach((unit) => {

            const unitToInput:Units = {
              id: unit.id,
              name: unit.name,
            };

            this.tableData.push(unitToInput);

          });
        })
  }

}
