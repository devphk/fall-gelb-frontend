import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { FormRoleComponent } from '../components';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {

  tableColumnsToDisplay: string[] = [
    'Id', 
    'Rol'
  ];
  
  tableColumnsTags: string[] = [
    'id', 
    'name'
  ];

  tableData: any[] = [];
  rolesList: any[] = [];

  constructor(private dialogService: DialogService,
              private roleService: RolesService,
              private toastService: ToastService) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.roleService
        .getRoles()
        .subscribe((roles) => {

          roles.forEach((role) => {
            
            const roleToInsert =  {
              id: role.id,
              name: role.name
            }

            this.rolesList.push(roleToInsert);

          });

          this.tableData = this.rolesList.slice();

        })
  }

  newRol() {
    this.dialogService
        .openDialog(FormRoleComponent, 'Nuevo Rol', '800px', 'auto')
        .afterClosed()
        .subscribe((data) => {
          console.log('Data ', data);
        });
  }

  showToast() {
    this.toastService.showToaster("HEllo", false);
  }

}
