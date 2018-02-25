import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TechniqueProvider } from '../../providers/technique/technique';
import { ListPage } from '../list/list';

/**
 * Generated class for the BeltsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-belts',
  templateUrl: 'belts.html',
})
export class BeltsPage {
  belts: any[];
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _technique: TechniqueProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.belts = _technique.getBelts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeltsPage');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

}
