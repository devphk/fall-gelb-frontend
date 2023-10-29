import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { NewGoodsTypeComponent } from '../components/new-goods-type/new-goods-type.component';

@Component({
  selector: 'app-goods-type',
  templateUrl: './goods-type.component.html',
  styleUrls: ['./goods-type.component.scss']
})
export class GoodsTypeComponent implements OnInit {

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

  newGoodsType() {
    this.dialogService
        .openDialog(NewGoodsTypeComponent,
                    "Nuevo Tipo de Mercancia",
                    "800px",
                    "250px").afterClosed()
                            .subscribe((data) => {
                              console.log("Data ", data)
                            });
  }
}
