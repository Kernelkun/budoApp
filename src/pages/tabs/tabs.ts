import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { ListPage } from '../list/list';
import { BeltsPage } from '../belts/belts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = BeltsPage;
  tab2Root = SearchPage;
  tab3Root = ListPage;

  constructor() {

  }
}
