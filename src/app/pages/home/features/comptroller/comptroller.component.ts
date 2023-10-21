import { Component, OnInit } from '@angular/core';
import { defaultTableColumnsTags, defaultTableColumnsToDisplay, defaultTableData } from 'src/app/shared/models/table';

@Component({
  selector: 'app-comptroller',
  templateUrl: './comptroller.component.html',
  styleUrls: ['./comptroller.component.scss']
})
export class ComptrollerComponent implements OnInit {

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
