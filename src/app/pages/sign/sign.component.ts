import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeAnimation } from 'src/app/shared/animations';
import { SignService } from './sign.service';
import { Router } from '@angular/router';

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
              private router: Router) { }

  ngOnInit(): void {

    let date = new Date();
    this.year = date.getFullYear();

  }

  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.submit();
  }

  submit() {

    if (this.signInForm.valid) {
      // this.signInService.signIn(this.signInForm.get('username')?.value,
      //                           this.signInForm.get('password')?.value)
      //                           .subscribe((response) => {
      //                             console.log("response ", response)
      //                           })
      this.openSpinner = true;
      let randowm = Math.random()*2500;
      setTimeout(() => {
        this.openSpinner = false;
        sessionStorage.setItem('fallgelb', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTc2YzNlYS01ZjRhLTRhMzQtYTU1Yi01MjgzNmM5YzM4YTciLCJqdGkiOiIxMWQyYjNjNzdlNDBiNTg0NDFiMGRjODIyZjc5NTdjNjQxNTY3OTRmNzY1N2YyYjIzNzBjZDJhZGQyMmM1ODA1ZmQ3NjY0ODVhZGRmNmY2ZCIsImlhdCI6MTY5ODc0NTE0MS4xNTEyODcsIm5iZiI6MTY5ODc0NTE0MS4xNTEyODgsImV4cCI6MTY5OTAwNDM0MS4xNDg0MDksInN1YiI6IjEiLCJzY29wZXMiOltdfQ.YuzU-cTEFSCBUpMn4BFpFu6T-agGthUogCiBMkgBvSrde8NiBQT8VVSnq9NZbC9YDsjUw6JZqfb6XhTgcQt3Ps0FJofJJw8eHDg761YOk3wCxDHwW0997Xsdl4OALqmDTN2hPfX3GbL1o2w7eHnOIpDI5mvc6f0yCUQZ0vRh9PrVfhZ11SQXxFTVfuGvcnjDU5mA44VZVuH1Pjo2Gwbogs2HOr5kDfzKOuIC8GSG1AddWCcRXzryab6_bVDN23pZffMzFgm4bTg6In3Yg1Jp7usYhc_V28VuJAqN4bFRp0EH02hTsHtHc9eG8bvJF-5FZTskraFg6riB8lLKGRoRZKzCOjwiTnVlsKt9Rug0TC40cKmmhC7Zbj1-stR_A2UxE2Srsx2hL6e6T7E_Gfde8yhQS0rS8qtTOgTJGhKMlpYqs5nKSXrAN2vhp49B5goJWHP_Kud5IDl29shw8FKkBSip1Ragt4IV78OjC1jb7jrGwwcw8CGYPOrV_r8XD8SWU_Fj-UUdA0z4kSqbHR97bH7xtp5oIsGqQx4eBGcn4qGMwf3LNMxXZC7eEPev879Ym7fedTJzsglSA1SVKHwaqrFFBRFcA1sYgRTfm9QoHPzvWk063fPZsJGM1GxGP1OHQ8hYKfPig5WRQddg0qCpRn3Xzjvo6yxuQYS9ehtlHn0');
        this.router.navigate(['home']);
      }, randowm);
    }
  }
}




