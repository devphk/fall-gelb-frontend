import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DialogService, ToastService } from '@core/services';
import { ProviderService } from '../../providers/provider.service';
import { ProviderDataTabla, ProviderResponse } from '@shared/models/provider';
import { FormProviderServicesComponent } from '../form-provider-services/form-provider-services.component';

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
    'name',
    'phone',
    'address',
  ];
  tableData: any[] = [];

  itemsSelected: any[] = [];

  selectedId: number = 0;
  selectedName: string = '';

  constructor(
    private dialogService: DialogService,
    private toastService: ToastService,
    private route: ActivatedRoute,
    private providerService: ProviderService
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe( params => {
      this.selectedId = params['id'];
      this.selectedName = params['name'];
      this.getProviderServices();
    })
  }

  getProviderServices() {
    this.providerService.getProviderServices(this.selectedId)
    .subscribe((response) => {
        const tableData: ProviderDataTabla[] = [];

        response.forEach((provider: ProviderResponse) => {
          const providerServiceToInput: ProviderDataTabla = {
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

          tableData.push(providerServiceToInput);
        });

        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processProvider(processType: string) {
    this.dialogService
      .openDialog(
        FormProviderServicesComponent,
        processType === 'Add' ? 'Crear Servicio de Proveedor' : 'Editar Servicio de Proveedor',
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
    // this.dialogService
    //   .openConfirmationDialog(
    //     `Desea eliminar Proveedor '${this.itemsSelected[0].name}'`,
    //     'Este cambio no se puede revertir'
    //   )
    //   .afterClosed()
    //   .subscribe((response) => {
    //     if (response) {
    //       this.providerService
    //         .deleteProviders(this.itemsSelected[0].id)
    //         .subscribe(
    //           (data) => {
    //             this.toastService.showToaster(
    //               'Proveedor eliminado correctamente!'
    //             );
    //             this.refreshProviders();
    //           },
    //           (error) =>
    //             this.toastService.showToaster(error.error.message, true)
    //         );
    //     }
    //   });
  }

  refreshProviders() {
    // this.tableData = [];

    // this.providerService.getProviders().subscribe((providers) => {
    //   providers.forEach((provider: any) => {
    //     const providerToInput = {
    //       id: provider.id,
    //       providerId: provider,
    //       providerName: provider,
    //       numberAccount: provider,
    //       currencyId: provider,
    //       currencyName: provider.name,
    //     };

    //     this.tableData.push(providerToInput);
    //   });
    // });
  }

}
