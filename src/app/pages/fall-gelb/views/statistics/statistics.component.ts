import { Component, OnInit } from '@angular/core';
import { defaultTableColumnsTags, defaultTableColumnsToDisplay, defaultTableData } from 'src/app/shared/models/table';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

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
