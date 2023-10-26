import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phk-searcher-result-auxiliary',
  templateUrl: './phk-searcher-result-auxiliary.component.html',
  styleUrls: ['./phk-searcher-result-auxiliary.component.scss'],
})
export class PhkSearcherResultAuxiliaryComponent implements OnInit {
  
  chatForm: FormGroup = this.fb.group({
    chat: this.fb.control("")
  }); 
  
  constructor(private fb:FormBuilder) {}

  @Input() tittle: string = 'Ladrillo';
  @Input() subTittle: string = 'Ladrillo';
  @Input() img: string = '../../../assets/images/ladrillo.png';
  @Input() extraInfo: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Fugiat perspiciatis amet reprehenderit cupiditate exercitationem minima, cumque quo repellendus voluptatum excepturi blanditiis nobis nam rem, aperiam quod sunt dignissimos vero quasi.';

  ngOnInit(): void {}

  response: string = '';

}
