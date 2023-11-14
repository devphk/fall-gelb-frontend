import { Component, 
         Inject, 
         OnInit } from '@angular/core';
import { FormArray, 
         FormBuilder, 
         FormGroup, 
         Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, 
         MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { RolesService } from '../../roles/roles.service';
import { ToastService } from '@core/services';
import { Resource } from '@shared/models';
import { MatSelectChange } from '@angular/material/select';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss'],
})
export class FormRoleComponent implements OnInit {
  title: string = '';
  roleFormGroup = this.fb.group({
    name: this.fb.control(
      this.data.dialogData ? this.data.dialogData.name : '',
      Validators.required
    ),
  });

  modulesOptions: any;
  dataSelect: any[] = [];
  itemsSelected: any[] = [];
  modulesPermissionForm!: FormGroup;
  showTable: boolean = false;
  isEdit: boolean = false;
  previousModuleId: number = 0;
  roleId: number | undefined = 0;
  modulesSelected: any[] = [];
  isFirstModuleSelected: boolean = true;
  showPermission: boolean = false;
  currentModuleSelectedId!: number;

  constructor(
    private roleService: RolesService,
    private dialogRef: MatDialogRef<FormRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastService: ToastService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {

    this.roleService
        .getModules()
        .subscribe((response: any) => {
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

  moduleChanged(moduleSelected: MatSelectChange) {

    let moduleId = moduleSelected.value;
    this.currentModuleSelectedId = moduleId;
    this.showTable = false;

    // If module is undefined, i set the module

    if (this.modulesPermissionForm
        && !this.isFirstModuleSelected) {

      console.log("Hay que actualizar el form")

      let moduleAlreadySelectedIndex = this.modulesSelected.findIndex((module) => {
        return module.id === moduleId
      });

      let modulePreviousSelectedIndex = this.modulesSelected.findIndex((module) => {
        return module.id === this.previousModuleId
      });

      // Replace the form in the permission list

      if (modulePreviousSelectedIndex !== -1) {

        this.modulesSelected[modulePreviousSelectedIndex].formGroup = this.modulesPermissionForm;

      } else {

        const formSelected = {
          id: (modulePreviousSelectedIndex !== -1) ? this.modulesSelected[modulePreviousSelectedIndex].id : this.previousModuleId,
          formGroup: this.modulesPermissionForm
        }
        
        this.modulesSelected.push(formSelected);

      }

      // Set the form values of module form selected

      if (moduleAlreadySelectedIndex !== -1) {

        const previousModuleForm = this.modulesSelected[moduleAlreadySelectedIndex].formGroup;
        this.modulesPermissionForm = previousModuleForm
      
      }

      this.modulesPermissionForm = this.fb.group({
        modulesPermission: this.fb.array([])
      });
    }

    if (this.isFirstModuleSelected) {
      this.isFirstModuleSelected = false;
      this.modulesPermissionForm = this.fb.group({
        modulesPermission: this.fb.array([])
      });
    }

    // Getting table data

    this.roleService
        .getModuleActions(moduleId, 
                          this.roleId)
        .subscribe((response) => {

          console.log("response ", response)
          this.setFormData(response.resources.slice(), 
                           this.isEdit,
                           moduleId);

        });

    this.previousModuleId = moduleId;
  }

  setFormData(resources: Resource[],
              isEdit: boolean,
              moduleId: number) {

    let moduleAlreadySelectedIndex = this.modulesSelected.findIndex((module) => {
      return module.id === moduleId
    });

    resources.forEach((resource, index) => {
      // Create the formgroup to add
      // In FormArray

      const permissionGroup = this.fb.group({
        form: resource.name,
        permission: this.fb.control([0]),
        actions: this.fb.control(resource.actions)
      });

      if (moduleAlreadySelectedIndex !== -1) {
        console.log("setting permissions")
        permissionGroup.get('permission')?.setValue(this.modulesSelected[moduleAlreadySelectedIndex]
                                                        .formGroup
                                                        .get('modulesPermission')
                                                        .value[index]
                                                        .permission)
      }

      // If is edit i assign the permissions
      // To role in the module

      if (this.isEdit) {

        const actions = resource.actions;
        const actionsList: any[] = [0];
  
        // Set the permissions of the action array
  
        actions.forEach((action) => {

          if (action.active
              && moduleAlreadySelectedIndex === -1) {
            actionsList.push(action.id);
          }

        });
  
        permissionGroup.get('permission')?.setValue(actionsList);
        
      }
      
      this.modulesPermissionControls.push(permissionGroup);
      this.showTable = true;
    });
  }

  createRole() {

    if (this.roleFormGroup.valid) {

      const rolesModulesPermissions = this.getModulePermissions();

      if (this.title.includes('Editar')) {

        this.roleService
            .editRole(
              this.roleFormGroup.get('name')?.value,
              this.data.dialogData.id
            )
            .subscribe(
              (createRoleResponse) => {

                this.addPermissionsToRole(rolesModulesPermissions,
                                          createRoleResponse.id);

                // const modulePermission = {
                //   permission_id: this.permissionIds,
                //   module_id: moduleId,
                // };

                // this.roleService
                //   .addRolePermissions(modulePermission, createRoleResponse.id)
                //   .subscribe(
                //     (response) => {
                //       this.toastService.showToaster('Rol editado exitosamente');
                //       this.dialogRef.close(response);
                //     },
                //     (error) => {
                //       this.toastService.showToaster(error.error.message, true);
                //     }
                //   );
              },
              (error) => {
                this.toastService.showToaster(error.error.message, true);
              }
            );

      } else {

        this.roleService
            .createRole(this.roleFormGroup.get('name')?.value)
            .subscribe((createRoleResponse) => {

              this.addPermissionsToRole(rolesModulesPermissions,
                                        createRoleResponse.id);
                // const modulePermission = {
                //   permission_id: this.permissionIds,
                //   module_id: moduleId,
                // };

                // this.roleService
                //   .addRolePermissions(modulePermission, createRoleResponse.id)
                //   .subscribe(
                //     (response) => {
                //       this.toastService.showToaster('Rol creado exitosamente');
                //       this.dialogRef.close(response);
                //     },
                //     (error) => {
                //       this.toastService.showToaster(error.error.message, true);
                //     }
                //   );
              },
              (error) => {
                this.toastService.showToaster(error.error.message, true);
              }
            );
      }
    }
  }

  addPermissionsToRole(rolesModulesPermissions: any[],
                       roleId: number) {

    console.log("roles para agregar a rol ", rolesModulesPermissions)

    const requestsArray: any[] = [];
    rolesModulesPermissions.forEach((role) => {
      requestsArray.push(this.roleService
                             .addRolePermissions(role.permissions, 
                                                 roleId, 
                                                 role.moduleId))
    });

    forkJoin(requestsArray).subscribe((response) => {
        this.toastService.showToaster('Permisos agregados exitosamente');
        this.dialogRef.close(response);
      },
      (error) => {
        this.toastService.showToaster('Error agregando permisos a rol', true);
      }
    );

  }

  getTableData(moduleId: number, 
               isEdit: boolean) {

    this.roleService
        .getModuleActions(moduleId, 
                          this.roleId)
        .subscribe((response) => {

          console.log("response ", response)
          // this.setFormData(response.resources.slice(), this.isEdit);

        });
  }

  setFormValues(formArray1: FormArray,
                formArray2: FormArray) {

                  console.log("form1 ", formArray1)
                  console.log("form2 ", formArray2)
  }

  getModulePermissions(): any[] {
    
    let modulesPermissions: any[] = [];

    const anotherModulesEdited = this.modulesSelected.filter((module) => {
      return module.id !== this.currentModuleSelectedId
    });

    if (anotherModulesEdited.length !== 0) {

      // Filtered the array of modules without the actual
      // Module that the user is editing

      anotherModulesEdited.forEach((module) => {

        const moduleFormArray = module.formGroup.get('modulesPermission') as FormArray;

        moduleFormArray.controls
                       .forEach((form: any) => {

          if (form.get('permission').value.length > 0
              && form.get('permission').value[0] !== 0) {

            const modulePermissions = {
              moduleId: module.id,
              permissions: form.get('permission').value
            }

            modulesPermissions.push(modulePermissions);
          }

        });

      });

      // Adding values of the current form edited

      this.modulesPermissionControls
          .controls
          .forEach((form: any) => {
        
        if (form.get('permission').value.length > 0
            && form.get('permission').value[0] !== 0) {

          const modulePermissions = {
            moduleId: this.currentModuleSelectedId,
            permissions: form.get('permission').value
          }

          modulesPermissions.push(modulePermissions);
        }

      });
      
    } else if (this.modulesPermissionForm) {
      
      this.modulesPermissionControls
          .controls
          .forEach((form: any) => {
        
        if (form.get('permission').value.length > 0
            && form.get('permission').value[0] !== 0) {

          const modulePermissions = {
            moduleId: this.currentModuleSelectedId,
            permissions: form.get('permission').value
          }

          modulesPermissions.push(modulePermissions);
        }

      });

    }

    console.log("modulesPermissions ", modulesPermissions)
    return modulesPermissions;

  }
}
