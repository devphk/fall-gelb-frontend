import { Component, OnInit } from '@angular/core';
import { NewCustomsComponent } from '../components/new-customs/new-customs.component';
import { DialogService } from '@core/services';
import { CustomsService } from './customs.service';
import { Customs, CustomsDataTable } from '@shared/models';
import { TableCheckService } from '@shared/components/phk-table/table-check.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  selectedID: number = 0;
  durationInSeconds = 2;

  constructor(private dialogService: DialogService,
              private customsService:CustomsService,
              private tableCheck:TableCheckService,
              private snackBar:MatSnackBar) { }

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

  editCustoms() {
    
    this.dialogService
      .openDialog(NewCustomsComponent, 'Editar Aduana', '800px', '300px')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data: ', data);
      })
  }

  deleteCustoms() {
    this.tableCheck.currentMessage.subscribe((id) => this.selectedID = id)
    console.log('SelectedID:  ', this.selectedID);
    this.customsService
      .deleteCustoms(this.selectedID)
      .subscribe((data) => {
        console.log('EXITOSO!: ', data);
        this.snackBar.open('Eliminado Exitosamente!','Close',{
          duration: this.durationInSeconds * 1000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        console.error('ERROR!: ', error);
        this.snackBar.open('Ha Ocurrido un Error!','Close',{
          duration: this.durationInSeconds * 1000,
          panelClass: ['error-snackbar']
        });
      })
  }
  

}
