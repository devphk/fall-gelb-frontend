import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { User } from '@shared/models';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  userForm: FormGroup = this.formBuild.group({
    name: this.formBuild.control('', Validators.required),
    email: this.formBuild.control('',[Validators.required, Validators.email]),
    username: this.formBuild.control('', Validators.required),
    lastname: this.formBuild.control('', Validators.required),
    password: this.formBuild.control('', Validators.required),
    passwordVerify: this.formBuild.control('', Validators.required),
  });

  constructor(private formBuild: FormBuilder,
              private userService:UserService) {}

  ngOnInit(): void {}
    
  onSubmit(formData:any) {
    console.log('FormData: ',formData);
    if(this.userForm.valid) {
      console.log('VÁLIDO');
      
      this.userService
      .postUsers(formData)
      .subscribe( 
        data => console.log('Exitoso! :', data),
        error =>console.error('Error! : ', error)
      );

    }else {
      console.log('INVÁLIDO');
    }
    

  }

  userRolOptions: string[] = ['Option 1', 'Option 2'];
}
