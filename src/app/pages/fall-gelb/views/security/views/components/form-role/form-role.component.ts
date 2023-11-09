import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { RolesService } from '../../roles/roles.service';
import { ToastService } from '@core/services';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss'],
})
export class FormRoleComponent implements OnInit {

  title: string = '';
  roleFormGroup = this._formBuilder.group({
    name: this._formBuilder.control(
      this.data.dialogData ? this.data.dialogData.name : '',
      Validators.required
    ),
  });

  permisionFormGroup = this._formBuilder.group({
    modulePermission: this._formBuilder.control('', [Validators.required]),
  });

  modulesOptions: any;
  dataSelect: any[] = [];

  tableColumnsToDisplay: string[] = [
    'Formulario',
    'Acciones',
    // 'Estado'
  ];

  tableColumnsTags: string[] = [
    'form',
    'options',
    // 'status'
  ];

  tableData: any[] = [];
  itemsSelected: any[] = [];
  modulesPermissionForm = this.fb.group({
    modulesPermission: this.fb.array([])
  });
  showForm: boolean = false

  constructor(private _formBuilder: FormBuilder,
              private roleService: RolesService,
              private dialogRef: MatDialogRef<FormRoleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private toastService: ToastService,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.roleService.getModules().subscribe((response: any) => {
      this.modulesOptions = response;
    });

    this.title = this.data.title;
  }

  get modulesPermissionControls() {
    return this.modulesPermissionForm.get('modulesPermission') as FormArray;
  }

  selectPermissions(stepper: MatStepper) {
    if (this.roleFormGroup.valid) {
      stepper.next();
    } else {
      this.roleFormGroup.markAllAsTouched();
    }
  }

  moduleSelected(moduleId: number) {
    let roleId = this.data.dialogData ? this.data.dialogData.id : false;
    this.getTableData(moduleId, roleId);
  }

  createRole() {
    if (this.roleFormGroup.valid && this.permisionFormGroup.valid) {
      const permissionIds: number[] = [];

      this.itemsSelected.forEach((item) => {
        item.optionsSelected.forEach((option: any) => {
          permissionIds.push(option.id);
        });
      });

      const moduleId = this.permisionFormGroup?.get('modulePermission')?.value;

      if (this.title.includes('Editar')) {
        this.roleService
          .editRole(
            this.roleFormGroup.get('name')?.value,
            this.data.dialogData.id
          )
          .subscribe(
            (createRoleResponse) => {
              const modulePermission = {
                permission_id: permissionIds,
                module_id: moduleId,
              };

              this.roleService
                .addRolePermissions(modulePermission, createRoleResponse.id)
                .subscribe(
                  (response) => {
                    this.toastService.showToaster('Rol editado exitosamente');
                    this.dialogRef.close(response);
                  },
                  (error) => {
                    this.toastService.showToaster(error.error.message, true);
                  }
                );
            },
            (error) => {
              this.toastService.showToaster(error.error.message, true);
            }
          );
      } else {
        this.roleService
          .createRole(this.roleFormGroup.get('name')?.value)
          .subscribe(
            (createRoleResponse) => {
              const modulePermission = {
                permission_id: permissionIds,
                module_id: moduleId,
              };

              this.roleService
                .addRolePermissions(modulePermission, createRoleResponse.id)
                .subscribe(
                  (response) => {
                    this.toastService.showToaster('Rol creadoo exitosamente');
                    this.dialogRef.close(response);
                  },
                  (error) => {
                    this.toastService.showToaster(error.error.message, true);
                  }
                );
            },
            (error) => {
              this.toastService.showToaster(error.error.message, true);
            }
          );
      }
    }
  }

  getTableData(moduleId: number, roleId?: number) {
    let getModuleActions;

    if (roleId) {
      let params = new HttpParams();
      params = params.set('role_id', roleId);
      getModuleActions = this.roleService.getModuleActions(moduleId, params);
    } else {
      getModuleActions = this.roleService.getModuleActions(moduleId);
    }

    getModuleActions.subscribe((response) => {

      console.log("response ", response)

      if (roleId) {

        response.resources.forEach((resource) => {

          // Create the formgroup to add
          // In FormArray

          const permissionGroup = this.fb.group({
            permission: this.fb.control([0])
          })

          const actions = resource.actions;
          const actionsList: number[] = [];

          // Set the permissions of the action array

          actions.forEach((action) => {
            actionsList.push(action.id);
          });

          permissionGroup.get('permission')?.setValue(actionsList);

          this.modulesPermissionControls.push(permissionGroup);

        });
      }
      this.showForm = true;

      console.log("form", this.modulesPermissionForm)

      // this.tableData = [];

      // response.resources.forEach((modulePermissions, index) => {
      //   const tableRow = {
      //     form: modulePermissions.name,
      //     options: modulePermissions.actions,
      //     rowIndex: index,
      //     optionsSelected: [],
      //   };

      //   this.tableData.push(tableRow);
      // });
    });
  }
}
