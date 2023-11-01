import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { User } from '@shared/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { matchpassword } from './match-password.validator';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  userForm: FormGroup = this.fb.group({
    name: this.fb.control('', Validators.required),
    email: this.fb.control('',[Validators.required, Validators.email]),
    username: this.fb.control('', Validators.required),
    lastname: this.fb.control('', Validators.required),
    // password: this.fb.control('', Validators.required),
    // passwordVerify: this.fb.control('', Validators.required),
  },{
    validators:matchpassword
  });
  test:string = 'testVariable';
  constructor(private fb: FormBuilder,
              private userService:UserService,
              private snackBar:MatSnackBar,
              private matDialog:MatDialogRef<FormUserComponent>,
              @Inject(MAT_DIALOG_DATA) private data: User) 
  {}

  ngOnInit(): void {
    if (this.data) {
      this.userForm.patchValue({
        name: this.data.name,
        email: this.data.email,
        username: this.data.username,
        lastname: this.data.lastname
      })
    }
    console.log('INJECT DATA: ',this.data)
    console.log('DATA NAME: ', this.data.name)
  }

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
      
      // this.userService
      // .postUsers(formData)
      // .subscribe( 
      //   (data) => {
      //     console.log('Exitoso! :', data);
      //     this.matDialog.close();
      //   },
      //   error =>console.error('Error! :', error)
      // );

    }else {
      console.log('INVÁLIDO');
      this.openSnackBar(2);
    }
    

  }

  userRolOptions: string[] = ['Option 1', 'Option 2'];
}
