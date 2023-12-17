import { Component, 
         OnInit,
         Inject } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CargoType, 
         Concept, 
         ConceptType, 
         Custom, 
         Customtype, 
         RetentionConcept, 
         TransportType } from '@shared/models';
import { ConceptsService } from '../../concepts';
import { ToastService } from '@core/services';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-form-concepts',
  templateUrl: './form-concepts.component.html',
  styleUrls: ['./form-concepts.component.scss']
})
export class FormConceptsComponent implements OnInit {

  conceptTypes: ConceptType[] = [];
  retentionConcepts: any[] = [];
  conceptOptionForm: FormGroup = this.fb.group({
    conceptType: this.fb.control('', [Validators.required]),
  });

  conceptForm: FormGroup = this.fb.group({
    retentionConcept: this.fb.control(''),
    forSale: this.fb.control('', [Validators.required]),
    forPurchase: this.fb.control('', [Validators.required])
  });

  editConceptForm!: FormGroup;

  // Options variables

  customTypesOptions: Customtype[] = [];
  retentionConceptOptions: RetentionConcept[] = [];
  customsOptions: Custom[] = [];
  transportTypesOptions: TransportType[] = [];
  cargoTypesOptions: CargoType[] = [];

  // Show and hide variables

  showCustomOptions: boolean = false;
  showGroundFreightOptions: boolean = false;
  internationalFreightOptions: boolean = false;
  showStorageOptions: boolean = false;
  showOtherOptions: boolean = false;

  // Edit variables

  isEdit: boolean = false;
  editingCustom: boolean = false;
  editingGroundFreight: boolean = false;
  editingInternationalFreight: boolean = false;
  editingStorage: boolean = false;
  editingOther: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private fb: FormBuilder,
              private conceptService: ConceptsService,
              private toastService: ToastService,
              private dialogRef: MatDialogRef<FormConceptsComponent>) { }

  ngOnInit(): void {

    console.log("data ", this.data)

    let title: string = this.data.title;
    this.conceptTypes = this.data.dialogData.conceptTypes;
    this.retentionConcepts = this.data.dialogData.retentionConcepts;

    if (title.includes('Editar')) {

      this.isEdit = true;

      let conceptType = this.conceptTypes.find((concept) => {
        return concept.id === this.data.dialogData.conceptData.concept_type_id
      });

      console.log("concept type ", conceptType)

      this.showConceptOptions(conceptType?.code, this.data.dialogData.conceptData);
      
    }

  }

  showConceptOptions(conceptCode: string | undefined,
                     concept: Concept) {

    switch (conceptCode) {

      case 'customs':

        this.editConceptForm = this.fb.group({
          customType: this.fb.control(concept.concept_customs?.customs_id, Validators.required)
        });
        this.editingCustom = true;
        
        break;

      case 'ground-freight':

        this.editConceptForm = this.fb.group({
          conceptOrigin: this.fb.control('', Validators.required),
          conceptDestination: this.fb.control('', Validators.required)
        });
        this.editingGroundFreight = true;

        break;
        
      case 'international-freight':

        this.editConceptForm = this.fb.group({
          conceptOrigin: this.fb.control('', Validators.required),
          conceptDestination: this.fb.control('', Validators.required),
          conceptTransportType: this.fb.control('', Validators.required)
        });
        this.editingInternationalFreight = true;

        break;
        
      case 'storage':

        this.editConceptForm = this.fb.group({
          customType: this.fb.control('', Validators.required),
          conceptCargoType: this.fb.control('', Validators.required),
          conceptRegion: this.fb.control('', Validators.required)
        });
        this.editingStorage = true;

        break;        
        
      case 'other':

        this.editConceptForm = this.fb.group({
          name: this.fb.control('', Validators.required)
        });
        this.editingOther = true;

        break;        

      default:
        break;
    }

  }

  changeConceptType(conceptCode: string) {

    switch (conceptCode) {
      case 'customs':

        this.resetFormExtraControls();

        let requests: Observable<any>[] = [];

        requests.push(this.conceptService.getCustomsTypes());
        requests.push(this.conceptService.getCustoms());
        requests.push(this.conceptService.getRetentionConcepts());

        forkJoin(requests).subscribe((responses) => {

          this.customTypesOptions = responses[0];
          this.customsOptions = responses[1];
          this.retentionConceptOptions = responses[2];
          this.conceptForm.addControl('customType', this.fb.control('', [Validators.required]));
          this.conceptForm.addControl('custom', this.fb.control('', [Validators.required]));
          this.conceptForm.addControl('retentionConcept', this.fb.control('', [Validators.required]));
          this.showCustomOptions = true;

        }, (error) => {
          this.toastService.showToaster('Error obteniendo opciones de aduanas', true);
        });
        
        break;

      case 'ground-freight':

        this.resetFormExtraControls();

        this.conceptService
            .getRetentionConcepts()
            .subscribe((response) => {

              this.retentionConceptOptions = response;
              
              // This type only need origin and destination
                  
              this.conceptForm.addControl('retentionConcept', this.fb.control('', [Validators.required]));
              this.conceptForm.addControl('conceptOrigin', this.fb.control('', [Validators.required]));
              this.conceptForm.addControl('conceptDestination', this.fb.control('', [Validators.required]));
      
              this.showGroundFreightOptions = true;

            });

        break;
        
      case 'international-freight':

        this.resetFormExtraControls();

        let internationalFreightRequests: Observable<any>[] = [];
        internationalFreightRequests.push(this.conceptService.getTransportTypes());
        internationalFreightRequests.push(this.conceptService.getRetentionConcepts());

        forkJoin(internationalFreightRequests).subscribe((responses) => {

          this.transportTypesOptions = responses[0];
          this.retentionConceptOptions = responses[1];
          this.conceptForm.addControl('conceptTransportType', this.fb.control('', [Validators.required]));
          this.conceptForm.addControl('retentionConcept', this.fb.control('', [Validators.required]));
          this.conceptForm.addControl('conceptOrigin', this.fb.control('', [Validators.required]));
          this.conceptForm.addControl('conceptDestination', this.fb.control('', [Validators.required]));
  
          this.internationalFreightOptions = true;
          
        }, (error) => {
          this.toastService.showToaster('Error obteniendo opciones de transportes', true);
        });
        
        break;
        
      case 'storage':

        this.resetFormExtraControls();

        let storageRequests: Observable<any>[] = [];

        storageRequests.push(this.conceptService.getCustomsTypes());
        storageRequests.push(this.conceptService.getCargoTypes());

        forkJoin(storageRequests).subscribe((responses) => {

          this.customTypesOptions = responses[0];
          this.cargoTypesOptions = responses[1];

          this.conceptForm.addControl('customType', this.fb.control('', [Validators.required]));
          this.conceptForm.addControl('conceptCargoType', this.fb.control('', [Validators.required]));
          this.conceptForm.addControl('conceptRegion', this.fb.control('', [Validators.required]));
          this.showStorageOptions = true;

        }, (error) => {
          this.toastService.showToaster('Error obteniendo opciones de almacenamiento', true);
        });

        break;        
        
      case 'other':

        this.resetFormExtraControls();

        this.conceptService
            .getRetentionConcepts()
            .subscribe((response) => {
              this.retentionConceptOptions = response;
              this.conceptForm.addControl('name', this.fb.control('', [Validators.required]));
              this.conceptForm.addControl('retentionConcept', this.fb.control('', [Validators.required]));
      
              this.showOtherOptions = true;

            }, (error) => {
              this.toastService.showToaster('Error obteniendo opciones de concepto', true);
            })

        
        break;        

      default:
        break;
    }

  }

  resetFormExtraControls() {

    this.conceptForm.removeControl('name');
    this.conceptForm.removeControl('conceptCargoType');
    this.conceptForm.removeControl('conceptRegion');
    this.conceptForm.removeControl('conceptTransportType');
    this.conceptForm.removeControl('customType');
    this.conceptForm.removeControl('custom');
    this.conceptForm.removeControl('conceptOrigin');
    this.conceptForm.removeControl('conceptDestination');
    this.conceptForm.removeControl('retentionConcept');
    
    this.showCustomOptions = false;
    this.showGroundFreightOptions = false;
    this.internationalFreightOptions = false;
    this.showStorageOptions = false;
    this.showOtherOptions = false;

  }

  saveConcept() {

    console.log("this.conceptForm ", this.conceptForm)

    if (this.conceptForm.valid) {
      
      if (this.showCustomOptions) {

        let conceptCode = this.conceptOptionForm.get('conceptType')?.value;

        let conceptSelected = this.conceptTypes.find((concept) => {
          return concept.code === conceptCode
        });

        let retentionConceptId = this.conceptForm.get('retentionConcept')?.value;
        let conceptTypeId: any = conceptSelected?.id;
        let customId = this.conceptForm.get('custom')?.value;
        let customTypeId = this.conceptForm.get('customType')?.value;
        let forSale = this.conceptForm.get('forSale')?.value;
        let forPurchase = this.conceptForm.get('forPurchase')?.value;

        this.conceptService
            .createCustomConcept(retentionConceptId,
                                 conceptTypeId,
                                 customId,
                                 customTypeId,
                                 forSale,
                                 forPurchase)
            .subscribe((response => {
              this.toastService.showToaster("Concepto creado existosamente");
              this.dialogRef.close(true);
            }), (error) => {
              this.toastService.showToaster("Error creando concepto", true);
            });
        
      } else if (this.showGroundFreightOptions) {

        let conceptCode = this.conceptOptionForm.get('conceptType')?.value;

        let conceptSelected = this.conceptTypes.find((concept) => {
          return concept.code === conceptCode
        });

        let retentionConceptId = this.conceptForm.get('retentionConcept')?.value;
        let conceptTypeId: any = conceptSelected?.id;
        let origin = this.conceptForm.get('conceptOrigin')?.value;
        let destination = this.conceptForm.get('conceptDestination')?.value;
        let forSale = this.conceptForm.get('forSale')?.value;
        let forPurchase = this.conceptForm.get('forPurchase')?.value;

        this.conceptService
            .createGroundFreightConcept(retentionConceptId,
                                        conceptTypeId,
                                        origin,
                                        destination,
                                        forSale,
                                        forPurchase)
            .subscribe((response => {
              this.toastService.showToaster("Concepto creado existosamente");
              this.dialogRef.close(true);
            }), (error) => {
              this.toastService.showToaster("Error creando concepto", true);
            });

      } else if (this.internationalFreightOptions) {

        let conceptCode = this.conceptOptionForm.get('conceptType')?.value;

        let conceptSelected = this.conceptTypes.find((concept) => {
          return concept.code === conceptCode
        });

        let retentionConceptId = this.conceptForm.get('retentionConcept')?.value;
        let conceptTypeId: any = conceptSelected?.id;
        let origin = this.conceptForm.get('conceptOrigin')?.value;
        let destination = this.conceptForm.get('conceptDestination')?.value;
        let forSale = this.conceptForm.get('forSale')?.value;
        let forPurchase = this.conceptForm.get('forPurchase')?.value;
        let transportType = this.conceptForm.get('conceptTransportType')?.value;

        this.conceptService
            .createInternationalFreightConcept(retentionConceptId,
                                                conceptTypeId,
                                                origin,
                                                destination,
                                                transportType,
                                                forSale,
                                                forPurchase)
            .subscribe((response => {
              this.toastService.showToaster("Concepto creado existosamente");
              this.dialogRef.close(true);
            }), (error) => {
              this.toastService.showToaster("Error creando concepto", true);
            });

      } else if (this.showStorageOptions) {

        let conceptCode = this.conceptOptionForm.get('conceptType')?.value;

        let conceptSelected = this.conceptTypes.find((concept) => {
          return concept.code === conceptCode
        });

        let customTypeId = this.conceptForm.get('customType')?.value;
        let conceptTypeId: any = conceptSelected?.id;
        let cargoType = this.conceptForm.get('conceptCargoType')?.value;
        let region = this.conceptForm.get('conceptRegion')?.value;
        let forSale = this.conceptForm.get('forSale')?.value;
        let forPurchase = this.conceptForm.get('forPurchase')?.value;

        this.conceptService
            .createStorageConcept(conceptTypeId,
                                  customTypeId,
                                  cargoType,
                                  region,
                                  forSale,
                                  forPurchase)
            .subscribe((response => {
              this.toastService.showToaster("Concepto creado existosamente");
              this.dialogRef.close(true);
            }), (error) => {
              this.toastService.showToaster("Error creando concepto", true);
            });

      } else if (this.showOtherOptions) {

        let conceptCode = this.conceptOptionForm.get('conceptType')?.value;

        let conceptSelected = this.conceptTypes.find((concept) => {
          return concept.code === conceptCode
        });

        let conceptTypeId: any = conceptSelected?.id;
        let name = this.conceptForm.get('name')?.value;
        let retentionConceptId = this.conceptForm.get('retentionConcept')?.value;
        let forSale = this.conceptForm.get('forSale')?.value;
        let forPurchase = this.conceptForm.get('forPurchase')?.value;

        this.conceptService
            .createConceptOther(name,
                                retentionConceptId,
                                conceptTypeId,
                                forSale,
                                forPurchase)
            .subscribe((response => {
              this.toastService.showToaster("Concepto creado existosamente");
              this.dialogRef.close(true);
            }), (error) => {
              this.toastService.showToaster("Error creando concepto", true);
            });

      }

    } else {
      this.conceptForm.markAllAsTouched();
    }

  }

}
