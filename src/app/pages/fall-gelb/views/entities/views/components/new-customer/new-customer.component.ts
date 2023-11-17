import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from '../../customers/customers.service';
import { Biller } from '@shared/models/customers';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  customerForm: FormGroup = this.fb.group({
    name: this.fb.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    email: this.fb.control(this.data.dialogData ? this.data.dialogData[0].email : '', [Validators.required]),
    isActive: this.fb.control(this.data.dialogData ? this.data.dialogData[0].active : false, [Validators.required]),
    phone: this.fb.control(this.data.dialogData ? this.data.dialogData[0].phone : '',),
    address: this.fb.control(this.data.dialogData ? this.data.dialogData[0].address : '', [Validators.required]),
    taxpayer: this.fb.control(this.data.dialogData ? this.data.dialogData[0].special_tax_payer === true ? 1 : 2 : '', [Validators.required]),
    biller: this.fb.control(this.data.dialogData ? this.data.dialogData[0].biller_id : '', [Validators.required]),
  })

  mascara: string = '';



  taxpayerOptions = [
    {
      value : 1,
      name: 'SI',
    },
    {
      value : 2,
      name: 'NO',
    }
  ];

  billerOptions: Biller[] = [];

  constructor(  private fb:FormBuilder,
                private customersService:CustomersService,
                @Inject(MAT_DIALOG_DATA) private data: any,
                private toastService:ToastService,
                private dialogRef:MatDialogRef<NewCustomerComponent>) { 
            // -------Code to put two masks in one input (works but when you put the first number you have to
            // click the input again to be able to keep writing)---------

            // this.customerForm.controls['phone'].valueChanges.subscribe((value: string) => {
            //   this.mascara = value.startsWith('0') ? '(0000)-0000000' : '+0 (000) 000 0000';
            // });
  }

  ngOnInit(): void {
    this.getBillers();
  }

  getBillers() {
    this.customersService.getBillers()
      .subscribe((resp) => {
        this.billerOptions = resp;
        console.log('TaxPayer: ', this.taxpayerOptions)
      })
  }

  saveCustomers() {
    if (this.customerForm.valid) {
      if(this.data.title === 'Crear Cliente'){

        const customer = {
          name: this.customerForm.get('name')?.value, 
          email: this.customerForm.get('email')?.value, 
          active: this.customerForm.get('isActive')?.value, 
          phone: this.customerForm.get('phone')?.value, 
          address: this.customerForm.get('address')?.value, 
          special_tax_payer: this.customerForm.get('taxpayer')?.value === 1 ? true : false, 
          biller_id: this.customerForm.get('biller')?.value, 
        }
          console.log('Custom: ', customer)
        this.customersService.createCustomer(customer)
          .subscribe((data) => {
            this.toastService.showToaster("Cliente Creado Correctamente!")
            this.dialogRef.close(true);
          },
          (error) => console.error('ERROR! :', error))

      }else{

        const customerEdit = {
          name: this.customerForm.get('name')?.value, 
          email: this.customerForm.get('email')?.value, 
          active: this.customerForm.get('isActive')?.value, 
          phone: this.customerForm.get('phone')?.value, 
          address: this.customerForm.get('address')?.value, 
          special_tax_payer: this.customerForm.get('taxpayer')?.value === 1 ? true : false, 
          biller_id: this.customerForm.get('biller')?.value,
   
        }
        console.log('customerEdit: ', customerEdit)
  
        this.customersService.editCustomer(customerEdit, this.data.dialogData[0].id)
          .subscribe((data) => {
            this.toastService.showToaster("Cliente Editado Correctamente!")
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true))
      }
    } else{
        this.customerForm.markAllAsTouched();
    }
  }

}
