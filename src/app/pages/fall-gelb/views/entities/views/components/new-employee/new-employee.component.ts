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

  employeeForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    phone: this.fb.control(this.data.dialogData ? this.data.dialogData[0].phone : '', [Validators.required]),
    email: this.fb.control(this.data.dialogData ? this.data.dialogData[0].email : '', [Validators.required]),
    isActive: this.fb.control(this.data.dialogData ? this.data.dialogData[0].active : false,[Validators.required]),
    address: this.fb.control(this.data.dialogData ? this.data.dialogData[0].adress : '',[Validators.required]),
    idCard: this.fb.control(this.data.dialogData ? this.data.dialogData[0].identification_card : '', [Validators.required]),
    department: this.fb.control(this.data.dialogData ? this.data.dialogData[0].departament_id : '', [Validators.required]),
    admissionDate: this.fb.control(this.data.dialogData ? this.data.dialogData[0].admission_date : '', [Validators.required]),
    contractType: this.fb.control(this.data.dialogData ? this.data.dialogData[0].contract_type_id : '', [Validators.required]),
    basicSalary: this.fb.control(this.data.dialogData ? this.data.dialogData[0].basic_salary : '', [Validators.required]),
    startDate: this.fb.control(this.data.dialogData ? this.data.dialogData[0].schedule_start_time : '', [Validators.required]),
    endDate: this.fb.control(this.data.dialogData ? this.data.dialogData[0].schedule_end_time : '', [Validators.required]),
    employeeStatus: this.fb.control(this.data.dialogData ? this.data.dialogData[0].employee_status_id : '', [Validators.required]),
    paymentFrecuency: this.fb.control(this.data.dialogData ? this.data.dialogData[0].payment_frequency_id : '',[Validators.required]),
  })


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
    this.getDepartments();
    this.getContractTypes();
    this.getEmployeeStatuses();
    this.getPaymentFrequencies();
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
        console.log('ContractTypes: ', resp)
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
        console.log('paymentFrequencies: ', this.paymentFrequencies)
      })
  }
  
  saveEmployee() {
    if (this.employeeForm.valid) {
      if(this.data.title === 'Crear Empleado'){

        const startDate = new Date(this.employeeForm.get('startDate')?.value);
        const transformedStartDate = this.datePipe.transform(startDate, 'HH:mm:ss');

        const endDate = new Date(this.employeeForm.get('endDate')?.value);
        const transformedEndDate = this.datePipe.transform(endDate, 'HH:mm:ss');

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
          schedule_start_time: this.employeeForm.get('startDate')?.value,  
          schedule_end_time: this.employeeForm.get('endDate')?.value,  
          employee_status_id: this.employeeForm.get('employeeStatus')?.value,  
          payment_frequency_id: this.employeeForm.get('paymentFrecuency')?.value,  
        }
          console.log('Employee: ', employee);

          console.log('StartDateTransformed: ', transformedStartDate);
          console.log('EndDateTransformed: ', transformedEndDate);
          // this.employeesService.createEmployee(employee)
          // .subscribe((data) => {
          //   this.toastService.showToaster("Empleado Creado Correctamente!")
          //   this.dialogRef.close(true);
          // },
          // (error) => console.error('ERROR! :', error))

      }else{

        const employeeEdit = {
          name: this.employeeForm.get('name')?.value, 
          phone: this.employeeForm.get('phone')?.value, 
          isActive: this.employeeForm.get('isActive')?.value, 
          address: this.employeeForm.get('address')?.value,  
          idCard: this.employeeForm.get('idCard')?.value, 
          department: this.employeeForm.get('department')?.value,  
          contractType: this.employeeForm.get('contractType')?.value,  
          basicSalary: this.employeeForm.get('basicSalary')?.value,  
          employeeStatus: this.employeeForm.get('employeeStatus')?.value,  
          paymentFrecuency: this.employeeForm.get('paymentFrecuency')?.value,
   
        }
        console.log('employeeEdit: ', employeeEdit)
  
        // this.customsService.editCustom(customEdit, this.data.dialogData[0].id)
        //   .subscribe((data) => {
        //     this.toastService.showToaster("Aduana Editada Correctamente!")
        //     this.dialogRef.close(true);
        //   },
        //   (error) => this.toastService.showToaster(error.error.message, true))
      }
    } else{
        this.employeeForm.markAllAsTouched();
    }
  }
}
