
import { TemplateRef } from '@angular/core';

export interface DialogData {
  template?: TemplateRef<any>;
  context?: any;
  component?: any;
  title?: string;
  attributes?: any;
}

export interface DialogOptions {
  width?: number | string;
  minWidth?: number;
  maxWidth?: number;
  height?: number | string;
  minHeight?: number;
  panelClass?: string;
}