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
    this.getdepartments();
  }

  getdepartments() {
    this.departmentService.getDepartments().subscribe(
      (response) => {
        const tableData: DepartmentDataTable[] = [];

        response.forEach((department) => {
          const departmentToInput: DepartmentDataTable = {
            id: department.id,
            name: department.name,
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
        processType === 'Add' ? 'Crear Banco' : 'Editar Banco',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((department) => {
        if (department) {
          this.refreshDepartments();
        }
      });
  }

  deleteDepartment() {
    this.dialogService
      .openConfirmationDialog(
        `Eliminar Banco`,
        `¿Desea eliminar banco '${this.itemsSelected[0].name}'?`
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.departmentService
            .deleteDepartments(this.itemsSelected[0].id)
            .subscribe(
              (data) => {
                this.toastService.showToaster('Banco eliminado correctamente!');
                this.refreshDepartments();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

  refreshDepartments() {
    this.tableData = [];

    this.departmentService.getDepartments().subscribe((departments) => {
      departments.forEach((department) => {
        const departmentToInput = {
          id: department.id,
          name: department.name,
        };

        this.tableData.push(departmentToInput);
      });
    });
  }
}
