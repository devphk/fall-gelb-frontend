import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormUserComponent } from '../components';
import { UserService } from './user.service';
import { User, UserDataTable } from '@shared/models';

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
    'Estatus'
  ];
  tableColumnsTags: string[] = [
    'id',
    'name',
    'username',
    'email',
    'status'
  ];
  tableData: any[] = [];
  
  constructor(private dialogService: DialogService,
    private userService: UserService) {}
    
    
  ngOnInit(): void {

    this.userService
    .getUsers()
    .subscribe( (resp) => {
      console.log(resp);


      const tableData: UserDataTable[] = [];
      
      resp.forEach((user) => {



        const userToInput: UserDataTable = {
          id: user.id,
          name: user.name,
          email: user.email,
          status: user.status ? 'Activo' : 'Inactivo',
          username: user.username
        };

        tableData.push(userToInput);

      });

      this.tableData = tableData;

    })
  }

  newUser() {
    this.dialogService
      .openDialog(FormUserComponent, 'Registrar Usuario', '800px', '300px')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data ', data);
      });
  }

  editUser() {
    
    this.dialogService
      .openDialog(FormUserComponent, 'Editar Usuario', '800px', '300px')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data: ', data);
      })
  }

  deleteUser() {
    this.dialogService
      .openDialog(FormUserComponent, 'Editar Usuario', '800px', '300px')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data: ', data);
      })
  }


  
  
}
