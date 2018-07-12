import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/* Firebase */
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class TechniqueProvider {
  tasksRef: AngularFireList<any>; // Firebase
  techniques;

  constructor(public http: HttpClient, public database: AngularFireDatabase) {
    this.techniques = this.getTechniques();
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

    this.techniques.subscribe(data => {
      data.forEach(key => {
        if (key.belt === color) {
          arrayTechniques.push(key);
        }
      });
    });

    return arrayTechniques;
  }

}
