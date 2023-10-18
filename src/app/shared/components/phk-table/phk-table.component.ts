import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-phk-table',
  templateUrl: './phk-table.component.html',
  styleUrls: ['./phk-table.component.scss']
})
export class PhkTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<any>();
  columnsToDisplay: string[] = [
    "Usuario",
    "Rol",
    "Correo",
    "Teléfono"
  ];

  columnsTags: string[] = [
    "userName",
    "role",
    "email",
    "phone"
  ];

  data: any[] = [
    {
      userName: "Agreda",
      role: "Administrador",
      email: "jagreda@gmail.com",
      phone: "04127527692"
    },
    {
      userName: "Gabriel",
      role: "Administrador",
      email: "gdavila@gmail.com",
      phone: "04127527692"
    },
    {
      userName: "Gianfranco",
      role: "Administrador",
      email: "abinassar@gmail.com",
      phone: "04127527692"
    }
  ];

  selection = new SelectionModel<any>(true, []);
  itemsSelected: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.columnsTags.unshift("select");
    this.columnsToDisplay.unshift("select");

    this.getData();
  }

  getData() {

    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

    console.log("elements selected ", this.itemsSelected)

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
