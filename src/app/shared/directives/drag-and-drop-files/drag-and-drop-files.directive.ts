import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[DragAndDropFiles]'
})
export class DragAndDropFilesDirective {

  constructor() {
  }

  @HostBinding('class.fileover') fileOver!: boolean;
  @Output() fileDropped = new EventEmitter<File[]>();
  @Output() mouseOver: EventEmitter<boolean> = new EventEmitter();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
    this.mouseOver.emit( true );
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    this.mouseOver.emit( false );
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  public ondrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    this.mouseOver.emit( false );
    const files = evt.dataTransfer ? evt.dataTransfer.files : evt.originalEvent.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }

}
