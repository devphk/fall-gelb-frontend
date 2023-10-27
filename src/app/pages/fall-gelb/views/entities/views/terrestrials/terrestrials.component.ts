import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { NewGroundtransportComponent } from '../components/new-groundtransport/new-groundtransport.component';

@Component({
  selector: 'app-terrestrials',
  templateUrl: './terrestrials.component.html',
  styleUrls: ['./terrestrials.component.scss']
})
export class TerrestrialsComponent implements OnInit {

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

  newTerrestrial() {
    this.dialogService
        .openDialog(NewGroundtransportComponent,
                    "Nuevo Terrestre",
                    "800px",
                    "250px").afterClosed()
                            .subscribe((data) => {
                              console.log("Data ", data)
                            });
  }

}
