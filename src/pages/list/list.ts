import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TechniquePage } from '../technique/technique';
import { TechniqueProvider } from '../../providers/technique/technique';
import { FilterDataProvider } from '../../providers/filter-data/filter-data';
import { ModalController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  // techniques: Array<Object>;
  myInput;

  belt;
  column;
  reverse = false;

  /* Firebase */
  techniques: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _technique: TechniqueProvider,
    public modalCtrl: ModalController,
    public _filterData: FilterDataProvider) {
    
    // We get the actual filter data.
    this.reverse = _filterData.getReverse();
    this.column = _filterData.getColum();

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.techniques = _technique.getTechniques('name');
  }

  itemTapped(event, itemClicked) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TechniquePage, {
      item: itemClicked
    });
  }

  onInput(event) {
    console.log(event);
  }
  
  onCancel(event) {
    console.log(event);
  }

  public openModal() {
    var modalPage = this.modalCtrl.create(FilterPage);
    modalPage.onDidDismiss(data => {
      
      this.reverse = data.reverse;
      this._filterData.setReverse(this.reverse);

      this.belt = data.belt;
      this._filterData.setBelt(this.belt);
    });
    modalPage.present();
  }
}
