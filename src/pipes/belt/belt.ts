import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BeltPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'belt',
})
export class BeltPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], terms: string): any[] {
    console.log('belt: ',items);
    if (!items) return [];
    if (!terms) return items;
    terms = terms.toString().toLowerCase();
    return items.filter(it => {
      return it.belt.toString().toLowerCase().includes(terms);
    });
  }
}
