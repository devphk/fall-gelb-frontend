import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-phk-confirmation-dialog',
  templateUrl: './phk-confirmation-dialog.component.html',
  styleUrls: ['./phk-confirmation-dialog.component.scss']
})
export class PhkConfirmationDialogComponent implements OnInit {

  headerTitle: string = '';
  title:string = '';
  subtitle: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<PhkConfirmationDialogComponent>) { }

  ngOnInit(): void {
    this.headerTitle = this.data.headerTitle;
    this.title = this.data.title;
    this.subtitle = this.data.subtitle;
  }

}
