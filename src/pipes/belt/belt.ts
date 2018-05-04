import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
  transform(items: Observable<any[]>, terms: string): Observable<any[]> {
    if (!items) return Observable[''];
    if (!terms) return items;
    terms = terms.toString().toLowerCase();
    return items.filter(it => {
      // console.log(it);
      // return true;
      return it["belt"].toString().toLowerCase().includes(terms);
    });
  }
}
