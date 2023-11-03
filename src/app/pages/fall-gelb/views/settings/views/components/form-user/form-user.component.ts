import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { User, UserExport } from '@shared/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
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
    password: this.fb.control('', Validators.required),
    passwordVerify: this.fb.control('', Validators.required),
  },{
    validators:matchpassword
  });
  test:string = 'testVariable';
  constructor(private fb: FormBuilder,
              private userService:UserService,
              private snackBar:MatSnackBar,
              private matDialog:MatDialogRef<FormUserComponent>,
              @Inject(MAT_DIALOG_DATA) private dataEdit: UserExport) 
  {}

  ngOnInit(): void {
    if (this.dataEdit.title ==='Editar Usuario') {
      this.userForm.patchValue({
        name: this.dataEdit.info.name,
        email: this.dataEdit.info.email,
        username: this.dataEdit.info.username,
        lastname: this.dataEdit.info.lastname
      })
    }
    console.log('INJECTED DATA: ',this.dataEdit)
    // console.log('DATA NAME: ', this.data.name)
  }

  durationInSeconds = 2;

  openSnackBar(type:number, message:string){
    if(type === 1) {
      this.snackBar.open(message,'Close',{
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
    if(this.dataEdit.title === 'Editar Usuario') {
      
      if(this.userForm.valid) {
        console.log('VÁLIDO');
        this.openSnackBar(1, 'Editado Correctamente! ');
        console.log('FormDataEdit: ',formData);
        
        this.userService
        .putUser(formData, this.dataEdit.info.id)
          .subscribe( 
            (data) => {console.log('Exitoso! :', data);this.matDialog.close();},
            error =>console.error('Error! :', error));
        
        console.log('DATA_EDIT',this.dataEdit)

      }else {
        console.log('INVÁLIDO');
        this.openSnackBar(2, 'Ha ocurrido un Error!');
      }
    } else if(this.dataEdit.title === 'Registrar Usuario') {

      if(this.userForm.valid) {
        console.log('VÁLIDO');
        this.openSnackBar(1, 'Agregado Correctamente!');
        console.log('FormDataAdd: ',formData);
        
        this.userService
        .postUsers(formData)
          .subscribe( 
            (data) => {console.log('Exitoso! :', data);this.matDialog.close();},
            error =>console.error('Error! :', error));
        
        console.log('DATA_ADD',this.dataEdit)

      }else {
        console.log('INVÁLIDO');
        this.openSnackBar(2, 'Ha ocurrido un Error!');
      }
    }

  }

  userRolOptions: string[] = ['Option 1', 'Option 2'];
}
