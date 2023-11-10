import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { RolesService } from '../../roles/roles.service';
import { ToastService } from '@core/services';
import { HttpParams } from '@angular/common/http';
import { Resource } from '@shared/models';

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

  tableData: any[] = [];
  itemsSelected: any[] = [];
  modulesPermissionForm = this.fb.group({
    modulesPermission: this.fb.array([])
  });
  showTable: boolean = false;
  permissionIds: number[] = [];
  modulesPermissionsBackup: any[] = [];
  modulePreviousId: number = 0;
  modulePreviousResource: Resource[] = [];

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

    if (this.modulePreviousId !== 0) {
      this.setModulePermission(this.modulePreviousId);
    }

    this.permisionFormGroup.get('modulePermission')?.value;

    let roleId = this.data.dialogData ? this.data.dialogData.id : false;
    console.log("roleId ", roleId)
    console.log("moduleId ", moduleId)
    this.getTableData(moduleId, roleId);
    this.modulePreviousId = moduleId
  }

  setModulePermission(moduleId: number) {
    let permissionIds: number[] = [];

    for (let formArrayIndex = 0; formArrayIndex < this.modulesPermissionControls.length; formArrayIndex++) {
      const formPermissions = this.modulesPermissionControls?.at(formArrayIndex)?.get('permission')?.value;

      if (formPermissions
          && formPermissions.length > 0) {
        permissionIds = [...permissionIds, ...formPermissions];
      }
    }

    let moduleIndexInBackup = this.modulesPermissionsBackup
                                  .findIndex((module) => {
      return module.id === moduleId
    });

    const moduleBackup = {
      moduleId,
      permissionIds,
      moduleResource: this.modulePreviousResource
    }

    if (moduleIndexInBackup === -1) {
      this.modulesPermissionsBackup.push(moduleBackup)
    } else {
      this.modulesPermissionsBackup[moduleIndexInBackup] = moduleBackup
    }

    console.log("this.modulesPermissionsBackup ", this.modulesPermissionsBackup);

  }

  setFormData(resources: Resource[]) {

    resources.forEach((resource, index) => {
  
      // Create the formgroup to add
      // In FormArray

      const permissionGroup = this.fb.group({
        form: this.fb.control(resource.name),
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

      this.setDataRow(resource, index);
    });

  }

  setDataRow(resource: Resource, 
             index: number) {
    const tableRow = {
      form: resource.name,
      options: resource.actions,
      rowIndex: index,
      optionsSelected: [],
    };

    this.tableData.push(tableRow);
  }

  createRole() {

    if (this.roleFormGroup.valid 
        && this.permisionFormGroup.valid) {
      
      let moduleId: any = this.permisionFormGroup.get('modulePermission')?.value;
      this.setModulePermission(moduleId);

      console.log("this.modulesPermissionsBackup ", this.modulesPermissionsBackup);

      return

      if (this.title.includes('Editar')) {
        this.roleService
          .editRole(
            this.roleFormGroup.get('name')?.value,
            this.data.dialogData.id
          )
          .subscribe(
            (createRoleResponse) => {
              const modulePermission = {
                permission_id: this.permissionIds,
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
                permission_id: this.permissionIds,
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

  getTableData(moduleId: number, 
               roleId?: number) {

    this.modulesPermissionForm = this.fb.group({
      modulesPermission: this.fb.array([])
    });
    this.showTable = false;

    let getModuleActions;
    let modulePermissionsModified = this.modulesPermissionsBackup
                                        .findIndex((module) => {
      return module.moduleId === moduleId
    })

    console.log("modulePermissionsModified ", modulePermissionsModified)

    if (modulePermissionsModified === -1) {

      if (roleId) {
        let params = new HttpParams();
        params = params.set('role_id', roleId);
        getModuleActions = this.roleService.getModuleActions(moduleId, params);
      } else {
        getModuleActions = this.roleService.getModuleActions(moduleId);
      }
  
      getModuleActions.subscribe((response) => {
  
        this.tableData = [];
  
        console.log("response ", response)
  
        this.modulePreviousResource = response.resources;
        this.setFormData(this.modulePreviousResource);

        setTimeout(() => {
          this.showTable = true;
        }, 300);


      });
      
    } else {

      this.setFormData(this.modulesPermissionsBackup[modulePermissionsModified]
                           .moduleResource);

      setTimeout(() => {
        this.showTable = true;
      }, 300);

    }
  }

  show() {
    console.log("this.modulesPermissionsBackup ", this.modulesPermissionsBackup)
    console.log("this.modulesPermissionForm ", this.modulesPermissionForm)
  }
}
