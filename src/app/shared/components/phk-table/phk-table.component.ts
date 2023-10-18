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
    "Rol"
  ];

  columnsTags: string[] = [
    "userName",
    "role"
  ];

  data: any[] = [
    {
      userName: "Gianfranco",
      role: "Administrador"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {

    this.dataSource = new MatTableDataSource<any>(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.dataSource.filterPredicate = this.createFilter();

  }

}
