import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { PhkDialogComponent } from 'src/app/shared/components/phk-dialog/phk-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openDialog<T>(childComponent: ComponentType<any>, 
                title: string,
                width: string, 
                height: string): MatDialogRef<PhkDialogComponent> {

    const dialogRef = this.dialog
                          .open(PhkDialogComponent, {
                            width: width,
                            height: height,
                            maxWidth: '95vw',
                            maxHeight: '95vh',
                            data: { 
                              title,
                              childComponent 
                            }
                          });

    return dialogRef;
  }

}
