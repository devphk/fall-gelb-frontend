import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { RolesService } from '../../roles/roles.service';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss'],
})
export class FormRoleComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder,
              private roleService: RolesService,
              private dialogRef: MatDialogRef<FormRoleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private toastService: ToastService) {}

  roleFormGroup = this._formBuilder.group({
    name: this._formBuilder.control('', Validators.required)
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

  ngOnInit(): void {
    this.roleService.getModules().subscribe((response: any) => {
      this.modulesOptions = response;
    });

    console.log("data ", this.data)

  }

  selectPermissions(stepper: MatStepper) {
    if (this.roleFormGroup.valid) {
      stepper.next();
    } else {
      this.roleFormGroup.markAllAsTouched();
    }
  }

  moduleSelected(moduleId: number) {
    this.getTableData(moduleId);
  }

  createRole() {

    if (this.roleFormGroup.valid
        && this.permisionFormGroup.valid) {

      const permissionIds: number[] = [];

      this.itemsSelected.forEach((item) => {

        item.optionsSelected.forEach((option: any) => {
          permissionIds.push(option.id)
        });

      });

      const moduleId = this.permisionFormGroup?.get('modulePermission')?.value;
        
      this.roleService
          .createRole(this.roleFormGroup.get('name')?.value)
          .subscribe((createRoleResponse) => {

        const modulePermission = {
          permission_id: permissionIds,
          module_id: moduleId
        }
  
        this.roleService
          .addRolePermissions(modulePermission, createRoleResponse.id)
          .subscribe((response) => {
            this.toastService.showToaster("Rol creadoo exitosamente");
            this.dialogRef.close(response);
          },
          (error) => {
            this.toastService.showToaster(error.error.message, true);
          });
  
      }, (error) => {
        this.toastService.showToaster(error.error.message, true);
      });
      
    }
    
  }

  getTableData(moduleId: number) {

    this.roleService
        .getModuleActions(moduleId)
        .subscribe((response) => {
          
            this.tableData = [];
            
            response.resources.forEach((modulePermissions, index) => {

              const tableRow = {
                form: modulePermissions.name,
                options: modulePermissions.actions,
                rowIndex: index,
                optionsSelected: []
              };

              this.tableData.push(tableRow);

            });

      });
  }
}
