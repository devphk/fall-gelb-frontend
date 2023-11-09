import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-phk-confirmation-dialog',
  templateUrl: './phk-confirmation-dialog.component.html',
  styleUrls: ['./phk-confirmation-dialog.component.scss']
})
export class PhkConfirmationDialogComponent implements OnInit {

  title:string = '';
  subtitle: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
              public dialogRef:MatDialogRef<PhkConfirmationDialogComponent>) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
