import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '@core/services';
import { DepartmentService } from '../../department/department.service';
import { SelectOption } from '@shared/models';

@Component({
  selector: 'app-new-department',
  templateUrl: './new-department.component.html',
  styleUrls: ['./new-department.component.scss'],
})
export class NewDepartmentComponent implements OnInit {
  constructor(
    private formBuild: FormBuilder,
    private dialogRef: MatDialogRef<NewDepartmentComponent>,
    private departmentService: DepartmentService,
    private toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  isEditMode: boolean = false;
  departmentsOption: SelectOption[] = [];

  departmentFrom: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.departmentFrom = this.formBuild.group({
      name: this.formBuild.control(
        this.data.dialogData ? this.data.dialogData[0].name : '',
        [Validators.required]
      ),
    });

    this.departmentService.getDepartments().subscribe((departments) => {
      departments.map((department) => {
        this.departmentsOption.push({
          id: department.id,
          name: department.name,
        });
      });
    });
  }

  saveDepartment() {
    if (this.departmentFrom.valid) {
      if (this.data.title === 'Crear Departamento') {
        const department = {
          name: this.departmentFrom.get('name')?.value,
        };

        this.departmentService.createDepartment(department).subscribe(
          (data) => {
            this.toastService.showToaster('Departamento Creado Correctamente!');
            this.dialogRef.close(true);
          },
          (error) => this.toastService.showToaster(error.error.message, true)
        );
      } else {
        const departmentEdit = {
          name: this.departmentFrom.get('name')?.value,
        };

        this.departmentService
          .editDepartment(departmentEdit, this.data.dialogData[0].id)
          .subscribe(
            (data) => {
              this.toastService.showToaster(
                'Departamento Editado Correctamente!'
              );
              this.dialogRef.close(true);
            },
            (error) => this.toastService.showToaster(error.error.message, true)
          );
      }
    } else {
      this.departmentFrom.markAllAsTouched();
    }
  }
}
