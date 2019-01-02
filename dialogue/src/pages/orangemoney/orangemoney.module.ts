import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrangemoneyPage } from './orangemoney';

@NgModule({
  declarations: [
    OrangemoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(OrangemoneyPage),
  ],
})
export class OrangemoneyPageModule {}
