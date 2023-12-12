import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { FormContainerTypeComponent } from '../components/form-container-type/form-container-type.component';
import { ContainerTypeService } from './container-type.service';
import { ContainerType } from '@shared/models/container-type';

@Component({
  selector: 'app-container-type',
  templateUrl: './container-type.component.html',
  styleUrls: ['./container-type.component.scss']
})
export class ContainerTypeComponent implements OnInit {

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
              private containerTypeService:ContainerTypeService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getContainerTypes();
  }

  getContainerTypes() {
    this.containerTypeService.getContainerTypes()
      .subscribe((response) => {
        const tableData: ContainerType[] = [];
        
        response.forEach((container) => {
          const containerToInput:ContainerType = {
            id: container.id,
            name: container.name,
          };

          tableData.push(containerToInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processContainerType(processType: string) {
    this.dialogService
        .openDialog(FormContainerTypeComponent, 
                    processType === 'Add' ? 'Crear Tipo de Contenedor' : 'Editar Tipo de Contenedor', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.refreshContainerTypes();
          }
        });
  }

  deleteContainerType() {
    this.dialogService
    .openConfirmationDialog(
            'Eliminar Tipo de Contenedor',
            `¿Desea eliminar tipo de contenedor '${this.itemsSelected[0].name}'?`)
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.containerTypeService.deleteContainerType(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Tipo de Contenedor eliminado correctamente!')
          this.refreshContainerTypes();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }

  refreshContainerTypes() {
    this.tableData = [];
    this.getContainerTypes();
  }


}
