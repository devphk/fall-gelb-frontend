import { FormBankComponent } from './bank/form-bank/form-bank.component';
import { ModalService } from './../../../../core/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { FormUserComponent } from './user/form-user/form-user.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  showFormUser() {
    const dialogRef = this.modalService.openDialog(
      FormUserComponent,
      'Registro de usuario',
      '80%',
      '90%'
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo ha sido cerrado');
    });
  }

  showFormBanck() {
    const dialogRef = this.modalService.openDialog(
      FormBankComponent,
      'Registro de banco',
      '80%',
      '90%'
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El diálogo ha sido cerrado');
    });
  }
}
