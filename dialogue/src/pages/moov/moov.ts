import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, MenuController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-moov',
  templateUrl: 'moov.html',
})
export class MoovPage {

  constructor(public navCtrl: NavController,private menuCtrl: MenuController,platform: Platform,public navParams: NavParams,private callNumber: CallNumber) {
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

  callIT(phoneUSSD:string){
    this.callNumber.callNumber(phoneUSSD, true)
    .then((data)=>{
      console.log("Appel effecter"+data)
    }).catch(() => console.log('Error launching dialer'));

  }
  onToggleMenu() {
    this.menuCtrl.open();
  } 

}
