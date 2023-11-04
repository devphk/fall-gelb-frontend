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
    private matDialog: MatDialogRef<FormRoleComponent>,
    private dialogRef: MatDialogRef<FormRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  roleFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
  });

  permisionFormGroup = this._formBuilder.group({
    modulePermission: '',
  });

  modulesOptions: any;
  dataSelect: any[] = [];
  tableColumnsToDisplay: string[] = ['Formulario', 'Accion', 'Estado'];
  tableColumnsTags: string[] = ['resource', 'action', 'status'];
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

    this.permisionFormGroup
      .get('modulePermission')
      ?.valueChanges.subscribe((moduleId) => {
        this.permisionsSelected = [];

        this.insertDataTable(Number(moduleId));
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

  savePermisions(): void {
    let moduleId = Number(
      this.permisionFormGroup.get('modulePermission')?.value
    );
    console.log(this.permisionsSave + 'antes del push');

    this.permisionsSave[moduleId] = {
      permission_id: this.permisionsSelected,
      module_id: moduleId,
    };

    console.log(this.permisionsSave);
  }

  onSubmit(dataRol: any): void {
    this.matDialog.close();
    this.roleService.postRol(dataRol).subscribe((respose) => {
      // if (this.permisionsSave) {
      //   this.roleService
      //     .postRolPermissions(this.permisionsSave, Number(respose.id))
      //     .subscribe((respose) => {
      //       console.log(respose);
      //     });
      // }
    });
  }
  //functions

  insertDataTable(moduleId: number) {
    this.roleService
      .getModuleActions(Number(moduleId))
      .subscribe((response) => {
        this.tableData = [];
        response.resources.map((resource: any) => {
          resource.actions.map((action: any) => {
            this.tableData.push({
              id: action.id,
              resource: resource.description,
              action: action.name,
              status:
                this.permisionsSave[moduleId]?.permission_id.findIndex(
                  (item: any) => item === action.id
                ) !== -1,
            });
          });
        });
      });
  }
}
