import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  form: FormGroup = this.fb.group({
    control: this.fb.control("")
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  showForm() {
    console.log("this.form: ", this.form)
    console.log("value: ", this.form.get('control')!.value)
  }

}
