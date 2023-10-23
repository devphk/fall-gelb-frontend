import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-goods-type',
  templateUrl: './new-goods-type.component.html',
  styleUrls: ['./new-goods-type.component.scss']
})
export class NewGoodsTypeComponent implements OnInit {

  goodsTypeForm: FormGroup = this.fb.group({
    name: this.fb.control("")
  })
  
  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
