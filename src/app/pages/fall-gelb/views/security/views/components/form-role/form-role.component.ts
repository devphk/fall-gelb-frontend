import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { RolesService } from '../../roles/roles.service';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss'],
})
export class FormRoleComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private roleService: RolesService,
    private dialogRef: MatDialogRef<FormRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

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

  permisionsSelected: any[] = [];
  permisionsSave: {
    [key: number]: {
      module_id: number;
      permission_id: number[];
    };
  } = {};

  ngOnInit(): void {
    this.roleService.getModules().subscribe((response: any) => {
      this.modulesOptions = response;
    });

    console.log(this.permisionsSave);
  }

  selectPermissions(stepper: MatStepper) {
    if (this.roleFormGroup.valid) {
      stepper.next();
    } else {
      this.roleFormGroup.markAllAsTouched();
    }
  }

  show() {
    console.log("permisionsSelected ", this.permisionsSelected)
  }

  moduleSelected(moduleId: number) {
    console.log("module ", moduleId)
    this.getTableData(moduleId);
  }

  onSubmit(dataRol: any): void {

    this.roleService
        .createRole(dataRol)
        .subscribe((respose) => {

      // if (this.permisionsSave) {
      //   this.roleService
      //     .postRolPermissions(this.permisionsSave, Number(respose.id))
      //     .subscribe((respose) => {
      //       console.log(respose);
      //     });
      // }

    });

  }

  createRole() {
    if (this.roleFormGroup.valid) {
      console.log("this.permisionsSave ", this.permisionsSave)
    }
  }

  getTableData(moduleId: number) {

    this.roleService
        .getModuleActions(moduleId)
        .subscribe((response) => {
          
            this.tableData = [];

            console.log("response ", response)

            response.resources.forEach((modulePermissions, index) => {

              const tableRow = {
                form: modulePermissions.name,
                options: modulePermissions.actions,
                rowIndex: index,
                optionsSelected: []
              };

              this.tableData.push(tableRow);

            });

            console.log("table data ", this.tableData)

            // response.resources.map((resource: any) => {
            //   resource.actions.map((action: any) => {

            //     console.log("action ", action)

            //     this.tableData.push({
            //       id: action.id,
            //       resource: resource.description,
            //       action: action.name,
            //       status:
            //         this.permisionsSave[moduleId]?.permission_id.findIndex(
            //           (item: any) => item === action.id
            //         ) !== -1,
            //     });

            //   });
            // });

      });
  }
}
