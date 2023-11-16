import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { NewCustomerComponent } from '../components/new-customer/new-customer.component';
import { CustomersService } from './customers.service';
import { CustomersDataTable } from '@shared/models/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "ID",
    "Nombre",
    "Telefono",
    "Dirección Fiscal",
    "Facturador",
  ];
  tableColumnsTags: string[] = [
    "id",
    "name",
    "phone",
    "address",
    "biller",
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];
  billers = []

  constructor(private dialogService: DialogService,
              private customersService:CustomersService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customersService.getBillers()
    .subscribe((billers) => {
      const billersMap: { [id: number]: string } = {};
      billers.forEach((biller: any) => {
        billersMap[biller.id] = biller.name;  
      });

      this.customersService.getCustomers()
        .subscribe((response) => {
          const tableData: CustomersDataTable[] = [];
          response.forEach((customers) => {
            const customerToInput: CustomersDataTable = {
              id: customers.id,
              name: customers.entity.name,
              phone: customers.entity.phone,
              address: customers.entity.address,
              biller: billersMap[customers.biller_id],
              email: customers.entity.email,
              active: customers.entity.active,
              biller_id: customers.biller_id,
              special_tax_payer : customers.special_tax_payer
            };
            tableData.push(customerToInput);
          })

            this.tableData = tableData;
        })
    })
  }


  processCustomers(processType: string) {
    this.dialogService
        .openDialog(NewCustomerComponent, 
                    processType === 'Add' ? 'Crear Cliente' : 'Editar Cliente', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.refreshCustomers();
          }
        });
  }

  deleteCustomers() {
    this.dialogService
    .openConfirmationDialog(
            'Eliminar Cliente',
            `¿Desea eliminar cliente '${this.itemsSelected[0].name}'?`)
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.customersService.deleteCustomer(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Cliente eliminado correctamente!')
          this.refreshCustomers();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }

  refreshCustomers() {
    this.tableData = [];
    this.getCustomers();
  }

}
