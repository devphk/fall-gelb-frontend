import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  hide = true;

  userForm: FormGroup = this.formBuild.group({
    name: this.formBuild.control(''),
    email: this.formBuild.control(''),
    userName: this.formBuild.control(''),
    password: this.formBuild.control(''),
    passwordVerify: this.formBuild.control(''),
    userRol: this.formBuild.control(''),
  });

  constructor(private formBuild: FormBuilder) {}

  ngOnInit(): void {}

  showForm() {
    console.log('this.form: ', this.userForm);
    console.log('value: ', this.userForm.get('control')!.value);
  }
}
