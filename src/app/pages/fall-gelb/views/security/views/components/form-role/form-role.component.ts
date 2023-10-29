import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-role',
  templateUrl: './form-role.component.html',
  styleUrls: ['./form-role.component.scss'],
})
export class FormRoleComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  roleFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
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
}
