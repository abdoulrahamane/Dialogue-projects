import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AirtelPage } from '../airtel/airtel';
import { MoovPage } from '../moov/moov';
import { NigerPage } from '../niger/niger';
import { OrangePage } from '../orange/orange';
import { AccueilPage } from '../accueil/accueil';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  airtelPage = AirtelPage;
  moovPage = MoovPage;
  nigerPage=NigerPage;
  orangePage=OrangePage;
  acueilPage = AccueilPage;
}
