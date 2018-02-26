import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TechniquePage } from '../technique/technique';
import { TechniqueProvider } from '../../providers/technique/technique';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  techniques: Array<Object>;
  myInput;

  order: number = 1;
  column: string = 'name';

  constructor(public navCtrl: NavController, public navParams: NavParams, public _technique: TechniqueProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    if(this.selectedItem){
      console.log("selected: "+this.selectedItem);
      this.techniques = _technique.getTechniquesByBelt(this.selectedItem);
    } else {
      this.techniques = _technique.getTechniques();
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TechniquePage, {
      item: item
    });
  }

  onInput(event) {
    console.log(event);
  }
  
  onCancel(event) {
    console.log(event);
  }
}
