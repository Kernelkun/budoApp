import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';

/*
  Generated class for the TechniqueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TechniqueProvider {
  techniques;
  // techniques: Array<{ name: string, description: string, kanji: string, icon: string, belt: string, translated: string }>;

  constructor(public http: HttpClient, data: DataProvider) {
    this.techniques = data.getData();
  }

  getTechniques() {
    const arrayTechniques = [];
    
    Object.keys(this.techniques).forEach(key => {
      this.techniques[key].forEach(element => {
        arrayTechniques.push(element);
      });
    });

    return arrayTechniques;
  }

  getBelts() {
    const arrayBelts = [];

    Object.keys(this.techniques).forEach(key => {
      arrayBelts.push(key);
    });

    return arrayBelts;
  }

  getTechniquesByBelt(color: string) {
    const arrayTechniques = [];

    Object.keys(this.techniques).forEach(key => {
      if (key === color) {
        this.techniques[key].forEach(element => {
          arrayTechniques.push(element);
        });
      }
    });

    return arrayTechniques;
  }

}
