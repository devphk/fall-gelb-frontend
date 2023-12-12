import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { ContractTypeService } from './contract-type.service';
import { FormContractTypeComponent } from '../components';
import { ContractType } from '@shared/models/contract-type';

@Component({
  selector: 'app-contract-type',
  templateUrl: './contract-type.component.html',
  styleUrls: ['./contract-type.component.scss'],
})
export class ContractTypeComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Nombre', 'Codigo'];
  tableColumnsTags: string[] = ['id', 'name', 'code'];
  tableData: any[] = [];
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private contractTypeService: ContractTypeService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getcontractTypes();
  }

  getcontractTypes() {
    this.contractTypeService.getContractTypes().subscribe(
      (response) => {
        const tableData: ContractType[] = [];

        response.forEach((contractType) => {
          const contractTypeToInput: any = {
            id: contractType.id,
            name: contractType.name,
            code: contractType.code,
          };

          tableData.push(contractTypeToInput);
        });

        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processContractType(processType: string) {
    this.dialogService
      .openDialog(
        FormContractTypeComponent,
        processType === 'Add'
          ? 'Crear Tipo de Contrato'
          : 'Editar Tipo de Contrato',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((contractType) => {
        if (contractType) {
          this.refreshContractTypes();
        }
      });
  }

  deleteContractType() {
    this.dialogService
      .openConfirmationDialog(
        `Eliminar Tipo de Contrato`,
        `¿Desea eliminar banco '${this.itemsSelected[0].name}'?`
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.contractTypeService
            .deleteContractTypes(this.itemsSelected[0].id)
            .subscribe(
              (data) => {
                this.toastService.showToaster(
                  'Tipo de Contrato eliminado correctamente!'
                );
                this.refreshContractTypes();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

  refreshContractTypes() {
    this.tableData = [];

    this.contractTypeService.getContractTypes().subscribe((contractTypes) => {
      contractTypes.forEach((contractType) => {
        const contractTypeToInput = {
          id: contractType.id,
          name: contractType.name,
        };

        this.tableData.push(contractTypeToInput);
      });
    });
  }
}
