import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { NewWarehouseComponent } from '../components/new-warehouse/new-warehouse.component';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from '@shared/models/warehouse';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "ID",
    "Nombre",
    "Dirección",
  ];
  tableColumnsTags: string[] = [
    "id",
    "name",
    "address",
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];


  constructor(private dialogService: DialogService,
              private warehouseService:WarehouseService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getWarehouses();
  }

  getWarehouses() {
    this.warehouseService.getWarehouses()
      .subscribe((response) => {
        const tableData: Warehouse[] = [];
        
        response.forEach((warehouses) => {
          const warehouseToInput: Warehouse = {
            id: warehouses.id,
            name: warehouses.name,
            address: warehouses.address
          };

          tableData.push(warehouseToInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processWarehouse(processType: string) {
    this.dialogService
        .openDialog(NewWarehouseComponent, 
                    processType === 'Add' ? 'Crear Almacén' : 'Editar Almacén', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.refreshWarehouses();
          }
        });
  }

  deleteWarehouse() {
    this.dialogService
    .openConfirmationDialog(
            'Eliminar Almacén',
            `¿Desea eliminar almacén '${this.itemsSelected[0].name}'?`)
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.warehouseService.deleteWarehouse(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Almacén eliminado correctamente!')
          this.refreshWarehouses();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }

  refreshWarehouses() {
    this.tableData = [];

    this.warehouseService.getWarehouses()
        .subscribe((warehouses) => {
          warehouses.forEach((warehouse) => {

            const warehouseToInput:Warehouse = {
              id: warehouse.id,
              name: warehouse.name,
              address: warehouse.address,
            };

            this.tableData.push(warehouseToInput);

          });
        })
  }

}

