import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { NewContainerTypeComponent } from '../components/new-container-type/new-container-type.component';

@Component({
  selector: 'app-container-type',
  templateUrl: './container-type.component.html',
  styleUrls: ['./container-type.component.scss']
})
export class ContainerTypeComponent implements OnInit {

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

  newContainerType() {
    this.dialogService
        .openDialog(NewContainerTypeComponent,
                    "Nuevo Tipo de Contenedor",
                    "800px",
                    "250px").afterClosed()
                            .subscribe((data) => {
                              console.log("Data ", data)
                            });
  }

}
