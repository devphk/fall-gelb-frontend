import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { defaultTableColumnsToDisplay } from '@shared/models/table';
import { FormProviderComponent } from '../components';
import { ProviderService } from './provider.service';
import { ProviderDataTabla, ProviderResponse } from '@shared/models/provider';
import { Router } from '@angular/router';
import { ViewProviderComponent } from '../components/view-provider/view-provider.component';
import { ProviderModalComponent } from '../components/provider-modal/provider-modal.component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
})
export class ProvidersComponent implements OnInit {
  tableColumnsToDisplay: string[] = [
    'ID',
    'Nombre',
    'Teléfono',
    'Dirección fiscal',
    'Contribuyente',
    'Retencion de IVA',
  ];
  tableColumnsTags: string[] = [
    'id',
    'name',
    'phone',
    'address',
    'special_tax_payer',
    'iva_retention',
  ];
  tableData: any[] = [];

  itemsSelected: any[] = [];

  viewSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private providerService: ProviderService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProviders();
  }

  getProviders() {
    this.tableData = [];

    this.providerService.getProviders().subscribe(
      (response) => {
        const tableData: ProviderDataTabla[] = [];

        response.forEach((provider: ProviderResponse) => {
          const providerToInput: ProviderDataTabla = {
            id: provider.id,
            name: provider.entity.name,
            phone: {
              value: provider.entity.phone,
              mask: '(0000)-000-0000',
            },
            address: provider.entity.address,
            special_tax_payer: provider.special_tax_payer,
            iva_retention: provider.iva_retention,
            email: provider.entity.email,
            active: provider.entity.active,
            person_type_id: provider.person_type_id,
            provider_type_id: provider.provider_type_id,
            is_national: provider.is_national,
            provider_transport_type_id: provider.provider_transport_type_id,
          };

          tableData.push(providerToInput);
        });

        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processProvider(processType: string) {
    this.dialogService
      .openDialog(
        FormProviderComponent,
        processType === 'Add' ? 'Crear Proveedor' : 'Editar Proveedor',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((provider) => {
        if (provider) {
          this.getProviders();
        }
      });
  }

  deleteProvider() {
    this.dialogService
      .openConfirmationDialog(
        `Desea eliminar Proveedor '${this.itemsSelected[0].name}'`,
        'Este cambio no se puede revertir'
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.providerService
            .deleteProviders(this.itemsSelected[0].id)
            .subscribe(
              (data) => {
                this.toastService.showToaster(
                  'Proveedor eliminado correctamente!'
                );
                this.getProviders();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

  seeRegister(selected: ProviderDataTabla) {
    this.viewSelected.pop();
    this.viewSelected.push(selected);

    this.dialogService
      .openDialog(
        ProviderModalComponent,
        ``,
        '1000px',
        'auto',
        this.viewSelected
      )
      .afterClosed()
      .subscribe((provider) => {
        if (provider) {
          this.getProviders();
        }
      });
  }
}
