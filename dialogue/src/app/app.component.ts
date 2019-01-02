import { Component } from '@angular/core';
import { Platform,ModalController, MenuController, NavController, AlertController, Nav  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { ViewChild } from '@angular/core';
import { TabsPage } from '../pages/tabs/tabs';
import { AproposPage } from '../pages/apropos/apropos';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HelpPage } from '../pages/help/help';
import firebase from 'firebase';
import { AdMobPro } from '@ionic-native/admob-pro';
import { NetworkinfoPage } from '../pages/networkinfo/networkinfo';
import { SettingProvider } from '../providers/setting/setting';
import { AccueilPage } from '../pages/accueil/accueil';
import { ToastController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { Push, PushObject, PushOptions} from '@ionic-native/push';

import { Deeplinks } from '@ionic-native/deeplinks';
import { Popover2Component } from '../components/popover2/popover2';
import { ParametrePage } from '../pages/parametre/parametre';
import { PrestationsPage } from '../pages/prestations/prestations';
import { QualitePage } from '../pages/qualite/qualite';


firebase.initializeApp(
  {
    apiKey: "AIzaSyAYjg6x_TmclYMmS3mdnNLs-rliG4XYwzA",
    authDomain: "dialogue-ussd-b4717.firebaseapp.com",
    databaseURL: "https://dialogue-ussd-b4717.firebaseio.com",
    projectId: "dialogue-ussd-b4717",
    storageBucket: "dialogue-ussd-b4717.appspot.com",
    messagingSenderId: "440043690862"
  }
);
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  accueilPage:any = AccueilPage;
  aproposPage:any = AproposPage;
  helpPage:any=HelpPage;
  parametrePage:any=ParametrePage;
  networkinfoPage:any=NetworkinfoPage;
  prestationsPage:any=PrestationsPage;
  qualitePage:any=QualitePage;
  @ViewChild(Nav) navChild:Nav;
//  urgencePage:any=UrgencePage;
  @ViewChild('content') content: NavController;
selectedtheme:String;
  constructor(platform: Platform,
    private admob: AdMobPro,
    private sharingVar:SocialSharing,
    private statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private setting:SettingProvider,
             toastCtrl: ToastController,
             private push: Push,
             private alertCtrl:AlertController,
             private deeplinks: Deeplinks
              ) {
  platform.ready().then(() => {
    
    // notification
  
    //end notifications.
    //theme
    this.setting.getActivetheme().subscribe(val=>this.selectedtheme=val);
    //  this.afireauth.auth.signInWithEmailAndPassword('ali@aliapp.com', 'hahaha');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
     // splashScreen.hide();
     this.statusBar.overlaysWebView(true);

// set status bar to white
//this.statusBar.backgroundColorByHexString('#Ba04d0');
this.statusBar.isVisible;
//this.pushSetup();
    });
  /*  platform.ready().then(() => {
      var admobid = {
         
          interstitial: 'ca-app-pub-7150421200265580/5798894191'
      };
      this.admob.createBanner({
       
          isTesting: true,
          autoShow: true,
          position: this.admob.AD_POSITION.CENTER
      })

     this.admob.prepareInterstitial({
          adId: admobid.interstitial,
          isTesting: true,
          autoShow: false
      })
  });
}

showInterstitialAd() {
  if (AdMobPro) {
      this.admob.showInterstitial();
  }
  Deeplinks.routeWithNavController(this.navChild, {
        '/about-us': AboutPage,
        '/universal-links-test': AboutPage,
        '/products/:productId': ProductPage
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.warn('Unmatched Route', nomatch);
      });
    })
  */
 this.deeplinks.routeWithNavController(this.navChild, {
  'popover2':Popover2Component,
 '/productions/:productId': Popover2Component
}).subscribe((match) => {
 console.log('Successfully routed', match);
}, (nomatch) => {
 console.log('Unmatched Route', nomatch);
});
}

onNavigate(page: any) {
  this.content.push(page);
  this.menuCtrl.close();
}
regularShare(){
  // share(message, subject, file, url)
  this.sharingVar.share("https://play.google.com/store/apps/details?id=com.abdoulrahamanealiseydou.dialogueussd"); 
}
  
pushSetup(){
  const options: PushOptions = {
    android: {
        senderID: '440043690862'
    },
    ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
    },
    windows: {}
 };

 const pushObject: PushObject = this.push.init(options);

 pushObject.on('notification').subscribe((notification: any) => {
   if (notification.additionalData.foreground) {
     let youralert = this.alertCtrl.create({
       title: 'New Push notification',
       message: notification.message
     });
     youralert.present();
   }
 });
 
 pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
 //pushObject.on('registration').subscribe((registration: any) => {
    //do whatever you want with the registration ID
   // alert(registration);
   // console.log(registration);
    
// });//

 pushObject.on('error').subscribe(error => console.log('Error with Push plugin' , error));
}
}
