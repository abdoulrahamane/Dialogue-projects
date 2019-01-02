import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DepotPage } from './depot';

@NgModule({
  declarations: [
    DepotPage,
  ],
  imports: [
    IonicPageModule.forChild(DepotPage),
  ],
})
export class DepotPageModule {}
