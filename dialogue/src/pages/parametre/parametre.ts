import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SettingProvider } from '../../providers/setting/setting';
import { SocialSharing } from '@ionic-native/social-sharing';
@IonicPage()
@Component({
  selector: 'page-parametre',
  templateUrl: 'parametre.html',
})
export class ParametrePage {
  selectedtheme:String;
  constructor(public navCtrl: NavController, 
    private sharingVar:SocialSharing
    ,public navParams: NavParams,  private setting:SettingProvider,
    platform: Platform,) {
      platform.ready().then(() => {
    
        // notification
      
        //end notifications.
        //theme
        this.setting.getActivetheme().subscribe(val=>this.selectedtheme=val);} );
  }
  
  theme(){
    if(this.selectedtheme=='theme'){
  this.setting.setActive('vert-theme');
    }else{
      this.setting.setActive('theme');
    }
    
  }
  regularShare(){
    // share(message, subject, file, url)
    this.sharingVar.share("https://play.google.com/store/apps/details?id=com.abdoulrahamanealiseydou.dialogueussd"); 
  }
    

}
