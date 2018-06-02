import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemorizeBeltPage } from './memorize-belt';

@NgModule({
  declarations: [
    MemorizeBeltPage,
  ],
  imports: [
    IonicPageModule.forChild(MemorizeBeltPage),
  ],
})
export class MemorizePageModule {}
