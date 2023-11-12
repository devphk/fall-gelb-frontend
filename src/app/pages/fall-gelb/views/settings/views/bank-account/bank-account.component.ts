import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { FormBankAccountComponent } from '../components';
import { BankAccountDataTable } from '@shared/models/bank-account';
import { BankAcountService } from './bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.scss'],
})
export class BankAccountComponent implements OnInit {
  tableColumnsToDisplay: string[] = [
    'ID',
    'Cuenta Bancaria',
    'Número de Cuenta',
    'Moneda',
  ];
  tableColumnsTags: string[] = [
    'id',
    'bankName',
    'numberAccount',
    'currencyName',
  ];
  tableData: any[] = [];

  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private bankAccountService: BankAcountService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getbanks();
  }

  getbanks() {
    this.bankAccountService.getBankAcounts().subscribe(
      (response) => {
        const tableData: BankAccountDataTable[] = [];

        response.forEach((bankAccount: any) => {
          const bankToInput: BankAccountDataTable = {
            id: bankAccount.id,
            bankId: bankAccount.bank_id,
            bankName: bankAccount.bank.name,
            numberAccount: bankAccount.account_number,
            currencyId: bankAccount.currency_id,
            currencyName: bankAccount.currency.name,
          };

          tableData.push(bankToInput);
        });

        this.tableData = tableData;
      },
      (error) => {}
    );
  }

  processBankAccount(processType: string) {
    this.dialogService
      .openDialog(
        FormBankAccountComponent,
        processType === 'Add'
          ? 'Crear Cuenta Bancaria'
          : 'Editar Cuenta Bancaria',
        '800px',
        'auto',
        processType === 'Add' ? null : this.itemsSelected
      )
      .afterClosed()
      .subscribe((bankAccount) => {
        if (bankAccount) {
          this.refreshBankAccounts();
        }
      });
  }

  deleteBankAccount() {
    this.dialogService
      .openConfirmationDialog(
        `Desea eliminar Cuenta Bancaria '${this.itemsSelected[0].name}'`,
        'Este cambio no se puede revertir'
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.bankAccountService
            .deleteBankAcounts(this.itemsSelected[0].id)
            .subscribe(
              (data) => {
                this.toastService.showToaster(
                  'Cuenta Bancaria eliminado correctamente!'
                );
                this.refreshBankAccounts();
              },
              (error) =>
                this.toastService.showToaster(error.error.message, true)
            );
        }
      });
  }

  refreshBankAccounts() {
    this.tableData = [];

    this.bankAccountService.getBankAcounts().subscribe((bankAccounts) => {
      bankAccounts.forEach((bankAccount: any) => {
        const bankAccountToInput = {
          id: bankAccount.id,
          bankId: bankAccount.bank_id,
          bankName: bankAccount.bank.name,
          numberAccount: bankAccount.account_number,
          currencyId: bankAccount.currency_id,
          currencyName: bankAccount.currency.name,
        };

        this.tableData.push(bankAccountToInput);
      });
    });
  }
}
