import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
/* Firebase */
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class TechniqueProvider {
  tasksRef: AngularFireList<any>; // Firebase
  techniques;

  constructor(public http: HttpClient, data: DataProvider, public database: AngularFireDatabase) {
    this.techniques = data.getData();
  }

  getList(list: string) {
    this.tasksRef = this.database.list(list);
    return this.tasksRef.snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  }

  getTechniques() {
    return this.getList('technique/jiu-jitsu tradicional/Federación Nacional');
  }

  // getTechniques() {
  //   const arrayTechniques = [];
    
  //   Object.keys(this.techniques).forEach(key => {
  //     this.techniques[key].forEach(element => {
  //       arrayTechniques.push(element);
  //     });
  //   });

  //   return arrayTechniques;
  // }

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
