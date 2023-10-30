import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { NewTruckTypeComponent } from '../components/new-truck-type/new-truck-type.component';

@Component({
  selector: 'app-truck-type',
  templateUrl: './truck-type.component.html',
  styleUrls: ['./truck-type.component.scss']
})
export class TruckTypeComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "ID",
    "Nombre",
    "Teléfono",
    "Rif",
    "Dirección fiscal",
    "Contribuyente",
    "Servicios"
  ];
  tableColumnsTags: string[] = [
    "id",
    "name",
    "phone",
    "rif",
    "fiscalAddress",
    "taxpayer",
    "services"
  ];
  tableData: any[] = [
    {
      id: 1,
      name: 'Albert Tuarez',
      phone: '04127527692',
      rif: 'V-244.498.096',
      fiscalAddress: 'Calle plaza, casa 13-34',
      taxpayer: "No",
      services: 'Gastos de vehículos'
    }
  ];

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
  }

  newTruckType() {
    this.dialogService
        .openDialog(NewTruckTypeComponent,
                    "Nuevo Tipo de Camión",
                    "800px",
                    "250px").afterClosed()
                            .subscribe((data) => {
                              console.log("Data ", data)
                            });
  }

}
