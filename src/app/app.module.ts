import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
// import { SearchPage } from '../pages/search/search';
import { BeltsPage } from '../pages/belts/belts';
import { TechniquePage } from '../pages/technique/technique';
import { FilterPage } from '../pages/filter/filter';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TechniqueProvider } from '../providers/technique/technique';
import { DataProvider } from '../providers/data/data';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { BeltPipe } from '../pipes/belt/belt';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
import { FilterDataProvider } from '../providers/filter-data/filter-data';

/* Firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig = {
  apiKey: "AIzaSyCgFoiud3xz6SNr_XXBi__MhJf9vECTj_Y",
  authDomain: "budoapp-a0573.firebaseapp.com",
  databaseURL: "https://budoapp-a0573.firebaseio.com",
  projectId: "budoapp-a0573",
  storageBucket: "budoapp-a0573.appspot.com",
  messagingSenderId: "394415637197"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    // SearchPage,
    BeltsPage,
    TechniquePage,
    SearchPipe,
    FilterPage,
    SortPipe,
    BeltPipe,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig, 'budoapp'),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    // SearchPage,
    FilterPage,
    BeltsPage,
    TechniquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TechniqueProvider,
    DataProvider,
    FilterDataProvider
  ]
})
export class AppModule {}
