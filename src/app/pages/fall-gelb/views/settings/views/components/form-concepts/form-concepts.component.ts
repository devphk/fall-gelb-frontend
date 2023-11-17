import { Component, 
         OnInit,
         Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CargoType, ConceptType, Customs, Customtype, TransportType, WithholdingConcept } from '@shared/models';
import { ConceptsService } from '../../concepts';
import { MatSelectChange } from '@angular/material/select';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-form-concepts',
  templateUrl: './form-concepts.component.html',
  styleUrls: ['./form-concepts.component.scss']
})
export class FormConceptsComponent implements OnInit {

  conceptTypes: any[] = [];
  withholdingConcepts: any[] = [];
  conceptOptionForm: FormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    conceptType: this.fb.control('', [Validators.required]),
  });

  conceptForm: FormGroup = this.fb.group({
    withholdingConcept: this.fb.control(''),
    forSale: this.fb.control('', [Validators.required]),
    forPurchase: this.fb.control('', [Validators.required])
  });

  // Options variables

  customTypesOptions: Customtype[] = [];
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

    const conceptTypes: ConceptType[] = this.data.dialogData.conceptTypes;

    conceptTypes.forEach((concept) => {
      const conceptOption = {
        value: concept.code,
        viewValue: concept.name
      }
      this.conceptTypes.push(conceptOption);
    });

    this.withholdingConcepts = this.data.dialogData.withholdingConcepts;
  }

  changeConceptType(conceptCode: string) {

    switch (conceptCode) {
      case 'customs':

        this.conceptService
            .getCustomsTypes()
            .subscribe((response) => {
              this.customTypesOptions = response;
            }, (error) => {
              this.toastService.showToaster('Error obteniendo opciones de aduanas', true);
            });

        this.showCustomOptions = true;
        
        break;

      case 'ground-freight':

        // This type only need origin and destination

        this.showGroundFreightOptions = true;

        break;
        
      case 'international-freight':

        this.conceptService
            .getTransportTypes()
            .subscribe((response) => {
              this.transportTypesOptions = response;
            }, (error) => {
              this.toastService.showToaster('Error obteniendo opciones de cargamento', true);
            });

        this.internationalFreightOptions = true;
        
        break;
        
      case 'storage':

        this.conceptService
            .getCargoTypes()
            .subscribe((response) => {
              this.cargoTypesOptions = response;
            }, (error) => {
              this.toastService.showToaster('Error obteniendo opciones de almacenamiento', true);
            });

        this.showStorageOptions = true;

        break;        

        
      case 'other':

        this.showOtherOptions = true;
        
        break;        

      default:
        break;
    }

  }

  saveConcept() {

  }

}
