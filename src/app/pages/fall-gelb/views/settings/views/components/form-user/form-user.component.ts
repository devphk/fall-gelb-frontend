import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { matchpassword } from './match-password.validator';
import { UserService } from '../../user/user.service';
import { User } from '@shared/models';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {

  isEditMode: boolean = false;

  userForm: FormGroup = new FormGroup({})

  constructor(private formBuild: FormBuilder,
              private dialogRef:MatDialogRef<FormUserComponent>,
              private userService:UserService,
              private toastService:ToastService,
              @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    this.initializeForm();    
  }

  
  initializeForm() {

    this.userForm = this.formBuild.group({
      name: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
      lastname: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].lastname : '', [Validators.required]),
      email: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].email : '', [Validators.required, Validators.email]),
      username: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].username : '', [Validators.required]),

    }, {
      validators: matchpassword
    });

    if (this.data.title === 'Crear Usuario') {
      this.userForm.addControl('password', this.formBuild.control('', [Validators.required]))
      this.userForm.addControl('confirmPassword', this.formBuild.control('', [Validators.required]))
    }else {
      this.userForm.addControl('password', this.formBuild.control(''))
      this.userForm.addControl('confirmPassword', this.formBuild.control(''))
    }
  }

  saveUser() {
    if (this.userForm.valid) {

      if (this.data.title === 'Crear Usuario'){
        
        const user = {
          name: this.userForm.get('name')?.value, 
          lastname: this.userForm.get('lastname')?.value, 
          email: this.userForm.get('email')?.value,
          username: this.userForm.get('username')?.value,
          password: this.userForm.get('password')?.value,
          // passwordVerify: this.userForm.get('passwordVerify')?.value,
          // role: this.userForm.get('role')?.value  
        }
  
        this.userService.createUser(user)
          .subscribe((data) => {
            this.toastService.showToaster("Usuario Creado Correctamente!")
            this.dialogRef.close(true);
          },
            (error) => this.toastService.showToaster(error.error.message, true))

      }else {

        const userEdit = {
          name: this.userForm.get('name')?.value, 
          lastname: this.userForm.get('lastname')?.value, 
          email: this.userForm.get('email')?.value,
          username: this.userForm.get('username')?.value,
          password: this.userForm.value.password || null,
        }
  
        console.log(userEdit)
  
          this.userService.editUser(userEdit, this.data.dialogData[0].id)
          .subscribe((data) =>{
            this.toastService.showToaster("Usuario Editado Correctamente!")
            this.dialogRef.close(true);
          },
            (error) => this.toastService.showToaster(error.error.message, true))
                     
      }

    }else {
      this.userForm.markAllAsTouched();
      
    } 
  }

}
