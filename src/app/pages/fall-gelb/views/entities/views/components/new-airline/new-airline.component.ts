import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-airline',
  templateUrl: './new-airline.component.html',
  styleUrls: ['./new-airline.component.scss']
})
export class NewAirlineComponent implements OnInit {

  airlineForm: FormGroup = this.fb.group({
    name: this.fb.control("")
   })

  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}
