import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WithholdingConceptComponent } from '../../withholding-concept/withholding-concept.component';
import { WithholdingConceptsService } from '../../withholding-concept/withholding-concept.service';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-form-withholding-concepts',
  templateUrl: './form-withholding-concepts.component.html',
  styleUrls: ['./form-withholding-concepts.component.scss']
})
export class FormWithholdingConceptsComponent implements OnInit {

  conceptForm: FormGroup = new FormGroup({})

  constructor(private formBuild: FormBuilder,
              private dialogRef:MatDialogRef<FormWithholdingConceptsComponent>,
              private conceptsService:WithholdingConceptsService,
              private toastService:ToastService,
              @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    this.initializeForm(); 
    console.log('Data: ', this.data)   
  }
  
  initializeForm() {

    this.conceptForm = this.formBuild.group({
      name: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
      naturalPerson: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].natural_person : '', [Validators.required]),
      naturalPersonCode: this.formBuild.control(''),
      legalPerson: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].legal_person : '', [Validators.required]),
      legalPersonCode: this.formBuild.control(''),

    });

  }

  saveConcept() {
    if (this.conceptForm.valid) {

      if (this.data.title === 'Crear Concepto de Retención'){
        
        const concept = {
          name: this.conceptForm.get('name')?.value, 
          natural_person: this.conceptForm.get('naturalPerson')?.value, 
          natural_person_code: this.conceptForm.get('naturalPersonCode')?.value,
          legal_person: this.conceptForm.get('legalPerson')?.value,
          legal_person_code: this.conceptForm.get('legalPersonCode')?.value,
 
        }
        console.log(concept);
  
        // this.conceptsService.createConcept(concept)
        //   .subscribe((data) => {
        //     this.toastService.showToaster("Concepto Creado Correctamente!")
        //     this.dialogRef.close(true);
        //   },
        //     (error) => this.toastService.showToaster(error.error.message, true))

      }else {

        const editConcept = {
          name: this.conceptForm.get('name')?.value, 
          natural_person: this.conceptForm.get('naturalPerson')?.value, 
          natural_person_code: this.conceptForm.get('naturalPersonCode')?.value,
          legal_person: this.conceptForm.get('legalPerson')?.value,
          legal_person_code: this.conceptForm.get('legalPersonCode')?.value,
 
        }
  
        console.log(editConcept)
  
          // this.conceptsService.editConcept(editConcept, this.data.dialogData[0].id)
          // .subscribe((data) =>{
          //   this.toastService.showToaster("Concepto Editado Correctamente!")
          //   this.dialogRef.close(true);
          // },
          //   (error) => this.toastService.showToaster(error.error.message, true))
                     
      }

    }else {
      this.conceptForm.markAllAsTouched();
      
    } 
  }

}
