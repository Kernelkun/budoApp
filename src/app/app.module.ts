import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SwipeCardsModule } from 'ng2-swipe-cards';
// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { BeltsPage } from '../pages/belts/belts';
import { TechniquePage } from '../pages/technique/technique';
import { FilterPage } from '../pages/filter/filter';
import { MemorizeListPage } from '../pages/memorize/memorize-list'
import { MemorizeBeltPage } from '../pages/memorize/memorize-belt'
// Miscelanea
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Providers
import { FilterDataProvider } from '../providers/filter-data/filter-data';
import { TechniqueProvider } from '../providers/technique/technique';
import { DataProvider } from '../providers/data/data';
import { ImageColorProvider } from '../providers/image-color/image-color';
// Pipes
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { BeltPipe } from '../pipes/belt/belt';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url';
import { ReversePipe } from '../pipes/reverse/reverse';

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
    BeltsPage,
    TechniquePage,
    SearchPipe,
    FilterPage,
    SortPipe,
    BeltPipe,
    SafeUrlPipe,
    ReversePipe,
    MemorizeListPage,
    MemorizeBeltPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig, 'budoapp'),
    AngularFireDatabaseModule,
    SwipeCardsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    FilterPage,
    BeltsPage,
    TechniquePage,
    MemorizeListPage,
    MemorizeBeltPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TechniqueProvider,
    DataProvider,
    FilterDataProvider,
    ImageColorProvider
  ]
})
export class AppModule {}
