import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemorizeBeltPage } from './memorize-belt';
import { TechniqueProvider } from '../../providers/technique/technique';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-memorize',
  templateUrl: 'memorize-list.html',
})
export class MemorizeListPage {

  belts: Observable<any[]>;
  reverse = false;  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _technique: TechniqueProvider) {

    this.belts = this._technique.getBelts('order');
  }

  openPage(belt) {
    this.navCtrl.push(MemorizeBeltPage, { belt: belt });
  }

  public reverseOrder() {
    this.reverse = !this.reverse;
  }

}
