import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DialogService, ToastService } from '@core/services';
import { ProviderService } from '../../providers/provider.service';
import { FormProviderServicesComponent } from '../form-provider-services/form-provider-services.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../../../../../core/models/dialog';
import { ProviderServices } from '@shared/models/provider';

@Component({
  selector: 'app-view-provider',
  templateUrl: './view-provider.component.html',
  styleUrls: ['./view-provider.component.scss']
})
export class ViewProviderComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    'Nombre',
    'Monto',
    'Fecha de Validez',
  ];
  tableColumnsTags: string[] = [
    'concept_name',
    'amount',
    'validity_date',
  ];
  tableData: any[] = [];

  itemsSelected: any[] = [];

  providerId: number = 0;
  selectedName: string = '';

  constructor(
    private dialogService: DialogService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private providerService: ProviderService,
    @Inject(MAT_DIALOG_DATA) private data: any,
  ) {}

  ngOnInit(): void {
    this.selectedName = this.data.dialogData[0].name;
    this.providerId =  this.data.dialogData[0].id;
    this.getProviderServices();
  }

  getProviderServices() {
    this.tableData = [];

    this.providerService.getProviderServices(this.data.dialogData[0].id)
    .subscribe((response) => {
        const tableData: ProviderServices[] = [];

        response.forEach((provider: ProviderServices) => {
          const providerServiceToInput: ProviderServices = {
            id:provider.id,
            amount: provider.amount,
            validity_date: provider.validity_date,
            concept_id: provider.concept_id,
            unit_id: provider.unit_id,
            currency_id: provider.currency_id,
            iva: provider.iva,
            payment_term_id: provider.payment_term_id,
            concept_name: provider.concept.name,
            currency: provider.currency,
            payment_term: provider.payment_term,
            provider: provider.provider,
            concept: provider.concept,
            provider_id: provider.provider_id,
            unit: provider.unit
          };

          tableData.push(providerServiceToInput);

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
        FormProviderServicesComponent,
        processType === 'Add' ? 'Crear Servicio de Proveedor' : 'Editar Servicio de Proveedor',
        '800px',
        'auto',
        processType === 'Add' ? this.data.dialogData[0] : this.itemsSelected
      )
      .afterClosed()
      .subscribe((provider) => {
        if (provider) {
          this.getProviderServices();
        }
      });
  }

  deleteProvider() {

    this.dialogService
      .openConfirmationDialog(
        `Desea eliminar Servicio '${this.itemsSelected[0].concept_name}'`,
        'Este cambio no se puede revertir'
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.providerService
            .deleteProviderService(this.providerId, this.itemsSelected[0].id)
            .subscribe(
              (data) => {
                this.toastService.showToaster(
                  'Servicio eliminado correctamente!'
                );
                this.getProviderServices();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

}
