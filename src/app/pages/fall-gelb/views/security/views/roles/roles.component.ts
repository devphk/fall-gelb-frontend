import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { FormRoleComponent } from '../components';
import { RolesService } from './roles.service';
import { Role } from '@shared/models';

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

  editRegister($event: any) {
    
    
  }

  getRoles() {
    
    this.tableData = [];
    this.rolesList = [];
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

  newRol(roleData: Role | null) {
    this.dialogService
        .openDialog(FormRoleComponent, 
                    roleData ? `Editar Rol: ${roleData.name}` 
                             : 'Nuevo Rol', 
                    '800px', 
                    'auto')
        .afterClosed()
        .subscribe((data) => {
          if (data) {
            this.getRoles();
          }
        });
  }

}
