import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormUserComponent } from '../components';

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
    'Rol',
  ];
  tableColumnsTags: string[] = [
    'id',
    'userName',
    'name',
    'email',
    'status',
    'userRol',
  ];
  tableData: any[] = [
    {
      id: 1,
      userName: 'ALBERT TUAREZ',
      name: 'albert2226',
      email: 'alberttuarez3@gmail.com',
      status: 'active',
      userRol: 'SuperAdmin',
    },
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
    this.tableData.push(this.tableData[0]);
  }

  newUser() {
    this.dialogService
      .openDialog(FormUserComponent, 'Registrar Usuario', '800px', '460px')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data ', data);
      });
  }
}
