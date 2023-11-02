import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormRoleComponent } from '../components';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    'Id', 
    'Rol', 
    '¿Activo?'
  ];
  
  tableColumnsTags: string[] = [
    'id', 
    'role', 
    'active'
  ];

  tableData: any[] = [
    {
      id: 1,
      role: 'Admin',
      active: true
    },
    {
      id: 1,
      role: 'Analista',
      active: true
    },
    {
      id: 1,
      role: 'Cliente',
      active: true
    },
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.tableData.push(this.tableData[0]);
  }

  newRol() {
    this.dialogService
      .openDialog(FormRoleComponent, 'Nuevo Rol', '800px', 'auto')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data ', data);
      });
  }
}
