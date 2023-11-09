import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { NewTruckTypeComponent } from '../components/new-truck-type/new-truck-type.component';
import { TruckTypeService } from './truck-type.service';
import { truckType } from '@shared/models/truck-type';

@Component({
  selector: 'app-truck-type',
  templateUrl: './truck-type.component.html',
  styleUrls: ['./truck-type.component.scss']
})
export class TruckTypeComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "ID",
    "Nombre",
    ];
  tableColumnsTags: string[] = [
    "id",
    "name",
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];


  constructor(private dialogService: DialogService,
              private truckTypeService:TruckTypeService) { }

  ngOnInit(): void {
    this.getTruck();
  }

  getTruck() {
    this.truckTypeService.getTruckType()
      .subscribe((response) => {
        const tableData: truckType[] = [];
        
        response.forEach((truck) => {
          const truckToInput:truckType = {
            id: truck.id,
            name: truck.name,
          };

          tableData.push(truckToInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processTruck(processType: string) {
    // this.dialogService
    //     .openDialog(NewCustomsComponent, 
    //                 processType === 'Add' ? 'Crear Aduana' : 'Editar Aduana', 
    //                 '800px', 
    //                 'auto',
    //                 processType === 'Add' ? null : this.itemsSelected)
    //     .afterClosed()
    //     .subscribe((custom) => {
    //       console.log("custom ", custom);
    //     });
  }

  deleteTruck() {
  //   this.customsService
  //     .deleteCustoms(this.itemsSelected[0].id)
  //       .subscribe( (data) => {console.log(data)},
  //       (error) => {console.log(error)});
  // }

}


}
