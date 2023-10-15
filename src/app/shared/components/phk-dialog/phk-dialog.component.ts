import { ComponentType } from '@angular/cdk/portal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, ViewChild, OnInit, Inject, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-phk-dialog',
  templateUrl: './phk-dialog.component.html',
  styleUrls: ['./phk-dialog.component.scss']
})
export class PhkDialogComponent implements OnInit {

  childComponent!: ComponentType<any>;
  title: string = "";

  constructor(
    public dialogRef: MatDialogRef<PhkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.childComponent = this.data.childComponent;
    const componentFactory = this.componentFactoryResolver
                                 .resolveComponentFactory(this.data.childComponent);
    this.viewContainerRef.createComponent(componentFactory);        
  }

}
