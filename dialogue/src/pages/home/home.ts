import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AdMobPro } from '@ionic-native/admob-pro';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
  constructor(public navCtrl: NavController, platform: Platform, private admob: AdMobPro,private sharingVar:SocialSharing) {}
  /*  platform.ready().then(() => {
        var admobid = {
            banner: 'ca-app-pub-7150421200265580/2507172988',
            interstitial: 'ca-app-pub-7150421200265580/5798894191'
        };
        this.admob.createBanner({
            adId: admobid.banner,
            isTesting: true,
            autoShow: true,
            position: this.admob.AD_POSITION.TOP_CENTER
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
}

  banner(){
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id:'ca-app-pub-8931247459784332/1767102695',
      isTesting: true,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     this.admobFree.banner.prepare()
  .then(() => {
    // banner Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
  })
  .catch(e => console.log(e));
  }*/
  
  
 
  AirtelPage(){
    this.navCtrl.push('AirtelPage');
  }
  MoovPage(){
    this.navCtrl.push('MoovPage');
  }
  NigerPage(){
    this.navCtrl.push('NigerPage');
  }
  OrangePage(){
    this.navCtrl.push('OrangePage');
  }


  whatsappShare(){
    this.sharingVar.shareViaWhatsApp(  "https://api.whatsapp.com/send?phone=22780040170" )
      .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

  
  twitterShare(){
    this.sharingVar.shareViaTwitter("Message via Twitter",null /*Image*/,"https://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }
  
  facebookShare(){
    this.sharingVar.shareViaFacebook("Message via Twitter",null /*Image*/,"https://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }
  
 
  regularShare(){
    // share(message, subject, file, url)
    this.sharingVar.share("https://play.google.com/store/apps/details?id=com.abdoulrahamanealiseydou.dialogueussd"); 
  }

}