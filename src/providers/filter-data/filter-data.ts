import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FilterDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilterDataProvider {
  order: number = 1; // -1 = Z-A; 0 = No order; 1 = A-Z
  column: string = 'name'; // Default filter column
  belt: string = '';

  constructor(public http: HttpClient) {
    // console.log('order: ', this.order);
    // console.log('column: ', this.column);
  }

  getOrder() { return this.order; }

  setOrder(order) { this.order = order; }

  getColum() { return this.column; }

  setColumn(column) { this.column = column; }

  getBelt() { return this.belt; }

  setBelt(belt) { this.belt = belt; }
}
