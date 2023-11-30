import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { DriverDataPost, DriverResponse, SelectOption } from '@shared/models';
import { DriversService } from '../../drivers/drivers.service';
import { ProviderService } from '../../providers/provider.service';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.scss'],
})
export class NewDriverComponent implements OnInit {
  constructor(
    private formBuild: FormBuilder,
    private dialogRef: MatDialogRef<NewDriverComponent>,
    private driverService: DriversService,
    private providerService: ProviderService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  private transportTypeId: string = 'Ground-transportation';
  isEditMode: boolean = false;
  providers: SelectOption[] = [];

  driverForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.providerService
      .getProviders(this.transportTypeId)
      .subscribe((providers) => {
        providers.map((provider) => {
          this.providers.push({
            id: provider.entity.id,
            name: provider.entity.name,
          });
        });
      });

    this.initializeForm();
  }

  initializeForm() {
    this.isEditMode = this.data.dialogData ? true : false;
    this.driverForm = this.formBuild.group({
      name: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].name : '',
        [Validators.required]
      ),
      phone: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].phone : '',
        [Validators.required]
      ),
      email: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].email : '',
        [Validators.required, Validators.email]
      ),
      active: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].active : true
      ),
      address: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].address : '',
        [Validators.required]
      ),
      is_self_employed: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].is_self_employed : ''
      ),
      provider_id: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].provider_id : undefined
      ),
    });
  }

  saveDriver() {
    if (this.driverForm.valid) {
      if (this.data.title === 'Crear Chofer') {
        const driver: DriverDataPost = {
          name: this.driverForm.get('name')?.value,
          phone: this.driverForm.get('phone')?.value,
          email: this.driverForm.get('email')?.value,
          active: this.driverForm.get('active')?.value,
          address: this.driverForm.get('address')?.value,
          is_self_employed: this.driverForm.get('is_self_employed')?.value,
          provider_id: this.driverForm.get('provider_id')?.value ?? undefined,
        };

        this.driverService.createDriver(driver).subscribe(
          (data: DriverDataPost[]) => {
            this.toastService.showToaster('Chofer Creado Correctamente!');
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {
        const driverEdit = {
          name: this.driverForm.get('name')?.value,
          phone: this.driverForm.get('phone')?.value,
          email: this.driverForm.get('email')?.value,
          active: this.driverForm.get('active')?.value,
          address: this.driverForm.get('address')?.value,
          is_self_employed: this.driverForm.get('is_self_employed')?.value,
          provider_id: this.driverForm.get('provider_id')?.value ?? undefined,
        };

        this.driverService
          .editDriver(driverEdit, this.data.dialogData[0].id)
          .subscribe(
            (data) => {
              this.toastService.showToaster('Chofer Editado Correctamente!');
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
      }
    } else {
      this.driverForm.markAllAsTouched();
    }
  }
}
