import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeAnimation } from 'src/app/shared/animations';
import { SignService } from './sign.service';
import { Router } from '@angular/router';
import { ToastService } from '@core/services';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  animations: [fadeAnimation]
})
export class SignComponent implements OnInit {

  signInForm: FormGroup = this.fb.group({
    username: this.fb.control(null, [Validators.required]),
    password: this.fb.control(null, [Validators.required])
  });

  hidePassword = true;
  openSpinner = false;
  year: number = 0;

  constructor(private fb: FormBuilder,
              private signInService: SignService,
              private router: Router,
              private toastService: ToastService) { }

  ngOnInit(): void {

    let date = new Date();
    this.year = date.getFullYear();

  }

  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.submit();
  }

  submit() {

    if (this.signInForm.valid) {
      this.signInService
          .signIn(this.signInForm.get('username')?.value,
                  this.signInForm.get('password')?.value)
          .subscribe((response) => {
            console.log("response ", response)
            this.toastService.showToaster('Bienvenido!');
          }, (error) => {
            this.toastService.showToaster(error.error.message, true);
          });
    }
  }
}




