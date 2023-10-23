import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-units',
  templateUrl: './new-units.component.html',
  styleUrls: ['./new-units.component.scss']
})
export class NewUnitsComponent implements OnInit {

  newUnitsForm: FormGroup = this.fb.group({
    name: this.fb.control("")
  })
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
