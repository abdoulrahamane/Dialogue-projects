import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuthModule }from 'angularfire2/auth';
import{AngularFireModule}from 'angularfire2';
import{ AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AdMobPro } from '@ionic-native/admob-pro';
import{LongPressModule}from 'ionic-long-press';
import{AngularFirestore}from'angularfire2/firestore'

import { SettingProvider } from '../providers/setting/setting';
//plugin
import { Network } from '@ionic-native/network';
import { Sim } from '@ionic-native/sim';
import { Device } from '@ionic-native/device';
import { Push } from '@ionic-native/push';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
//import angular
import { HttpClient} from '@angular/common/http'
import { Http } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
//component
import{PopoverComponent} from '../components/popover/popover';
import{Popover2Component} from '../components/popover2/popover2';
import{OrangemoneypopComponent} from '../components/orangemoneypop/orangemoneypop';
import{OrangeinternetComponent} from '../components/orangeinternet/orangeinternet';
//pages
import { TabsPage } from '../pages/tabs/tabs';
import { AirtelPage } from '../pages/airtel/airtel';
import { MoovPage } from '../pages/moov/moov';
import { NigerPage } from '../pages/niger/niger';
import { OrangePage } from '../pages/orange/orange';
import { AproposPage } from '../pages/apropos/apropos';
import { HelpPage } from '../pages/help/help';
import { NetworkinfoPage } from '../pages/networkinfo/networkinfo';


import{DetailsPage}from'../pages/details/details';
import{AccueilPage}from'../pages/accueil/accueil';
import { Deeplinks } from '@ionic-native/deeplinks';
import { ParametrePage } from '../pages/parametre/parametre';
import { PrestationsPage } from '../pages/prestations/prestations';
import { QualitePage } from '../pages/qualite/qualite';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverComponent,
    Popover2Component,
    OrangemoneypopComponent,
    OrangeinternetComponent,
    TabsPage,
    AirtelPage,
    MoovPage,
    OrangePage,
    NigerPage,
    NetworkinfoPage,
    AccueilPage,
    DetailsPage,
   // UrgencePage
   ParametrePage,
   PrestationsPage,
   QualitePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LongPressModule,
   AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAYjg6x_TmclYMmS3mdnNLs-rliG4XYwzA",
        authDomain: "dialogue-ussd-b4717.firebaseapp.com",
        databaseURL: "https://dialogue-ussd-b4717.firebaseio.com",
        projectId: "dialogue-ussd-b4717",
        storageBucket: "dialogue-ussd-b4717.appspot.com",
        messagingSenderId: "440043690862"
       }),
       AngularFireDatabaseModule,
       AngularFireAuthModule,
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverComponent,
    Popover2Component,
    OrangemoneypopComponent,
    OrangeinternetComponent,
    TabsPage,
    AirtelPage,
    MoovPage,
    OrangePage,
    NigerPage,
    NetworkinfoPage,
    AccueilPage,
    DetailsPage,
    ParametrePage,
    PrestationsPage,
  //  UrgencePage
  QualitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    SocialSharing,
    AdMobPro,
    Sim,
    Device,
    Network,
    Push,
    File,
    FileTransfer,
    FileTransferObject,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingProvider,
    Http,
   HttpClientModule,
   Deeplinks,
  
  ]
})
export class AppModule {
  
}
