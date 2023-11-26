import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { EmployeesService } from '../../employees/employees.service';
import { SelectOption } from '@shared/models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {

  employeeForm: FormGroup =  new FormGroup({})


  departmentTypes: SelectOption[] = []
  contractTypes: SelectOption[] = []
  employeeStatuses: SelectOption[] = []
  paymentFrequencies: SelectOption[] = []

  
  constructor( private fb:FormBuilder,
               private dialogRef:MatDialogRef<NewEmployeeComponent>,
               @Inject(MAT_DIALOG_DATA) private data: any,
               private toastService:ToastService,
               private employeesService:EmployeesService,
               private datePipe:DatePipe) {}

  
  ngOnInit(): void {
    this.createForm();
    this.getDepartments();
    this.getContractTypes();
    this.getEmployeeStatuses();
    this.getPaymentFrequencies();
    console.log('dialogData: ', this.data.dialogData)
  }

  createForm() {

    let startTime:string = '';
    let transformedStartTime:string = '';
    let endTime:string = '';
    let transformedEndTime:string = '';

    if(this.data.dialogData) {
      startTime = this.data.dialogData[0].schedule_start_time;
      endTime = this.data.dialogData[0].schedule_end_time;
      transformedStartTime = startTime.substring(0, startTime.length - 3);
      transformedEndTime = endTime.substring(0, endTime.length - 3);
    }


    this.employeeForm = this.fb.group({
      name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
      phone: this.fb.control(this.data.dialogData ? this.data.dialogData[0].phone : '', [Validators.required]),
      email: this.fb.control(this.data.dialogData ? this.data.dialogData[0].email : '', [Validators.required]),
      isActive: this.fb.control(this.data.dialogData ? this.data.dialogData[0].active : false, [Validators.required]),
      address: this.fb.control(this.data.dialogData ? this.data.dialogData[0].address : '',[Validators.required]),
      idCard: this.fb.control(this.data.dialogData ? this.data.dialogData[0].identification_card : '', [Validators.required]),
      department: this.fb.control(this.data.dialogData ? this.data.dialogData[0].departament_id : '', [Validators.required]),
      admissionDate: this.fb.control(this.data.dialogData ? this.data.dialogData[0].admission_date : '', [Validators.required]),
      contractType: this.fb.control(this.data.dialogData ? this.data.dialogData[0].contract_type : '', [Validators.required]),
      basicSalary: this.fb.control(this.data.dialogData ? this.data.dialogData[0].basic_salary : '', [Validators.required]),
      startTime: this.fb.control(this.data.dialogData ? transformedStartTime : '', [Validators.required]),
      endTime: this.fb.control(this.data.dialogData ? transformedEndTime : '', [Validators.required]),
      employeeStatus: this.fb.control(this.data.dialogData ? this.data.dialogData[0].employee_status_id : '', [Validators.required]),
      paymentFrecuency: this.fb.control(this.data.dialogData ? this.data.dialogData[0].payment_frequency : '',[Validators.required]),
    });

  }

  getDepartments(){
    this.employeesService.getDepartments()
      .subscribe((resp) => {
        this.departmentTypes = resp;
      })
  }

  getContractTypes() {
    this.employeesService.getContractTypes()
      .subscribe((resp) => {
        this.contractTypes = resp;
      })
  }

  getEmployeeStatuses() {
    this.employeesService.getEmployeeStatuses()
      .subscribe((resp) => {
        this.employeeStatuses = resp;
      })
  }

  getPaymentFrequencies() {
    this.employeesService.getPaymentFrequencies()
      .subscribe((resp) => {
        this.paymentFrequencies = resp;
      })
  }
  
  saveEmployee() {
    if (this.employeeForm.valid) {
      if(this.data.title === 'Crear Empleado'){

        const employee = {
          name: this.employeeForm.get('name')?.value, 
          phone: this.employeeForm.get('phone')?.value, 
          email: this.employeeForm.get('email')?.value, 
          active: this.employeeForm.get('isActive')?.value, 
          address: this.employeeForm.get('address')?.value,  
          identification_card: this.employeeForm.get('idCard')?.value,  
          admission_date: this.employeeForm.get('admissionDate')?.value,  
          departament_id: this.employeeForm.get('department')?.value,  
          contract_type_id: this.employeeForm.get('contractType')?.value,  
          basic_salary: this.employeeForm.get('basicSalary')?.value,  
          schedule_start_time: this.employeeForm.get('startTime')?.value + ":00",  
          schedule_end_time: this.employeeForm.get('endTime')?.value  + ":00",  
          employee_status_id: this.employeeForm.get('employeeStatus')?.value,  
          payment_frequency_id: this.employeeForm.get('paymentFrecuency')?.value,  
        }
          console.log('Employee: ', employee);

          this.employeesService.createEmployee(employee)
          .subscribe((data) => {
            this.toastService.showToaster("Empleado Creado Correctamente!")
            this.dialogRef.close(true);
          },
          (error) => console.error('ERROR! :', error))

      }else{

        const employeeEdit = {
          name: this.employeeForm.get('name')?.value, 
          phone: this.employeeForm.get('phone')?.value, 
          email: this.employeeForm.get('email')?.value, 
          active: this.employeeForm.get('isActive')?.value, 
          address: this.employeeForm.get('address')?.value,  
          identification_card: this.employeeForm.get('idCard')?.value,  
          admission_date: this.employeeForm.get('admissionDate')?.value,  
          departament_id: this.employeeForm.get('department')?.value,  
          contract_type_id: this.employeeForm.get('contractType')?.value,  
          basic_salary: this.employeeForm.get('basicSalary')?.value,  
          schedule_start_time: this.employeeForm.get('startTime')?.value + ":00",  
          schedule_end_time: this.employeeForm.get('endTime')?.value + ":00",  
          employee_status_id: this.employeeForm.get('employeeStatus')?.value,  
          payment_frequency_id: this.employeeForm.get('paymentFrecuency')?.value,
   
        }
        console.log('employeeEdit: ', employeeEdit)
  
        this.employeesService.editEmployee(this.data.dialogData[0].id, employeeEdit)
          .subscribe((data) => {
            this.toastService.showToaster("Empleado Editado Correctamente!")
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true))
      }
    } else{
        this.employeeForm.markAllAsTouched();
        console.log(this.employeeForm)
    }
  }

}
