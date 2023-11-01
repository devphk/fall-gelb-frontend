import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { User } from '@shared/models';
import { MatSnackBar } from '@angular/material/snack-bar';

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
              private userService:UserService,
              private snackBar:MatSnackBar) {}

  ngOnInit(): void {}

  durationInSeconds = 2;

  openSnackBar(type:number){
    if(type === 1) {
      this.snackBar.open('Agregado Exitosamente!','Close',{
        duration: this.durationInSeconds * 1000,
        panelClass: ['success-snackbar']
      });
    }else{
      this.snackBar.open('Ha ocurrido un Error!','Close',{
        duration: this.durationInSeconds * 1000,
        panelClass: ['error-snackbar']
      });
    }
  }
    
  onSubmit(formData:any) {
    console.log('FormData: ',formData);
    if(this.userForm.valid) {
      console.log('VÁLIDO');
      this.openSnackBar(1);
      
      this.userService
      .postUsers(formData)
      .subscribe( 
        data => console.log('Exitoso! :', data),
        error =>console.error('Error! : ', error)
      );

    }else {
      console.log('INVÁLIDO');
      this.openSnackBar(2);
    }
    

  }

  userRolOptions: string[] = ['Option 1', 'Option 2'];
}
