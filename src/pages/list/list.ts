import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TechniquePage } from '../technique/technique';
import { TechniqueProvider } from '../../providers/technique/technique';
import { FilterDataProvider } from '../../providers/filter-data/filter-data';
import { ModalController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
/* Firebase */
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

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

  belt;
  order;
  column;

  /* Firebase */
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _technique: TechniqueProvider,
    public modalCtrl: ModalController,
    public _filterData: FilterDataProvider,
    public database: AngularFireDatabase) {
    
    // We get the actual filter data.
    this.order = _filterData.getOrder();
    this.column = _filterData.getColum();

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    if(this.selectedItem){
      console.log("selected: "+this.selectedItem);
      this.techniques = _technique.getTechniquesByBelt(this.selectedItem);
    } else {
      this.techniques = _technique.getTechniques();
    }

    /* Firebase */
    this.tasksRef = this.database.list('belts/jiu-jitsu tradicional/Federación Nacional');
    this.tasks = this.tasksRef.snapshotChanges()
    .map(changes => {
      console.log(changes.map(c => ({ key: c.payload.key, ...c.payload.val() })));
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
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
    // var data = { message: 'hello world' };
    // var modalPage = this.modalCtrl.create(FilterPage, data);
    var modalPage = this.modalCtrl.create(FilterPage);
    modalPage.onDidDismiss(data => {
      // console.log(data);
      
      this.order = parseInt(data.order, 10);
      // console.log(this.order);
      this._filterData.setOrder(this.order);

      this.belt = data.belt;
      this._filterData.setBelt(this.belt);
    });
    modalPage.present();
  }
}
