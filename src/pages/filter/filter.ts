import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { FilterDataProvider } from '../../providers/filter-data/filter-data';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  // items = ["1","2","3","4","5","6","7","8","9","10"];
  belt: string;
  reverse: boolean;
  // column;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public _filterData: FilterDataProvider) {
    // We get the actual filter data.
    this.reverse = _filterData.getReverse();
    this.belt = _filterData.getBelt();
  }

  ionViewDidLoad() {
    // console.log(this.navParams.get('message'));
  }

  public closeModal() {
    // console.log(this.order);
    var reverse = this.reverse;
    // var order = (typeof this.order == 'string' ? parseInt(this.order, 10) : this.order);
    var data = { reverse: reverse, belt: this.belt};
    this.viewCtrl.dismiss(data);
  }
}
