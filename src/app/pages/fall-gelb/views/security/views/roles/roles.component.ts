import { Component, OnInit } from '@angular/core';
import { DialogService } from '@core/services';
import { FormRoleComponent } from '../components';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['ID', 'Rol'];
  tableColumnsTags: string[] = ['id', 'name'];
  tableData: any[] = [
    {
      id: 1,
      name: 'Admin',
    },
    {
      id: 1,
      name: 'Analista',
    },
    {
      id: 1,
      name: 'Cliente',
    },
  ];

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.tableData.push(this.tableData[0]);
  }

  newRol() {
    this.dialogService
      .openDialog(FormRoleComponent, 'Nuevo Rol', '800px', '460px')
      .afterClosed()
      .subscribe((data) => {
        console.log('Data ', data);
      });
  }
}
