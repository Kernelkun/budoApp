import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemorizePage } from './memorize';

@NgModule({
  declarations: [
    MemorizePage,
  ],
  imports: [
    IonicPageModule.forChild(MemorizePage),
  ],
})
export class MemorizePageModule {}
