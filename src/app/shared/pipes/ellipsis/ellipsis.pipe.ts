import { Pipe, 
         PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string | undefined, 
            limit: number): any {
    if (value) {
      if(limit && value.length > limit) {
        return value.substring(0, limit).concat('...');
      }
    }
    return value;
  }

}
