import { Component, 
         OnInit,
         ViewChild,
         ElementRef,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DragAndDropFilesModule } from '@shared/directives/drag-and-drop-files/drag-and-drop-files.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-phk-file-input',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    DragAndDropFilesModule,
    FlexLayoutModule,
    MatTooltipModule
  ],
  templateUrl: './phk-file-input.component.html',
  styleUrls: ['./phk-file-input.component.scss']
})
export class PhkFileInputComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;

  //Inputs

  @Input() inputFile: File | undefined = undefined;
  @Output() inputFileChange = new EventEmitter<File | undefined>();

  fileOver: boolean = false;
  fileName: string | undefined = '';
  dragFile: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  isMouseOver(mouseOver: boolean) {

    if (this.fileOver !== mouseOver) {
      this.fileOver = mouseOver;
      console.log("this.fileOver ", this.fileOver)
    }

    if (this.fileOver && !this.inputFile) {
      this.dragFile = true;
    } else {
      this.dragFile = false;
    }

  }

  fileDropped(files: File[]) {
    this.inputFile = files[0];
    this.inputFileChange.emit(this.inputFile);
    this.fileName = this.inputFile.name;
  }

  onFileSelected(event: any) {

    if (event.target.files) {
      this.inputFile = event.target.files[0];
      this.inputFileChange.emit(this.inputFile);
      this.fileName = this.inputFile?.name;
    }

  }

  selectFile() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.click();
  }

  deleteFile() {
    this.inputFile = undefined;
    this.inputFileChange.emit(this.inputFile);  
  }

}
