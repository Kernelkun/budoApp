import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TechniquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-technique',
  templateUrl: 'technique.html',
})
export class TechniquePage {
  technique: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.technique = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechniquePage');
  }

}
