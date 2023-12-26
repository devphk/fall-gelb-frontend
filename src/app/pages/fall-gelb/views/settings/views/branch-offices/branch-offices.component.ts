import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { BranchOfficesService } from './branch-offices.service';
import { BranchOffices } from '@shared/models/branch-offices';
import { FormBranchOfficeComponent } from '../components/form-branch-office/form-branch-office.component';

@Component({
  selector: 'app-branch-offices',
  templateUrl: './branch-offices.component.html',
  styleUrls: ['./branch-offices.component.scss']
})
export class BranchOfficesComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    "ID",
    "Nombre",
    "Dirección",
  ];
  tableColumnsTags: string[] = [
    "id",
    "name",
    "address",
  ];
  tableData: any[] = [];
  itemsSelected: any[] = [];


  constructor(private dialogService: DialogService,
              private toastService: ToastService,
              private branchOfficesService: BranchOfficesService) { }

  ngOnInit(): void {
    this.getBranchOffices();
  }

  getBranchOffices() {

    this.tableData = [];

    this.branchOfficesService.getBranchOffices()
      .subscribe((resp) => {
        const tableData: BranchOffices[] = [];

        resp.forEach((branch) => {
          const branchToInput: BranchOffices = {
            id: branch.id,
            name: branch.name,
            address: branch.address,
            created_at: branch.created_at,
            updated_at: branch.updated_at
          }

          tableData.push(branchToInput)
        })

          this.tableData = tableData;
        
      }, (error) => {

      })
  }

  processBranchOffice(processType: string) {
    this.dialogService
        .openDialog(FormBranchOfficeComponent, 
                    processType === 'Add' ? 'Crear Sucursal' : 'Editar Sucursal', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((custom) => {
          if(custom) {
            this.getBranchOffices();
          }
        });
  }

  deleteWarehouse() {
    this.dialogService
    .openConfirmationDialog(
            'Eliminar Sucursal',
            `¿Desea eliminar sucursal '${this.itemsSelected[0].name}'?`)
    .afterClosed()
    .subscribe((response)=>{
      if (response) {
        this.branchOfficesService.deleteBranchOffice(this.itemsSelected[0].id)
        .subscribe((data) => {
          this.toastService.showToaster('Sucursal eliminada correctamente!')
          this.getBranchOffices();
        },
          (error) => this.toastService.showToaster(error.error.message, true));
      }
    })
  }

}