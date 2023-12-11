import { DepartmentDataTable } from '@shared/models';
import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department.service';
import { DialogService, ToastService } from '@core/services';
import { NewDepartmentComponent } from '../components/new-department/new-department.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Nombre'];
  tableColumnsTags: string[] = ['id', 'name'];
  tableData: any[] = [];
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private departmentService: DepartmentService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {

    this.tableData = [];

    this.departmentService.getDepartments().subscribe(
      (response) => {
        const tableData: DepartmentDataTable[] = [];

        response.forEach((department) => {
          const departmentToInput: DepartmentDataTable = {
            id: department.id,
            name: department.name,
            departament_id: department.departament_id,
          };

          tableData.push(departmentToInput);
        });

        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processDepartment(processType: string) {
    this.dialogService
      .openDialog(
        NewDepartmentComponent,
        processType === 'Add' ? 'Crear Departamento' : 'Editar Departamento',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((department) => {
        if (department) {
          this.getDepartments();
        }
      });
  }

  deleteDepartment() {
    this.dialogService
      .openConfirmationDialog(
        `Eliminar Departamento`,
        `¿Desea eliminar departamento '${this.itemsSelected[0].name}'?`
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.departmentService
            .deleteDepartments(this.itemsSelected[0].id)
            .subscribe(
              (data) => {
                this.toastService.showToaster(
                  'Departamento eliminado correctamente!'
                );
                this.getDepartments();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

}
