import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  animations: [fadeAnimation]
})
export class SignComponent implements OnInit {

  signInFormGroup: FormGroup = this.fb.group({
    username: this.fb.control(null, [Validators.required]),
    password: this.fb.control(null, [Validators.required])
  });

  hidePassword = true;
  openSpinner = false;
  year: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    let date = new Date();
    this.year = date.getFullYear();

  }

  submit() {
  }
}




