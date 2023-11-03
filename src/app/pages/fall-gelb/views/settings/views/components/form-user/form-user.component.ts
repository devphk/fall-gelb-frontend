import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {

  userForm: FormGroup = this.formBuild.group({
    name: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].name : '', [Validators.required]),
    email: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].email : '', [Validators.required]),
    userName: this.formBuild.control(this.data.dialogData ? this.data.dialogData[0].username : '', [Validators.required]),
    password: this.formBuild.control('', [Validators.required]),
    passwordVerify: this.formBuild.control('', [Validators.required]),
    role: this.formBuild.control('', [Validators.required]),
  });
  
  userRolOptions: string[] = [
    'Option 1', 
    'Option 2'
  ];

  constructor(private formBuild: FormBuilder,
              private dialogRef:MatDialogRef<FormUserComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    console.log("data ", this.data)
  }

  showForm() {
    console.log('this.form: ', this.userForm);
    console.log('value: ', this.userForm.get('control')!.value);
  }

  saveUser() {
    if (this.userForm.valid) {
      const user = {
        name: this.userForm.get('name')?.value, 
        email: this.userForm.get('email')?.value,
        userName: this.userForm.get('userName')?.value,
        password: this.userForm.get('password')?.value,
        passwordVerify: this.userForm.get('passwordVerify')?.value,
        role: this.userForm.get('role')?.value  
      }
      this.dialogRef.close(user);
    } else {
      this.userForm.markAllAsTouched();
    }
  }

}
