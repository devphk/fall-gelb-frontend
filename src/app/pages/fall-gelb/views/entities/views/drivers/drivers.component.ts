import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { DriversService } from './drivers.service';
import { DriverDataTable, DriverResponse } from '@shared/models';
import { FormDriverComponent } from '../components';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Nombre', 'Apellido'];
  tableColumnsTags: string[] = ['id', 'name', 'last_name'];
  tableData: any[] = [];
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private driverService: DriversService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers() {
    this.tableData = [];

    this.driverService.getDrivers().subscribe(
      (response) => {
        const tableData: DriverDataTable[] = [];

        response.forEach((driver) => {
          const driverToInput: DriverDataTable = {
            id: driver.id,
            name: driver.entity.name,
            last_name: driver.entity.last_name,
            phone: driver.entity.phone,
            email: driver.entity.email,
            active: driver.entity.active,
            address: driver.entity.address,
            is_self_employed: driver.is_self_employed,
            provider_id: driver.provider_id,
          };

          tableData.push(driverToInput);
        });

        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processDriver(processType: string) {
    this.dialogService
      .openDialog(
        FormDriverComponent,
        processType === 'Add' ? 'Crear Chofer' : 'Editar Chofer',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((driver) => {
        if (driver) {
          this.getDrivers();
        }
      });
  }

  deleteDriver() {
    this.dialogService
      .openConfirmationDialog(
        `Desea eliminar Chofer '${this.itemsSelected[0].name}'`,
        'Este cambio no se puede revertir'
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.driverService.deleteDrivers(this.itemsSelected[0].id).subscribe(
            (data) => {
              this.toastService.showToaster('Chofer eliminado correctamente!');
              this.getDrivers();
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
        }
      });
  }
}
