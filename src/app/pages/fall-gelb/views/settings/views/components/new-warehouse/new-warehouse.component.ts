import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.scss']
})
export class NewWarehouseComponent implements OnInit {

  warehouseForm: FormGroup = this.fb.group({
    name: this.fb.control(""),
    address: this.fb.control("")
  })
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
