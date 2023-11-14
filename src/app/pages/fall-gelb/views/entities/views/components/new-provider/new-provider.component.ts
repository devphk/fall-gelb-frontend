import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProviderService } from '../../providers/provider.service';
import { ToastService } from '@core/services';
import { SelectOption } from '@shared/models';

@Component({
  selector: 'app-new-provider',
  templateUrl: './new-provider.component.html',
  styleUrls: ['./new-provider.component.scss'],
})
export class NewProviderComponent implements OnInit {
  nationaltrigger: boolean = true;
  yesNoOptions: string[] = ['Si', 'No'];

  changeNational() {
    // if (this.nationaltrigger === true) {
    //   this.nationaltrigger = false;
    //   console.log('toggle on');
    // } else {
    //   this.nationaltrigger = true;
    //   console.log('toggle off');
    // }
  }
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewProviderComponent>,
    private providerService: ProviderService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
  providerForm: FormGroup = new FormGroup({});
  isEditMode: boolean = false;

  providerOptions: SelectOption[] = [];
  personTypeOptions: SelectOption[] = [];

  ngOnInit(): void {
    this.initializeForm();

    this.providerService.getProviderTypes().subscribe((providerTypes) => {
      providerTypes.map((providerType) => {
        this.providerOptions.push({
          id: providerType.id,
          name: providerType.name,
        });
      });
    });

    this.providerService.getPersonTypes().subscribe((personTypes) => {
      personTypes.map((personType) => {
        this.personTypeOptions.push({
          id: personType.id,
          name: personType.name,
        });
      });
    });
  }

  initializeForm() {
    this.providerForm = this.fb.group({
      name: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].name : ''
      ),
      phone: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].phone : ''
      ),
      email: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].email : ''
      ),
      active: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].active : ''
      ),
      address: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].address : ''
      ),
      special_tax_payer: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].special_tax_payer : ''
      ),
      iva_retention: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].iva_retention : ''
      ),
      person_type_id: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].person_type_id : ''
      ),
      provider_type_id: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].provider_type_id : ''
      ),

      is_national: this.fb.control(
        this.data.dialogData ? this.data.dialogData[0].is_national : ''
      ),
    });
  }

  saveNewProvider() {
    if (this.providerForm.valid) {
      const providerData = {
        name: this.providerForm.get('name')?.value,
        phone: this.providerForm.get('phone')?.value,
        email: this.providerForm.get('email')?.value,
        active: this.providerForm.get('active')?.value,
        address: this.providerForm.get('address')?.value,
        special_tax_payer: this.providerForm.get('special_tax_payer')?.value,
        iva_retention: this.providerForm.get('iva_retention')?.value,
        person_type_id: this.providerForm.get('person_type_id')?.value,
        provider_type_id: this.providerForm.get('provider_type_id')?.value,
        is_national: this.providerForm.get('is_national')?.value,
      };

      if (this.data.title === 'Crear Proveedor') {
        this.providerService.createProvider(providerData).subscribe(
          (data) => {
            this.toastService.showToaster('Proveedor Creada Correctamente!');
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {
        this.providerService
          .editProvider(providerData, this.data.dialogData[0].id)
          .subscribe(
            (data) => {
              this.toastService.showToaster('Proveedor Editada Correctamente!');
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
      }

      console.log(providerData);
    } else {
      this.providerForm.markAllAsTouched();
    }
  }
}
