import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService, ToastService } from '@core/services';
import { ProviderService } from '../../providers/provider.service';
import { ProviderDocuments } from '@shared/models/provider';
import { FormProviderDocumentsComponent } from '../form-provider-documents/form-provider-documents.component';
import { DialogData } from '../../../../../../../core/models/dialog';

@Component({
  selector: 'app-provider-documents',
  templateUrl: './provider-documents.component.html',
  styleUrls: ['./provider-documents.component.scss']
})
export class ProviderDocumentsComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    'Nombre del Documento',
    'Estatus',
    'Fecha de Actualización',
  ];
  tableColumnsTags: string[] = [
    'name',
    'file',
    'updated_at',
  ];
  tableData: any[] = [];

  itemsSelected: any[] = [];

  providerId: number = 0;
  selectedName: string = '';

  constructor(
    private dialogService: DialogService,
    private toastService: ToastService,
    private providerService: ProviderService,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {}

  ngOnInit(): void {
    this.selectedName = this.data.dialogData[0].name;
    this.providerId =  this.data.dialogData[0].id;
    this.getProviderDocuments();
  }

  getProviderDocuments() {
    this.tableData = [];

    this.providerService.getProviderDocuments(this.data.dialogData[0].id)
    .subscribe((response) => {

        const tableData: ProviderDocuments[] = [];

        response.forEach((provider: ProviderDocuments) => {

          console.log('provider: ', provider);
          const originalDate = provider.updated_at;
          const convertedDate = new Date(originalDate);

          const formatedDate = convertedDate.toISOString().slice(0, 10);
          const formatHour = convertedDate.toISOString().slice(11, 16);

          const convertedDateHour = `${formatedDate} ${formatHour}`;

          if(provider.entity_document_item) {
            const providerDocumentToInput: ProviderDocuments = {
              id:provider.id,
              name: provider.name,
              file_types: provider.file_types,
              required_document_number: provider.required_document_number,
              expired_days: provider.expired_days,
              created_at: provider.created_at,
              updated_at: convertedDateHour,
              entity_document_item: provider.entity_document_item,
              documentID: provider.entity_document_item.id,
              file: 'Registrado',
            };
            tableData.push(providerDocumentToInput)
          }else{

            const providerDocumentToInput: ProviderDocuments = {
              id:provider.id,
              name: provider.name,
              file_types: provider.file_types,
              required_document_number: provider.required_document_number,
              expired_days: provider.expired_days,
              created_at: provider.created_at,
              updated_at: convertedDateHour,
              entity_document_item: provider.entity_document_item ?? 'No registrado',
              file: 'No registrado',
            };
            tableData.push(providerDocumentToInput)
          }
          
        });
        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processProvider(processType: string) {
    this.itemsSelected.push(this.providerId);
    this.dialogService
      .openDialog(
        FormProviderDocumentsComponent,
        processType === 'Add' ? 'Crear Documento de Proveedor' : 'Editar Documento de Proveedor',
        '800px',
        'auto',
        processType === 'Add' ? this.data.dialogData[0] : this.itemsSelected
      )
      .afterClosed()
      .subscribe((provider) => {
        if (provider) {
          this.getProviderDocuments();
        }
      });
  }

  deleteProvider() {

    console.log('itemsSelected: ', this.itemsSelected[0]);
    console.log('dialogData: ', this.data.dialogData);
    console.log('documentID: ', this.itemsSelected[0].documentID);

    this.dialogService
      .openConfirmationDialog(
        `Desea eliminar Documento '${this.itemsSelected[0].name}'`,
        'Este cambio no se puede revertir'
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.providerService
            .deleteProviderDocument(this.itemsSelected[0].documentID)
            .subscribe(
              (data) => {
                this.toastService.showToaster(
                  'Documento eliminado correctamente!'
                );
                this.getProviderDocuments();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

  seeRegister(select:any) {
    console.log(select)
  }

}
