import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, DoCheck, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-phk-table',
  templateUrl: './phk-table.component.html',
  styleUrls: ['./phk-table.component.scss']
})
export class PhkTableComponent implements OnInit,
                                          DoCheck {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Table inputs

  @Input() columnsToDisplay: string[] = [];
  @Input() columnsTags: string[] = [];
  @Input() data: any[] = [];

  // Two binding of items selected
  
  @Input() itemsSelected: any[] = [];
  @Output() itemsSelectedChange = new EventEmitter<any[]>();
    
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  backupData: any[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.columnsTags.unshift("select");
    this.columnsToDisplay.unshift("select");

    this.setData();
  }

  ngDoCheck(): void {
    
    if (this.backupData.length !== this.data.length) {
      this.changeDetectorRef.detectChanges();
      this.setData();
    }

  }

  setData() {

    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.backupData = this.data.slice();
    // this.dataSource.filterPredicate = this.createFilter();

  }

  // Selection logic

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    this.itemsSelected.splice(0);

    if (this.selection.selected.length > 0) {
      this.dataSource.data.forEach((item) => {
        this.itemsSelected.push(item);
      });
    }

  }

  updateCheckedList(event: any, element: any) {
    console.log("event ", event)
    console.log("Element selected ", element)
    if (event.checked) {
      this.itemsSelected.push(element);
    } else {
      let i = 0;
      this.itemsSelected.forEach((item: any) => {
        if (item.UserName === element.UserName) {
          this.itemsSelected.splice(i, 1);
          return;
        }
        i++;
      });
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
}
