import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-consolidator',
  templateUrl: './new-consolidator.component.html',
  styleUrls: ['./new-consolidator.component.scss']
})
export class NewConsolidatorComponent implements OnInit {

  consolidatorForm: FormGroup = this.fb.group({
    name: this.fb.control("")
   })

  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

  showForm() {
    console.log("this.form: ", this.consolidatorForm)
    console.log("value: ", this.consolidatorForm.get('name')!.value)
  }

}
