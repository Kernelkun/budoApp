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
  belt: string;
  reverse: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public _filterData: FilterDataProvider) {
    // We get the actual filter data.
    this.reverse = _filterData.getReverse();
    this.belt = _filterData.getBelt();
  }

  ionViewDidLoad() {
    // console.log(this.navParams.get('message'));
  }

  public closeModal() {
    var data = { reverse: this.reverse, belt: this.belt};
    this.viewCtrl.dismiss(data);
  }
}
