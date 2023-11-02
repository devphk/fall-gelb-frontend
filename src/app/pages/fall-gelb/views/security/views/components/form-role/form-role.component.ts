import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss'],
})
export class FormRoleComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<FormRoleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  roleForm = this._formBuilder.group({
    name: this._formBuilder.control('', [Validators.required])
  });

  permisionFormGroup = this._formBuilder.group({
    modules: [],
  });

  modulesOptions: string[] = ['Seguridad', 'Operaciones'];

  tableColumnsToDisplay: string[] = ['Formulario', 'Accion'];
  tableColumnsTags: string[] = ['moduleForm', 'action'];
  tableData: any[] = [
    {
      moduleForm: 'Usuario',
      action: 'crear',
    },
    {
      moduleForm: 'Usuario',
      action: 'editar',
    },
    {
      moduleForm: 'Usuario',
      action: 'ver',
    },
    {
      moduleForm: 'Usuario',
      action: 'eliminar',
    },
    {
      moduleForm: 'Roles',
      action: 'crear',
    },
    {
      moduleForm: 'Roles',
      action: 'editar',
    },
    {
      moduleForm: 'Roles',
      action: 'ver',
    },
    {
      moduleForm: 'Roles',
      action: 'eliminar',
    },
  ];

  ngOnInit(): void {}

  selectPermissions(stepper: MatStepper) {
    if (this.roleForm.valid) {
     stepper.next();
    } else {
      this.roleForm.markAllAsTouched();
    }
  }

  saveRole() {
    const roleToAdd = {
      roleName: this.roleForm.get('name')?.value,
    }
    this.dialogRef.close(roleToAdd);
  }

}
