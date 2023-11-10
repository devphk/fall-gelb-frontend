import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RolesService } from '../roles/roles.service';
import { Role, RoleResponse } from '@shared/models';
import { UserRolesService } from './user-roles.service';
import { control } from 'leaflet';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss'],
})
export class UserRolesComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private roleService: RolesService,
    private userRoleService: UserRolesService,
    private dialogRef: MatDialogRef<UserRolesComponent>,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}
  userRolForm: FormGroup = this.fb.group({});
  rolesList: Role[] = [];
  userRolActive: Role[] = [];
  isEditMode: boolean = false;
  userId = this.data.dialogData[0].id;

  ngOnInit(): void {
    this.getRoles();
    console.log(this.userId);
  }

  submitForm(): void {
    const form = this.userRolForm.getRawValue();
    const userRoles = {
      role_id: Object.keys(form)
        .filter((key) => form[key])
        .map((key) => +key),
    };

    this.userRoleService.addUserRoles(this.userId, userRoles).subscribe(
      (data) => {
        this.toastService.showToaster('Roles asignados Correctamente!');
        this.dialogRef.close(true);
      },
      (error) => this.toastService.showToaster(error.error.message, true)
    );
  }

  getRoles() {
    this.rolesList = [];
    let idRolesActive: number[] = [];

    this.userRoleService.getUserRole(this.userId).subscribe((response) => {
      if (response) {
        response.map((item) => {
          idRolesActive.push(item.id);
        });
      }
    });

    this.roleService.getRoles().subscribe((roles) => {
      this.createForm(roles, idRolesActive);
    });
  }

  private createForm(roles: Role[], idRolesActive: number[]): void {
    let controls: { [key: number]: boolean[] } = {};
    this.rolesList = [];
    this.rolesList = roles;

    roles.map((role) => {
      if (idRolesActive.includes(role.id)) {
        controls[role.id] = [true];
      } else {
        controls[role.id] = [false];
      }
    });

    this.userRolForm = this.fb.group(controls);
  }
}
