import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
// import { PhkModalComponent } from 'src/app/shared/components/phk-modal/phk-modal.component';
import { DialogData, DialogOptions } from '../models';
import { ComponentType } from '@angular/cdk/portal';
import { PhkDialogComponent } from 'src/app/shared/components/phk-dialog/phk-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private dialog: MatDialog) {}

  private static fetchOptions({
    width,
    minWidth,
    maxWidth,
    minHeight,
    height,
    panelClass,
  }: DialogOptions): Pick<
    MatDialogConfig<DialogData>,
    | 'width'
    | 'minWidth'
    | 'maxWidth'
    | 'minHeight'
    | 'height'
    | 'disableClose'
    | 'panelClass'
  > {

    let panelClassOption: string = panelClass ? panelClass : 'template-modal-panel';

    return {
      minWidth: `${minWidth}%`,
      maxWidth: `${maxWidth}%`,
      width: width === 'auto' ? `auto` : `${width}%`,
      minHeight: `${minHeight}%`,
      height: height === 'auto' ? `auto` : `${height}%`,
      disableClose: true,
      panelClass: [panelClassOption, 'template-modal-panel'],
    };
  }

  // open(
  //   data: DialogData,
  //   options: DialogOptions = {
  //     width: 'auto',
  //     minWidth: 0,
  //     maxWidth: 500,
  //     height: 'auto',
  //     minHeight: 0,
  //     panelClass: 'custom-panel',
  //   }
  // ): MatDialogRef<PhkModalComponent> {
  //   return this.dialog.open<PhkModalComponent, DialogData>(
  //     PhkModalComponent,
  //     {
  //       ...ModalService.fetchOptions(options),
  //       data,
  //     }
  //   );
  // }

  openDialog<T>(childComponent: ComponentType<any>, 
                title: string,
                width: string, 
                height: string): MatDialogRef<PhkDialogComponent> {

    const dialogRef = this.dialog
                          .open(PhkDialogComponent, {
                            width: width,
                            height: height,
                            data: { 
                              title,
                              childComponent 
                            }
                          });

    return dialogRef;
  }

}
