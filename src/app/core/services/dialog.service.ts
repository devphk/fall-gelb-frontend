import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { PhkDialogComponent } from 'src/app/shared/components/phk-dialog/phk-dialog.component';
import { PhkConfirmationDialogComponent } from '@shared/components/phk-confirmation-dialog/phk-confirmation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  constructor(private dialog: MatDialog) {}

  openDialog<T>(childComponent: ComponentType<any>, 
                title: string,
                width: string, 
                height: string,
                dialogData: any = null): MatDialogRef<PhkDialogComponent> {

    const dialogRef = this.dialog
                          .open(PhkDialogComponent, {
                            width: width,
                            height: height,
                            maxWidth: '95vw',
                            maxHeight: '95vh',
                            disableClose: true,
                            data: {
                              title,
                              childComponent,
                              dialogData
                            }
                          });

    return dialogRef;
  }

  openConfirmationDialog(title:string, 
                         subtitle:string): MatDialogRef<PhkConfirmationDialogComponent> {

    const dialogRef = this.dialog
                          .open(PhkConfirmationDialogComponent, {
                            width: '300px',
                            height: 'auto',
                            maxWidth: '95vw',
                            maxHeight: '95vh',
                            disableClose: true,
                            data: {
                              title,
                              subtitle
                            }
                          });
    return dialogRef;
  }

}
