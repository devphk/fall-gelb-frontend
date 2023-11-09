import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RolesService } from '../roles/roles.service';
import { Role, RoleResponse } from '@shared/models';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss'],
})
export class UserRolesComponent implements OnInit {
  constructor(private fb: FormBuilder, private roleService: RolesService) {}
  userRolForm: FormGroup = this.fb.group({});
  rolesList: Role[] = [];

  ngOnInit(): void {}

  getRoles() {
    this.rolesList = [];
    this.roleService.getRoles().subscribe((roles) => {
      roles.forEach((role) => {
        const roleToInsert = {
          id: role.id,
          name: role.name,
        };

        this.rolesList.push(roleToInsert);
      });
    });
  }
}
