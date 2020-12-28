import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.length > 10 ? value.substring(0 , 10) + '' : value;
  }

}
