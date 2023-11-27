import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { defaultTableColumnsToDisplay } from '@shared/models/table';
import { NewProviderComponent } from '../components';
import { ProviderService } from './provider.service';
import { ProviderDataTabla, ProviderResponse } from '@shared/models/provider';
import { Router } from '@angular/router';
import { ViewProviderComponent } from '../components/view-provider/view-provider.component';

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
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getproviders();
  }

  getproviders() {
    this.providerService.getProviders().subscribe(
      (response) => {
        const tableData: ProviderDataTabla[] = [];

        response.forEach((provider: ProviderResponse) => {
          const providerToInput: ProviderDataTabla = {
            id: provider.id,
            name: provider.entity.name,
            phone: provider.entity.phone,
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
        NewProviderComponent,
        processType === 'Add' ? 'Crear Proveedor' : 'Editar Proveedor',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((provider) => {
        if (provider) {
          this.refreshProviders();
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
                this.refreshProviders();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

  refreshProviders() {
    this.tableData = [];

    this.providerService.getProviders().subscribe((providers) => {
      providers.forEach((provider: any) => {
        const providerToInput = {
          id: provider.id,
          providerId: provider,
          providerName: provider,
          numberAccount: provider,
          currencyId: provider,
          currencyName: provider.name,
        };

        this.tableData.push(providerToInput);
      });
    });
  }

  seeRegister( selected: ProviderDataTabla) {
    this.viewSelected.pop();
    this.viewSelected.push(selected);
    console.log(selected);

    this.dialogService
      .openDialog(
        ViewProviderComponent,
        ``, '1000px', 'auto', this.viewSelected
      )
      .afterClosed()
      .subscribe((provider) => {
        if (provider) {
          this.refreshProviders();
        }
      });
  }
}
