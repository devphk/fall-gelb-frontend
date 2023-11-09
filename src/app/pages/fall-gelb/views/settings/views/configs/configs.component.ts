import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { ConfigsService } from './configs.service';
import { ConfigsDataTable } from '@shared/models/configs';
import { FormConfigsComponent } from '../components/form-configs/form-configs.component';

@Component({
  selector: 'app-configs',
  templateUrl: './configs.component.html',
  styleUrls: ['./configs.component.scss']
})
export class ConfigsComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "LLAVE",
    "VALOR"
  ];
  tableColumnsTags: string[] = [
    "key",
    "value"
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];


  constructor(private dialogService: DialogService,
              private configService: ConfigsService,
              private toastService: ToastService) { }

  ngOnInit(): void {
    this.getConfigs();
  }

  getConfigs() {
    this.configService.getConfigs()
      .subscribe((response) => {
        const tableData: ConfigsDataTable[] = [];
        
        response.forEach((configs) => {
          const configtoInput:ConfigsDataTable = {
            id: configs.id,
            key: configs.key,
            value: configs.value,
            deletable: configs.deletable
          };

          tableData.push(configtoInput);
        })

            this.tableData = tableData;
      
      }, (error) => {

      });
  }

  processConfigs(processType: string) {
    this.dialogService
        .openDialog(FormConfigsComponent, 
                    processType === 'Add' ? 'Crear Configuración' : 'Editar Configuración', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((config) => {
          if(config) {
            this.refreshConfigs();
          }
        });
  }

  deleteConfig() {
    if (this.itemsSelected[0].deletable === true) {

      this.dialogService
        .openConfirmationDialog(
                `Desea eliminar configuración '${this.itemsSelected[0].name}'`,
                'Este cambio no se puede revertir')
        .afterClosed()
        .subscribe((response)=>{
          if (response) {
            this.configService.deleteConfig(this.itemsSelected[0].id)
            .subscribe((data) => {
              this.toastService.showToaster('Configuración eliminada correctamente!')
              this.refreshConfigs();
            },
              (error) => this.toastService.showToaster(error.error.message, true));
          }
        })

    }else {

      this.toastService.showToaster('Esta configuración no se puede Eliminar!', true)
      
    }
    
  }

  refreshConfigs() {
    this.tableData = [];

    this.configService.getConfigs()
        .subscribe((configs) => {
          configs.forEach((config) => {

            const configToInput:ConfigsDataTable = {
              id: config.id,
              key: config.key,
              value: config.value,
              deletable: config.deletable
            };

            this.tableData.push(configToInput);

          });
        })
  }

}
