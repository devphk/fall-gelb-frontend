import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormUserComponent } from '../components';
import { UserService } from './user.service';
import { User, UserDataTable } from '@shared/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  tableColumnsToDisplay: string[] = [
    'ID',
    'Nombre',
    'Nombre de Usuario',
    'Correo',
    'Estatus',
  ];
  tableColumnsTags: string[] = ['id', 'name', 'username', 'email', 'status'];
  tableData: any[] = [];
  selectedID: number = 0;
  selectedData: any[] = []
  durationInSeconds = 2;

  constructor(
    private dialogService: DialogService,
    private userService: UserService,
    private snackBar: MatSnackBar  ) {}

  ngOnInit(): void {

    this.userService.getUsers().subscribe((resp) => {
      console.log(resp);

      const tableData: UserDataTable[] = [];

      resp.forEach((user) => {
        const userToInput: UserDataTable = {
          id: user.id,
          name: user.name,
          email: user.email,
          status: user.status ? 'Activo' : 'Inactivo',
          username: user.username,
        };

        tableData.push(userToInput);
      });

      this.tableData = tableData;
    });
  }

  openSnackBar(type: number) {
    if (type === 1) {
      this.snackBar.open('Eliminado Exitosamente!', 'Close', {duration: this.durationInSeconds * 1000,
        panelClass: ['success-snackbar'],
      });
    } else {
      this.snackBar.open('Ha ocurrido un Error!', 'Close', {duration: this.durationInSeconds * 1000,
        panelClass: ['error-snackbar'],
      });
    }
  }

  newUser() {
    this.dialogService
      .openDialog(FormUserComponent, 'Registrar Usuario', '800px', '300px')
        .afterClosed()
          .subscribe(() => this.ngOnInit());
  }

  editUser() {
    this.userService.getUser(this.selectedID)
      .subscribe((resp) => {
        this.selectedData = resp;
      
        this.dialogService
          .openDialog(FormUserComponent, 
                      'Editar Usuario', 
                      '800px', 
                      'auto',
                      // this.itemsSelected)
            .afterClosed()
              .subscribe(() => this.ngOnInit());
      
      })


  }

  deleteUser() {
    this.userService.deleteUsers(this.selectedID).subscribe(
      (data) => {
        console.log('EXITOSO!: ', data);
        this.openSnackBar(1);
        this.ngOnInit();
      },
      (error) => {
        console.error('ERROR!: ', error);
        this.openSnackBar(2);
      }
    );
  }
}
