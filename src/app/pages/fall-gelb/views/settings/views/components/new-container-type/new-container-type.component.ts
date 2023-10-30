import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-container-type',
  templateUrl: './new-container-type.component.html',
  styleUrls: ['./new-container-type.component.scss']
})
export class NewContainerTypeComponent implements OnInit {

  containerTypeForm: FormGroup = this.fb.group({
    name: this.fb.control("")
  })
  
  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
