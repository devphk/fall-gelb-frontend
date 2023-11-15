import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { NewCommodityTypeComponent } from '../components/new-commodity-type/new-commodity-type.component';
import { CommodityTypeService } from './commodity-type.service';
import { Commodities } from '@shared/models/commodities';

@Component({
  selector: 'app-commodity-type',
  templateUrl: './commodity-type.component.html',
  styleUrls: ['./commodity-type.component.scss']
})
export class CommodityTypeComponent implements OnInit {

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
              private commoditiesService:CommodityTypeService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getCommodities();
  }

  getCommodities() {
    this.commoditiesService.getCommodities()
      .subscribe((response) => {
        const tableData: Commodities[] = [];
        
        response.forEach((commodity) => {
          const customtoInput:Commodities = {
            id: commodity.id,
            name: commodity.name,
          };

          tableData.push(customtoInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processCommodities(processType: string) {
    this.dialogService
        .openDialog(NewCommodityTypeComponent, 
                    processType === 'Add' ? 'Crear Tipo de Mercancia' : 'Editar Tipo de Mercancia', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.refreshCommodities();
          }
        });
  }

  deleteCommodities() {
    this.dialogService
    .openConfirmationDialog(
            'Eliminar Tipo de Mercancia',
            `¿Desea eliminar tipo de mercancia '${this.itemsSelected[0].name}'?`)
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.commoditiesService.deleteCommodity(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Tipo de mercancia eliminada correctamente!')
          this.refreshCommodities();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }

  refreshCommodities() {
    this.tableData = [];

    this.commoditiesService.getCommodities()
        .subscribe((commodities) => {
          commodities.forEach((commodity) => {

            const commodityToInput:Commodities = {
              id: commodity.id,
              name: commodity.name
            };

            this.tableData.push(commodityToInput);

          });
        })
  }
}
