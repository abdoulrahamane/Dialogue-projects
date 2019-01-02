import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController } from 'ionic-angular';
import { AdMobPro } from '@ionic-native/admob-pro';

@IonicPage()
@Component({
  selector: 'page-niger',
  templateUrl: 'niger.html',
})

export class NigerPage {

  constructor(public navCtrl: NavController,private menuCtrl: MenuController,platform: Platform,private admob: AdMobPro,public navParams: NavParams) {
  /*  platform.ready().then(() => {
      var admobid = {
         interstitial: 'ca-app-pub-7150421200265580/5798894191'
      };
this.admob.createBanner({  
          isTesting: true,
          autoShow: true,
          position: this.admob.AD_POSITION.BOTTOM_CENTER
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
  }*/
  }
  onToggleMenu() {
    this.menuCtrl.open();
  } 
}
