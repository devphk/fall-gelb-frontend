import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { EmployeesService } from './employees.service';
import { EmployeeDataTable } from '@shared/models/employees';
import { NewEmployeeComponent } from '../components/new-employee/new-employee.component';
import { SelectOption } from '@shared/models';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    'ID', 
    'Nombre',
    'Telefono',
    'Email',
    'Direccion'
  ];
  tableColumnsTags: string[] = [
    'id',
    'name',
    'phone',
    'email',
    'address'
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private toastService: ToastService,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.tableData = [];

    this.employeesService.getEmployees()
      .subscribe((response) => {

        const tableData: EmployeeDataTable[] = [];

        response.forEach((employee) => {
          const employeeToInput:EmployeeDataTable = {
            id:employee.id,
            name:employee.entity.name,
            phone:employee.entity.phone,
            email:employee.entity.email,
            address:employee.entity.address,
          }
          tableData.push(employeeToInput); 
        })
        this.tableData = tableData;

      },
        (error) => {}
      );
  }

  processEmployee(processType: string) {
    this.dialogService
      .openDialog(
        NewEmployeeComponent,
        processType === 'Add' ? 'Crear Empleado' : 'Editar Empleado',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((driver) => {
        if (driver) {
          this.getEmployees();
        }
      });
  }

  deleteEmployee() {
    // this.dialogService
    //   .openConfirmationDialog(
    //     `Desea eliminar Chofer '${this.itemsSelected[0].name}'`,
    //     'Este cambio no se puede revertir'
    //   )
    //   .afterClosed()
    //   .subscribe((response) => {
    //     if (response) {
    //       this.driverService.deleteDrivers(this.itemsSelected[0].id).subscribe(
    //         (data) => {
    //           this.toastService.showToaster('Chofer eliminado correctamente!');
    //           this.refreshDrivers();
    //         },
    //         (error) => this.toastService.showToaster(error.error.message, true)
    //       );
    //     }
    //   });
  }
}
