import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mod'
})
export class ModPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if ( value < 0 ) return value*-1
    return value
  }

}
