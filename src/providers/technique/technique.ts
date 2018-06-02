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

  getList(list: string, orderBy?, reverse?) {
    if(orderBy) {
      this.tasksRef = this.database.list(list, ref => ref.orderByChild( ( typeof(orderBy) == "string" ? orderBy : '' ) ));
    } else {
      this.tasksRef = this.database.list(list);
    }
    return this.tasksRef.snapshotChanges()
      .map(changes => {
        if(reverse){
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() })).reverse();
        } else {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        }
      });
  }

  getTechniques(orderBy = undefined, reverse = undefined) {
    return this.getList('technique/jiu-jitsu tradicional/Federación Nacional', orderBy, reverse);
  }

  getBelts(orderBy = undefined, reverse = undefined) {
    return this.getList('belts/jiu-jitsu tradicional/Federación Nacional', orderBy, reverse);
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
