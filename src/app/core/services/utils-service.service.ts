import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  parseValueToPercent(value: number): number {
    if (value > 1 && value < 10) {
      return value * 100;
    } else if (value >= 10 && value < 100) {
      return value * 1000;
    } else {
      return value * 10000;
    }
  }

  generateMask(value:number): string{
    if (value > 1 && value < 10) {
      return '0.00';
    } else if (value >= 10 && value < 100) {
      return '00.00';
    } else {
      return '000.00';
    }
  }

  parsePercentToValue (value: number) {
    if (value > 100 && value < 10000) {
      return value / 100;
    } else if (value >= 10000 && value < 100000) {
      return value / 1000;
    } else {
      return value / 10000;
    }
  }
}
