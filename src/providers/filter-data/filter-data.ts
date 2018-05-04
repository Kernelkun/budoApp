import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FilterDataProvider {
  column: string = 'name'; // Default filter column
  belt: string = '';
  reverse: boolean = false;

  constructor(public http: HttpClient) {
    // console.log('reverse: ', this.reverse);
    // console.log('column: ', this.column);
  }

  getReverse() { return this.reverse; }

  setReverse(reverse) { this.reverse = reverse; }

  getColum() { return this.column; }

  setColumn(column) { this.column = column; }

  getBelt() { return this.belt; }

  setBelt(belt) { this.belt = belt; }
}
