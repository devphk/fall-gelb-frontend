import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RolesService } from '../roles/roles.service';
import { Role, RoleResponse } from '@shared/models';
import { UserRolesService } from './user-roles.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss'],
})
export class UserRolesComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private roleService: RolesService,
    private userRoleService: UserRolesService
  ) {}
  userRolForm: FormGroup = this.fb.group({});
  rolesList: Role[] = [];

  ngOnInit(): void {
    this.getRoles();
  }

  submitForm(): void {
    const form = this.userRolForm.getRawValue();
    const userRoles = {
      role_id: Object.keys(form)
        .filter((key) => form[key])
        .map((key) => +key),
    };

    console.log(userRoles);
    // this.userRoleService.addUserRoles(1, userRoles);
  }

  getRoles() {
    this.rolesList = [];
    this.roleService.getRoles().subscribe((roles) => {
      this.createForm(roles);
    });
  }

  setRolesUser(rol: any) {
    const tableRow: Role = {
      id: rol.id,
      name: rol.name,
    };
    this.userRoleService.getUserRole(1).subscribe((response) => {});
  }

  private createForm(roles: Role[]): void {
    let controls: { [key: number]: boolean[] } = {};

    this.rolesList = roles;

    roles.forEach((role) => {
      controls[role.id] = [false];
    });

    this.userRolForm = this.fb.group(controls);
  }
}
