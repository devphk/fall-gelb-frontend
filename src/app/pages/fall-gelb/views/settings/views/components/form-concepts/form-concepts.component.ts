import { Component, 
         OnInit,
         Inject } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CargoType, 
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
    name: this.fb.control('', [Validators.required]),
    conceptType: this.fb.control('', [Validators.required]),
  });

  conceptForm: FormGroup = this.fb.group({
    retentionConcept: this.fb.control(''),
    forSale: this.fb.control('', [Validators.required]),
    forPurchase: this.fb.control('', [Validators.required])
  });

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

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private fb: FormBuilder,
              private conceptService: ConceptsService,
              private toastService: ToastService) { }

  ngOnInit(): void {

    this.conceptTypes = this.data.dialogData.conceptTypes;
    this.retentionConcepts = this.data.dialogData.retentionConcepts;
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
          this.conceptForm.addControl('conceptCustomType', this.fb.control('', [Validators.required]));
          this.conceptForm.addControl('conceptCustom', this.fb.control('', [Validators.required]));
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
                  
              this.conceptForm.addControl('conceptOrigin', this.fb.control('', [Validators.required]));
              this.conceptForm.addControl('conceptDestination', this.fb.control('', [Validators.required]));
              this.conceptForm.addControl('retentionConcept', this.fb.control('', [Validators.required]));
      
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
          this.retentionConceptOptions = responses[0];
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

          this.conceptForm.addControl('conceptCargoType', this.fb.control('', [Validators.required]));
          this.conceptForm.addControl('conceptRegion', this.fb.control('', [Validators.required]));
          this.showStorageOptions = true;

        }, (error) => {
          this.toastService.showToaster('Error obteniendo opciones de almacenamiento', true);
        });

        break;        
        
      case 'other':

        this.resetFormExtraControls();
        this.showOtherOptions = true;
        
        break;        

      default:
        break;
    }

  }

  resetFormExtraControls() {

    this.conceptForm.removeControl('conceptCargoType');
    this.conceptForm.removeControl('conceptRegion');
    this.conceptForm.removeControl('conceptTransportType');
    this.conceptForm.removeControl('conceptCustomType');
    this.conceptForm.removeControl('conceptCustom');
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

    if (this.conceptForm.valid) {
      
      if (this.showCustomOptions) {

        let retentionConceptId = this.conceptForm.get('retentionConcept')?.value;
        let conceptTypeId = this.conceptForm.get('conceptType')?.value;
        let customId = this.conceptForm.get('conceptCustom')?.value;
        let customTypeId = this.conceptForm.get('conceptCustomType')?.value;
        let forSale = this.conceptForm.get('forSale')?.value;
        let forPurchase = this.conceptForm.get('forPurchase')?.value;

        console.log("conceptTypeId ", conceptTypeId)

        this.conceptService
            .createCustomConcept(retentionConceptId,
                                 conceptTypeId,
                                 customId,
                                 customTypeId,
                                 forSale,
                                 forPurchase)
            .subscribe((response => {
              this.toastService.showToaster("Concepto creado existosamente");
            }), (error) => {
              this.toastService.showToaster("Error creando concepto", true);
            })
        
      } else if (this.showGroundFreightOptions) {

      } else if (this.internationalFreightOptions) {

      } else if (this.showStorageOptions) {

      } else if (this.showOtherOptions) {

      }

    } else {
      this.conceptForm.markAllAsTouched();
    }

  }

}
