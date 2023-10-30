import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-commodity-type',
  templateUrl: './new-commodity-type.component.html',
  styleUrls: ['./new-commodity-type.component.scss']
})
export class NewCommodityTypeComponent implements OnInit {

  commodityTypeForm: FormGroup = this.fb.group({
    name: this.fb.control("")
  })
  
  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
