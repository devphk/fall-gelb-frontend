import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  DoCheck,
  Output,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fadeAnimation } from '../../animations';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-phk-table',
  templateUrl: './phk-table.component.html',
  styleUrls: ['./phk-table.component.scss'],
  animations: [fadeAnimation],
})
export class PhkTableComponent implements OnInit, DoCheck {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Table inputs

  @Input() columnsToDisplay: string[] = [];
  @Input() columnsTags: string[] = [];
  @Input() data: any[] = [];
  @Input() skeletonRowNumber: number = 12;
  @Input() showSelectColumn: boolean = true;

  // Two binding of items selected

  @Input() itemsSelected: any[] = [];
  @Output() itemsSelectedChange = new EventEmitter<any[]>();

  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  backupData: any[] = [];
  showSkeleton: boolean = true;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.showSelectColumn) {
      this.columnsTags.unshift('select');
      this.columnsToDisplay.unshift('select');
    }

    this.setData();
  }

  ngDoCheck(): void {
    if (this.backupData.length !== this.data.length) {
      this.changeDetectorRef.detectChanges();
      this.setData();
    }
  }

  setData() {
    this.showSkeleton = true;
    let randomSeconds = Math.random() * 2000;

    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.backupData = this.data.slice();
      // this.dataSource.filterPredicate = this.createFilter();

      this.showSkeleton = false;
    }, randomSeconds);
  }

  // Selection logic

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
    this.itemsSelected.splice(0);

    if (this.selection.selected.length > 0) {
      this.dataSource.data.forEach((item) => {
        this.itemsSelected.push(item);
      });
    }
    console.log("selection ", this.selection)
  }

  updateCheckedList(event: any, element: any, rowIndex: number) {
    console.log("event ", event)
    console.log("element ", element)
    console.log("rowIndex ", rowIndex)

    
    if (event.checked) {

      this.itemsSelected.push(element);

    } else {

      let index = this.itemsSelected.findIndex(
        (item) => item.UserName === element.UserName
      );
      if (index !== -1) {
        this.itemsSelected.splice(index, 1);
      }

    }

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  getType(variable: any) {

    if (Array.isArray(variable)) {
      return 'array';
    } else {
      return typeof variable;
    }

  }

  selectionChange(tableElement: any, selectEvent: MatSelectChange, rowIndex: number) {
    console.log("rowIndex ", rowIndex)
    console.log("event ", selectEvent)
    console.log("this.data ", this.data)

    let event = {
      checked: selectEvent.value.length > 0 ? true : false
    }

    // First i check if the item exist in the selected
    // Items attay

    let existIndex = this.itemsSelected.findIndex((item) => {
      return item.rowIndex === rowIndex
    });

    if (selectEvent.value.length === 0
        || existIndex === -1) {
      this.selection.toggle(tableElement);
      this.updateCheckedList(event, this.data[rowIndex], rowIndex);
    }

    let itemIndex = this.itemsSelected.findIndex((item) => {
      return item.rowIndex === rowIndex
    });

    this.itemsSelected[itemIndex].optionsSelected = selectEvent.value;

  }

}
