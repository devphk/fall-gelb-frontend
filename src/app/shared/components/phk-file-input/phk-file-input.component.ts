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
import { EllipsisPipeModule } from '@shared/pipes/ellipsis/ellipsis-pipe.module';

@Component({
  selector: 'app-phk-file-input',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    DragAndDropFilesModule,
    FlexLayoutModule,
    MatTooltipModule,
    EllipsisPipeModule
  ],
  templateUrl: './phk-file-input.component.html',
  styleUrls: ['./phk-file-input.component.scss']
})
export class PhkFileInputComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;

  //Inputs

  @Input() inputFile: File | undefined = undefined;
  @Input() fileList: File[] | undefined = undefined;
  @Input() multiple: boolean = false;
  @Output() inputFileChange = new EventEmitter<File | undefined>();
  @Output() fileListChange = new EventEmitter<File[] | undefined>();

  fileOver: boolean = false;
  fileName: string | undefined = '';
  dragFile: boolean = false;
  filesControl: File | File[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  isMouseOver(mouseOver: boolean) {

    if (this.fileOver !== mouseOver) {
      this.fileOver = mouseOver;
    }

    if (this.fileOver && !this.inputFile) {
      this.dragFile = true;
    } else {
      this.dragFile = false;
    }

  }

  fileDropped(files: File[]) {

    if (this.multiple) {

      if (this.fileList 
          && this.fileList?.length > 0) {

        this.fileList = [...this.fileList, ...files];
        
      } else {

        this.fileList = files;      

      }

      this.fileListChange.emit(this.fileList);
      this.filesControl = this.fileList;
    } else {
      this.inputFile = files[0];
      this.fileName = this.inputFile.name;
      this.inputFileChange.emit(this.inputFile);
      this.filesControl = this.inputFile;
    }

  }

  onFileSelected(event: any) {

    if (event.target.files) {

      let files: File[] = event.target.files;

      if (this.multiple) {

        this.fileList = files;
        this.fileListChange.emit(this.fileList);
        this.filesControl = this.fileList;

      } else {

        this.inputFile = files[0];
        this.fileName = this.inputFile?.name;
        this.inputFileChange.emit(this.inputFile);
        this.filesControl = this.inputFile;

      }

    }

  }

  selectFile() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.click();
  }

  deleteFile(fileIndex: number = -1) {

    if (fileIndex !== -1) {

      this.deleteFileInArray(fileIndex)   
      this.fileListChange.emit(this.fileList);   

      if (this.fileList?.length === 0) {
        this.fileList = undefined;
        this.filesControl = this.fileList;
      }

    } else {

      this.inputFile = undefined;
      this.inputFileChange.emit(this.inputFile);  
      this.filesControl = this.inputFile;

    }

  }

  deleteAllFiles() {
   
    this.fileList = undefined;
    this.filesControl = undefined;
    
  }

  deleteFileInArray(fileIndex: number) {

    if (this.fileList) {

      let fileArray: File[] = [];
      
      for (let index = 0; index < this.fileList?.length; index++) {
  
        const file = this.fileList[index];

        if (index !== fileIndex) {
          fileArray.push(file);
        }
        
      }

      this.fileList = fileArray.slice();

    }

  }

}
