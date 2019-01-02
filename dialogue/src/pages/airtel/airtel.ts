import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides,Platform, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-airtel',
  templateUrl: 'airtel.html',
})
export class AirtelPage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,  private menuCtrl: MenuController,platform: Platform,public navParams: NavParams) {
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
  
  AirtelcomptePage(){
    this.navCtrl.push('AirtelcomptePage');
  }
  onToggleMenu() {
    this.menuCtrl.open();
  } 
  

}
