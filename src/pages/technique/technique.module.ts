import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechniquePage } from './technique';

@NgModule({
  declarations: [
    TechniquePage,
  ],
  imports: [
    IonicPageModule.forChild(TechniquePage),
  ],
})
export class TechniquePageModule {}
