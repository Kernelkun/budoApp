import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value, reverse: boolean) {
    if (!value) return;

    if (!reverse) return value;

    if(reverse) {
      return value.reverse();
    }
  }
}