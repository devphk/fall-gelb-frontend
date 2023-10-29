import { Component, OnInit } from '@angular/core';
import { NewConsolidatorComponent } from '../components/new-consolidator/new-consolidator.component';
import { DialogService } from '@core/services';

@Component({
  selector: 'app-air-consolidators',
  templateUrl: './air-consolidators.component.html',
  styleUrls: ['./air-consolidators.component.scss']
})
export class AirConsolidatorsComponent implements OnInit {

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

  newAirConsolidator() {
    this.dialogService
        .openDialog(NewConsolidatorComponent,
                    "Nuevo Consolidador Aéreo",
                    "800px",
                    "250px").afterClosed()
                            .subscribe((data) => {
                              console.log("Data ", data)
                            });
  }

}
