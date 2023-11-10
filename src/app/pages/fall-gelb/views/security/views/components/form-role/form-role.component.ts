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
  modulesPermissionForm!: FormGroup;
  showTable: boolean = false;
  permissionIds: number[] = [];
  isEdit: boolean = false;
  previousModuleId: number = 0;
  roleId: number | undefined = 0;
  modulesSelected: any[] = [];
  isFirstModuleSelected: boolean = true;

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
    this.isEdit = (this.title.includes('Editar')) ? true : false;

    if (this.data.dialogData) {
      this.roleId = this.data.dialogData.id;
    }

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

  moduleChanged(moduleId: number) {

    console.log("moduleId ", moduleId)

    if (this.isFirstModuleSelected) {
      this.isFirstModuleSelected = false;
    }

    this.showTable = false;

    // If module is undefined, i set the module

    if (this.modulesPermissionForm
        && !this.isFirstModuleSelected) {
      
      let moduleSelectedIndex = this.modulesSelected.findIndex((module) => {
        return module.id === this.previousModuleId
      });

      console.log("moduleSelectedIndex ", moduleSelectedIndex)

      // Replace the form in the permission list

      if (moduleSelectedIndex !== -1) {

        this.modulesSelected[moduleSelectedIndex].formGroup = this.modulesPermissionForm;

      } else {

        const formSelected = {
          id: (moduleSelectedIndex !== -1) ? this.modulesSelected[moduleSelectedIndex].id : this.previousModuleId,
          formGroup: this.modulesPermissionForm
        }
        
        this.modulesSelected.push(formSelected);

      }
    }

    this.modulesPermissionForm = this.fb.group({
      modulesPermission: this.fb.array([])
    });

    this.getTableData(moduleId, this.isEdit);
    this.previousModuleId = moduleId;

    // if (this.modulePreviousId !== 0) {
    //   this.setModulePermission(this.modulePreviousId);
    // }

    // this.permisionFormGroup.get('modulePermission')?.value;

    // let roleId = this.isEdit ? this.data.dialogData.id : false;
    // this.getTableData(moduleId, roleId);
    // this.modulePreviousId = moduleId
  }

  setModulePermission(moduleId: number) {
    // let permissionIds: number[] = [];

    // for (let formArrayIndex = 0; formArrayIndex < this.modulesPermissionControls.length; formArrayIndex++) {
    //   const formPermissions = this.modulesPermissionControls?.at(formArrayIndex)?.get('permission')?.value;

    //   if (formPermissions
    //       && formPermissions.length > 0) {
    //     permissionIds = [...permissionIds, ...formPermissions];
    //   }
    // }

    // let moduleIndexInBackup = this.modulesPermissionsBackup
    //                               .findIndex((module) => {
    //   return module.id === moduleId
    // });

    // const moduleBackup = {
    //   moduleId,
    //   permissionIds,
    //   moduleResource: this.modulePreviousResource
    // }

    // if (moduleIndexInBackup === -1) {
    //   this.modulesPermissionsBackup.push(moduleBackup)
    // } else {
    //   this.modulesPermissionsBackup[moduleIndexInBackup] = moduleBackup
    // }

    // console.log("this.modulesPermissionsBackup ", this.modulesPermissionsBackup);

  }

  setFormData(resources: Resource[],
              isEdit: boolean) {

    resources.forEach((resource, index) => {
  
      // Create the formgroup to add
      // In FormArray

      const permissionGroup = this.fb.group({
        form: resource.name,
        permission: this.fb.control([0])
      });

      // If is edit i assign the permissions
      // To role in the module

      if (this.isEdit) {

        const actions = resource.actions;
        const actionsList: any[] = [];
  
        // Set the permissions of the action array
  
        actions.forEach((action) => {
          actionsList.push(action.id);
        });
  
        permissionGroup.get('permission')?.setValue(actionsList);
        
      }
      
      this.modulesPermissionControls.push(permissionGroup);
      this.setDataRow(resource, index);
      this.showTable = true;
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

      // console.log("this.modulesPermissionsBackup ", this.modulesPermissionsBackup);

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
               isEdit: boolean) {

    this.modulesPermissionForm = this.fb.group({
      modulesPermission: this.fb.array([])
    });

    this.roleService
        .getModuleActions(moduleId, 
                          this.roleId)
        .subscribe((response) => {

          console.log("response ", response)
          this.tableData = response.resources;
          this.setFormData(response.resources, this.isEdit);

        });
    // this.showTable = false;

    // let getModuleActions;
    // let modulePermissionsModified = this.modulesPermissionsBackup
    //                                     .findIndex((module) => {
    //   return module.moduleId === moduleId
    // })

    // console.log("modulePermissionsModified ", modulePermissionsModified)
    // if (roleId) {
    //   let params = new HttpParams();
    //   params = params.set('role_id', roleId);
    //   getModuleActions = this.roleService.getModuleActions(moduleId, params);
    // } else {
    //   getModuleActions = this.roleService.getModuleActions(moduleId);
    // }

    // if (modulePermissionsModified === -1) {


    //   if (this.title.includes('Editar')) {
        
    //     getModuleActions.subscribe((response) => {
    
    //       this.tableData = [];
    
    //       console.log("response ", response)
    
    //       this.modulePreviousResource = response.resources;
    //       this.setFormData(this.modulePreviousResource, true);
  
    //       setTimeout(() => {
    //         this.showTable = true;
    //       }, 300);
  
  
    //     });
    //   }
  
    // } else {

    //   console.log("getting roles")

    //   getModuleActions.subscribe((response) => {

    //     this.tableData = [];
    
    //     console.log("response ", response)
  
    //     this.modulePreviousResource = response.resources;
    //     this.setFormData(this.modulePreviousResource, false);

    //     setTimeout(() => {
    //       this.showTable = true;
    //     }, 300);

    //   })

    // }
  }

  show() {
    console.log("this.modulesSelected ", this.modulesSelected)
    console.log("this.modulesPermissionForm ", this.modulesPermissionForm)
    console.log("this.tableData ", this.tableData)
  }
}
