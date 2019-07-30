import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortdesc'
})
export class ShortdescPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value.length > 0){
      return value.length > 550 ? value.substr(0, 550) + '...' : value;
    }
    return value;
  }

}
