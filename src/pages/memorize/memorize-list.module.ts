import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemorizeListPage } from './memorize-list';

@NgModule({
  declarations: [
    MemorizeListPage,
  ],
  imports: [
    IonicPageModule.forChild(MemorizeListPage),
  ],
})
export class MemorizePageModule {}
