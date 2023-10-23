import { Component, OnInit } from '@angular/core';
import { defaultTableColumnsTags, defaultTableColumnsToDisplay, defaultTableData } from 'src/app/shared/models/table';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {

  tableColumnsToDisplay: string[] = defaultTableColumnsToDisplay;
  tableColumnsTags: string[] = defaultTableColumnsTags;
  tableData: any[] = defaultTableData;
  itemsSelected: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
