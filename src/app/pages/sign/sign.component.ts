import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  signInFormGroup: FormGroup = this.fb.group({
    username: this.fb.control(null, [Validators.required]),
    password: this.fb.control(null, [Validators.required])
  });

  hidePassword = true;
  openSpinner = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
  }
}




