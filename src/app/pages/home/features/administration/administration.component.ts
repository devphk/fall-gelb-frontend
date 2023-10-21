import { Component, OnInit } from '@angular/core';
import { defaultTableColumnsTags, defaultTableColumnsToDisplay, defaultTableData } from 'src/app/shared/models/table';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  tableColumnsToDisplay: string[] = [];
  tableColumnsTags: string[] = [];
  tableData: any[] = [];
  itemsSelected: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tableColumnsToDisplay = defaultTableColumnsToDisplay;
    this.tableColumnsTags = defaultTableColumnsTags;
    this.tableData = defaultTableData;
  }

}
