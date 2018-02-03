import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { ListPage } from '../list/list';
import { BeltsPage } from '../belts/belts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = BeltsPage;
  tab4Root = SearchPage;

  constructor() {

  }
}
