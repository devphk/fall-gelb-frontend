import { Component, OnInit } from '@angular/core';
import { NewCustomsComponent } from '../components/new-customs/new-customs.component';
import { DialogService } from '@core/services';
import { CustomsService } from './customs.service';
import { Customs, CustomsDataTable } from '@shared/models';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styleUrls: ['./customs.component.scss']
})
export class CustomsComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "ID",
    "Nombre",
    "Direccion"
  ];
  tableColumnsTags: string[] = [
    "id",
    "name",
    "address"
  ];
  tableData: any[] = [];

  constructor(private dialogService: DialogService,
              private customsService:CustomsService ) { }

  ngOnInit(): void {
    this.customsService
      .getCustoms()
      .subscribe((resp) => {
        console.log(resp);

        const tableData: CustomsDataTable[] =[]

        resp.forEach((customs) =>{

          const customsToPush: CustomsDataTable = {
            id: customs.id,
            name: customs.name,
            address: customs.address
          }

          tableData.push(customsToPush);

        })

        this.tableData = tableData;
      })
  }

  newCustoms() {
    this.dialogService
        .openDialog(NewCustomsComponent,
                    "Nueva Aduana",
                    "800px",
                    "300px").afterClosed()
                            .subscribe((data) => {
                              console.log("Data ", data)
                            });
  }

}
