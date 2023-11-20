import { Component, OnInit } from '@angular/core';
import { DialogService, ToastService } from '@core/services';
import { FormRoleComponent } from '../components';
import { RolesService } from './roles.service';
import { Role } from '@shared/models';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  tableColumnsToDisplay: string[] = ['Id', 'Rol'];

  tableColumnsTags: string[] = ['id', 'name'];

  tableData: any[] = [];
  rolesList: any[] = [];
  testForm: FormGroup = this.fb.group({
    modulesPermission: this.fb.array([]),
  });

  form = this.fb.group({
    lessons: this.fb.array([]),
  });
  constructor(
    private dialogService: DialogService,
    private roleService: RolesService,
    private toastService: ToastService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getRoles();
  }

  editRegister(role: Role) {
    console.log('edit event ', role);
    this.newRol(role);
  }
  deleteRegister(role: Role) {
    console.log('delete event ', role);
    this.deleteBank(role);
  }

  getRoles() {
    this.tableData = [];
    this.rolesList = [];
    this.roleService.getRoles().subscribe((roles) => {
      roles.forEach((role) => {
        const roleToInsert = {
          id: role.id,
          name: role.name,
        };

        this.rolesList.push(roleToInsert);
      });

      this.tableData = this.rolesList.slice();
    });
  }

  newRol(roleData: Role | null) {
    this.dialogService
      .openDialog(
        FormRoleComponent,
        roleData ? `Editar Rol: ${roleData.name}` : 'Nuevo Rol',
        '800px',
        'auto',
        roleData
      )
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.getRoles();
        }
      });
  }

  deleteBank(roleData: Role) {
    this.dialogService
      .openConfirmationDialog(
        `Eliminar Rol`,
        `¿Desea eliminar Rol '${roleData.name}'?`
      )
      .afterClosed()
      .subscribe((response) => {
        if (response) {
          this.roleService.deleteRole(roleData.id).subscribe(
            (data) => {
              this.toastService.showToaster('Rol eliminado correctamente!');
              this.getRoles();
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
        }
      });
  }
}
