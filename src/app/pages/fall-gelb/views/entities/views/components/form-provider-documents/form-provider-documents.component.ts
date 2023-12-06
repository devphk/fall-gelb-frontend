import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProviderService } from '../../providers/provider.service';
import { ToastService } from '@core/services';
import { SelectOption } from '@shared/models';
import { EditProviderDocumentPost, ProviderDocumentPost } from '@shared/models/provider';
import { UtilsService } from '@core/services/utils-service.service';

@Component({
  selector: 'app-form-provider-documents',
  templateUrl: './form-provider-documents.component.html',
  styleUrls: ['./form-provider-documents.component.scss']
})
export class FormProviderDocumentsComponent implements OnInit {

  documentTypes:SelectOption[] = [];
  expirationDate: SelectOption[] = [];
  expire: boolean = false;
  docNumberRequired: boolean = false;
  file!:File | undefined; 

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormProviderDocumentsComponent>,
    private providerService: ProviderService,
    private toastService: ToastService,
    private utilsService:UtilsService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
  
  providerDocumentForm: FormGroup = new FormGroup({});


  ngOnInit(): void {
    console.log('Data: ', this.data);
    this.getDocumentTypes();
    this.initializeForm();
  }

  getDocumentTypes() {
    this.providerService.getDocumentTypes()
      .subscribe((resp) => {
        this.documentTypes = resp;
      })
  }

  getFormValidity() {
    this.providerService.getDocumentType(this.providerDocumentForm.get('documentType')?.value)
      .subscribe((resp) => {
        if(resp.expired_days > 0){
          this.expire = true;
        }else{
          this.expire = false;
        }

        if(resp.required_document_number === true){
          this.docNumberRequired = true;
        }else{ 
          this.docNumberRequired = false;
        }
        
        if (!this.docNumberRequired) {
          this.providerDocumentForm.get('documentNumber')?.clearValidators();
          this.providerDocumentForm.get('documentNumber')?.updateValueAndValidity();

        } else if(this.docNumberRequired){
          this.providerDocumentForm.get('documentNumber')?.setValidators([Validators.required]);
          this.providerDocumentForm.get('documentNumber')?.updateValueAndValidity();

        }
  
        if(!this.expire) {
          this.providerDocumentForm.get('creationDate')?.clearValidators();
          this.providerDocumentForm.get('creationDate')?.updateValueAndValidity();

        }else if (this.expire){ 
          this.providerDocumentForm.get('creationDate')?.setValidators([Validators.required]);
          this.providerDocumentForm.get('creationDate')?.updateValueAndValidity();

        }
      })
  }

  initializeForm() {

    let selectedDate: Date | string = '';

    if(this.data.dialogData[0]) {

      const timezoneOffset = new Date().getTimezoneOffset();
      const ajustedDate = new Date(this.data.dialogData[0].entity_document_item.admission_date);
      
      ajustedDate.setMinutes(ajustedDate.getMinutes() + timezoneOffset);
      selectedDate = ajustedDate
    }
  
    console.log('SelectedDate: ', selectedDate)

    this.providerDocumentForm = this.fb.group({
      documentType: this.fb.control(
        this.data.dialogData[0] ? this.data.dialogData[0].entity_document_item.document_type_id
        : '',
        [Validators.required]
      ),
      creationDate: this.fb.control(
        this.data.dialogData[0] ? selectedDate
        : null,
        [Validators.required]
      ),
      documentNumber: this.fb.control(
        this.data.dialogData[0] ? this.data.dialogData[0].entity_document_item.document_number
        : null,
        [Validators.required]
      ),
    });

    this.getFormValidity();

    this.providerDocumentForm.get('documentType')?.valueChanges.subscribe((value) => {

      this.getFormValidity();
    });
    
  }

  async saveNewProvider() {

    this.providerDocumentForm.get('documentNumber')?.updateValueAndValidity();
    this.providerDocumentForm.get('creationDate')?.updateValueAndValidity();

    if (this.providerDocumentForm.valid && this.file) {


      if (this.data.title === 'Crear Documento de Proveedor') {
        const providerDocumentData: ProviderDocumentPost = {
          resource_id: this.data.dialogData.id,
          resource: 'providers',
          document_type_id: this.providerDocumentForm.get('documentType')?.value,
          admission_date: this.providerDocumentForm.get('creationDate')?.value,
          document_number: this.providerDocumentForm.get('documentNumber')?.value,
          file: await this.utilsService.fileToBase64(this.file)
        };

        this.providerService.createProviderDocument(providerDocumentData).subscribe(
          (data) => {
            this.toastService.showToaster('Documento de Proveedor Creado Correctamente!');
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {

      const editProviderDocumentData: EditProviderDocumentPost = {
        admission_date: this.providerDocumentForm.get('creationDate')?.value,
        file: await this.utilsService.fileToBase64(this.file)
      };

      console.log('editProviderDocumentData: ', editProviderDocumentData)
      console.log('documentID: ', this.data.dialogData[0].entity_document_item.id)
      console.log('EDITANDO...')

        this.providerService
          .editProviderDocument(editProviderDocumentData, this.data.dialogData[0].entity_document_item.id)
          .subscribe(
            (data) => {
              this.toastService.showToaster('Documento de Proveedor Editado Correctamente!');
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );          
      }

    } else {
      this.providerDocumentForm.markAllAsTouched();
    }
  }

}
