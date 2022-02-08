import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'procentPipe'
})
export class ProcentPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
