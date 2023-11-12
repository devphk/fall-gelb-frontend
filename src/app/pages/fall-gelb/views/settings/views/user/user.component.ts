import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { FormUserComponent } from '../components';
import { UserService } from './user.service';
import { User, UserDataTable } from '@shared/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SettingsModule } from '../../settings.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  tableColumnsToDisplay: string[] = [
    'ID',
    'Nombre',
    'Apellido',
    'Nombre de Usuario',
    'Correo',
    'Estatus',
  ];
  tableColumnsTags: string[] = ['id', 'name', 'lastname', 'username', 'email', 'status'];
  tableData: any[] = [];
  durationInSeconds = 2;
  itemsSelected: any[] = [];

  constructor(
    private dialogService: DialogService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private toastService:ToastService  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    this.userService
        .getUsers()
        .subscribe((response) => {

      const tableData: UserDataTable[] = [];

      response.forEach((user) => {
        const userToInput: UserDataTable = {
          id: user.id,
          name: user.name,
          email: user.email,
          status: user.status ? 'Activo' : 'Inactivo',
          username: user.username,
          lastname:user.lastname,
        };

        tableData.push(userToInput);
      });

      this.tableData = tableData;

    }, (error) => {
      
    });

  }

  processUser(processType: string) {
    this.dialogService
        .openDialog(FormUserComponent, 
                    processType === 'Add' ? 'Crear Usuario' : 'Editar Usuario', 
                    '800px', 
                    'auto',
                    processType === 'Add' ? null : this.itemsSelected)
        .afterClosed()
        .subscribe((user) => {
          if(user) {
            this.refreshUsers();
          }
        });
  }

  deleteUser() {

    this.dialogService
        .openConfirmationDialog(
                'Eliminar usuario',
                `¿Eliminar usuario '${this.itemsSelected[0].name}'?`)
        .afterClosed()
        .subscribe((response)=>{
          if (response) {
            this.userService.deleteUsers(this.itemsSelected[0].id)
            .subscribe((data) => {
              this.toastService.showToaster('Usuario eliminado correctamente!')
              this.refreshUsers();
            },
              (error) => this.toastService.showToaster(error.error.message, true));
          }})
  }

  refreshUsers() {
    this.tableData = [];

    this.userService.getUsers()
        .subscribe((users) => {
          users.forEach((user) => {

            const userToInput = {
              id: user.id,
              name: user.name,
              email: user.email,
              status: user.status ? 'Activo' : 'Inactivo',
              username: user.username,
              lastname:user.lastname,
            };

            this.tableData.push(userToInput);

          });
        })
  }

}
