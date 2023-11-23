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
  file: any;

  constructor(private fb: FormBuilder,
              private signInService: SignService,
              private router: Router,
              private toastService: ToastService) { }

  show() {
    console.log("file ", this.file)
  }

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
            this.openSpinner = false;
            sessionStorage.setItem('fallgelb', response.access_token);
            this.router.navigate(['home']);
            this.toastService.showToaster('Bienvenido!');
          }, (error) => {
            this.toastService.showToaster(error.error.message, true);
          })
      // this.openSpinner = true;
      // let randowm = Math.random()*2500;
      // setTimeout(() => {
      //   this.openSpinner = false;
      //   sessionStorage.setItem('fallgelb', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTc2YzNlYS01ZjRhLTRhMzQtYTU1Yi01MjgzNmM5YzM4YTciLCJqdGkiOiIxMmQ4YTUyNDkxYjFjNWE2M2ZhOTU5MWRiMDg4OTNkZWU3ZWJhNzk1MGYwZTFhMzA3YTMwNjQxOTMyZTlkYzczNWNjZjJiZGI0NGI1N2M4YiIsImlhdCI6MTY5OTAxOTU4My4xNDkwMDksIm5iZiI6MTY5OTAxOTU4My4xNDkwMTEsImV4cCI6MTY5OTI3ODc4My4xNDU3OSwic3ViIjoiNiIsInNjb3BlcyI6W119.NyeE3BfssHJkklvWicjF4PmycLG9bnPz9s-jWDAOubO2zaxCq9luIcj9bbl2I9aByrZz4F49QBIIe279rzDe9AHAo3IPNoKduTXAX5R6-0gdp_uDJWAeP0HlcvD35wpBihluwXCm78xnNYCbWVtrTNy852ReEyhSsZ7dVewxwOevNDNDiJzRXr2M033wfB4tCC9KZHQJwMg0lqqwSWens8kw6eVl6OOA4m5Xq4mV4HC95E31pjK06SYrPaXazKHmZlZ1cxfGMc8n_sCN706Fygnj9P-oGpkks_Ac-w1XOWb3tj9GO0_Jg-lfkK9XfCWHdNPE5rsSD4O9P-h-FqmadxN3Y7Ygf6BZ8zGnUfa-rFp18G3eoV3coqnqiMBndhZ8JUEeehO2i8D_lQG-42HQBK6UUR128ztk2uQNVG6BIQ7mCmlTYX1SlmTj6J4pBv04MkLDqpXDu60JmSDPy7X9nCFrRY-hcXYfNpyPFtLWZCfLk-zsxU4I5dqcOFt2xZjCSF664GOjq0hawYcEt7zUC_yMyRmOxN_gp-BGVXfx2Gierauf937PBxYAoUGzKIo_cArYh8JyCSYX4OwDezQ024Nf-9h8twOFy61hx5EB1RTkKTpNR60d6fIXBE4Z75luF6ep0-VUpzM8gGi3jQDNQMe7xovDCQl1qFh4PZ91ozY');
      //   this.router.navigate(['home']);
      // }, randowm);
    }
  }
}




