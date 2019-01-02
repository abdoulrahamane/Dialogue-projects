import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QualitePage } from './qualite';

@NgModule({
  declarations: [
    QualitePage,
  ],
  imports: [
    IonicPageModule.forChild(QualitePage),
  ],
})
export class QualitePageModule {}
