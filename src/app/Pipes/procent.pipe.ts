import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'procent'
})
export class ProcentPipe implements PipeTransform {

  transform(value: number, args: number): number {
    let total = value + args;
    let procent = (value / total) * 100;
    return Math.floor(procent);
  }
}
