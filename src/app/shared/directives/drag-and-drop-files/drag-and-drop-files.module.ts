import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropFilesDirective } from './drag-and-drop-files.directive';



@NgModule({
  declarations: [
    DragAndDropFilesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DragAndDropFilesDirective
  ]
})
export class DragAndDropFilesModule { }
