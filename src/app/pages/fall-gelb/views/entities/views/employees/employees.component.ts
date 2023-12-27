import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { EmployeesService } from './employees.service';
import { EmployeeDataTable } from '@shared/models/employees';
import { FormEmployeeComponent } from '../components/form-employee/form-employee.component';
import { SelectOption } from '@shared/models';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  tableColumnsToDisplay: string[] = [
    'ID',
    'Nombre',
    'Apellido',
    'Telefono',
    'Email',
    'Direccion',
  ];
  tableColumnsTags: string[] = ['id', 'name', 'last_name', 'phone', 'email', 'address'];
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

    this.employeesService.getEmployees().subscribe(
      (response) => {
        const tableData: EmployeeDataTable[] = [];

        response.forEach((employee) => {
          const employeeToInput: EmployeeDataTable = {
            id: employee.id,
            name: employee.entity.name,
            last_name: employee.entity.last_name,
            phone: {
              value: employee.entity.phone,
              mask: '(0000)-000-0000',
            },
            email: employee.entity.email,
            address: employee.entity.address,
            currency_id: employee.currency_id,
            basic_salary: employee.basic_salary,
            identification_card: employee.identification_card,
            employee_status_id: employee.employee_status_id,
            departament_id: employee.departament_id,
            schedule_start_time: employee.schedule_start_time,
            schedule_end_time: employee.schedule_end_time,
            admission_date: employee.admission_date,
            payment_frequency: employee.payment_frequency_id,
            contract_type: employee.contract_type_id,
            active: employee.entity.active,
            employee_type_id: employee.employee_type_id,
            branch_office_id: employee.branch_office_id
          };
          tableData.push(employeeToInput);
        });
        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processEmployee(processType: string) {
    this.dialogService
      .openDialog(
        FormEmployeeComponent,
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
    this.dialogService
      .openConfirmationDialog(
        'Eliminar empleado',
        `¿Desea eliminar empleado '${this.itemsSelected[0].name}'?`
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.employeesService
            .deleteEmployee(this.itemsSelected[0].id)
            .subscribe(
              (data) => {
                this.toastService.showToaster(
                  'Empleado eliminado correctamente!'
                );
                this.getEmployees();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }
}
