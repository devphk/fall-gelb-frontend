import { Component, OnInit } from '@angular/core';
import { DocumentValidationsService } from './document-validations.service';
import { DialogService, ToastService } from '@core/services';
import { EntityDocumentValidateDataTable } from '@shared/models/entity-document-validate';
import { FormDocumentValidationsComponent } from '../components/form-document-validations/form-document-validations.component';

@Component({
  selector: 'app-document-validations',
  templateUrl: './document-validations.component.html',
  styleUrls: ['./document-validations.component.scss'],
})
export class DocumentValidationsComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Observacion', 'Estado'];
  tableColumnsTags: string[] = ['id', 'observations', 'status'];
  tableData: any = [];
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private documentValidationsService: DocumentValidationsService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getDocumentValidations();
  }

  getDocumentValidations() {
    this.documentValidationsService
      .getDocumentValidate()
      .subscribe((response) => {
        const tableData: EntityDocumentValidateDataTable[] = [];
        response.forEach((documentValidations) => {
          const documentValidationToInput: any = {
            id: documentValidations.id,
            observations: documentValidations.observations
              ? documentValidations.observations
              : 'N/A',
            status: documentValidations.status,
          };
          tableData.push(documentValidationToInput);
        });
        console.log(tableData);
        this.tableData = tableData;
      });
  }

  processDocumentValidations() {
    this.dialogService
      .openDialog(
        FormDocumentValidationsComponent,
        'Validar Documento',
        '800px',
        'auto',
        this.itemsSelected
      )
      .afterClosed()
      .subscribe((custom) => {
        if (custom) {
          this.refreshDocumentValidations();
        }
      });
  }

  refreshDocumentValidations() {
    this.tableData = [];
    this.getDocumentValidations();
  }
}
