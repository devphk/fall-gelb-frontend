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

@Component({
  selector: 'app-phk-file-input',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    DragAndDropFilesModule,
    FlexLayoutModule
  ],
  templateUrl: './phk-file-input.component.html',
  styleUrls: ['./phk-file-input.component.scss']
})
export class PhkFileInputComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;

  //Inputs

  @Input() inputFile!: File;
  @Output() inputFileChange = new EventEmitter<File>();

  constructor() { }

  ngOnInit(): void {
  }

  isMouseOver(mouseOver: boolean) {
    console.log("mouseOver ", mouseOver)
  }

  fileDropped(files: File[]) {
    console.log("files ", files)
  }

  onFileSelected(event: any) {

    if (event.target.files) {
      this.inputFile = event.target.files[0];
      this.inputFileChange.emit(this.inputFile);
    }

  }

  selectFile() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.click();
  }
}
