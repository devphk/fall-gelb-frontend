import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { matchpassword } from './match-password.validator';
import { UserService } from '../../user/user.service';
import { User } from '@shared/models';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {

  userForm: FormGroup = this.formBuild.group({
    name: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    lastname: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].lastname : '', [Validators.required]),
    email: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].email : '', [Validators.required, Validators.email]),
    username: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].username : '', [Validators.required]),
    password: this.formBuild.control('', [Validators.required]),
    passwordVerify: this.formBuild.control('', [Validators.required]),
    // role: this.formBuild.control('', [Validators.required]),
  },{
    validators:matchpassword
  });
  
  // userRolOptions: string[] = [
  //   'Option 1', 
  //   'Option 2'
  // ];

  constructor(private formBuild: FormBuilder,
              private dialogRef:MatDialogRef<FormUserComponent>,
              private userService:UserService,
              @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    console.log("data ", this.data)
  }

  saveUser() {
    if (this.userForm.valid && this.data.title === 'Crear Usuario') {
      console.log('Creando...')
      const user = {
        name: this.userForm.get('name')?.value, 
        lastname: this.userForm.get('lastname')?.value, 
        email: this.userForm.get('email')?.value,
        username: this.userForm.get('username')?.value,
        password: this.userForm.get('password')?.value,
        // passwordVerify: this.userForm.get('passwordVerify')?.value,
        // role: this.userForm.get('role')?.value  
      }
      this.userService.postUsers(user)
        .subscribe((data) => console.log('EXITOSO!: ', data),
        (error) => console.error('ERROR! :', error))
      this.dialogRef.close(user);
    } else if(this.userForm.valid && this.data.title === 'Editar Usuario'){
      // this.userForm.markAllAsTouched();
      const userEdit = {
        name: this.userForm.get('name')?.value, 
        lastname: this.userForm.get('lastname')?.value, 
        email: this.userForm.get('email')?.value,
        username: this.userForm.get('username')?.value,
        password: this.userForm.get('password')?.value,
      }
        this.userService.putUser(userEdit, this.data.dialogData[0].id)
        .subscribe((data) => console.log('EXITOSO!: ', data),
        (error) => console.error('ERROR! :', error))
      this.dialogRef.close(userEdit);
    }
  }

}
