import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { Popover2Component } from '../../components/popover2/popover2';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
 
  post:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController,
    private sharingVar: SocialSharing ,
    ) {
    this.post=navParams.get('post');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad detailsPage');
  }
 /* regularShare(){
    let popover=this.popoverCtrl.create({
     message:' *137#',
     duration:2000,
     position:'top'
    });
    popover.onDidDismiss(() => {
     console.log('long press');
    });
    popover.present();
  }
   regularShare() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'sharewettwitter'});
    popover.present();
  }*/
 
  regularShare() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'sharewettwitter', btn4: this.post});
    popover.present();
  }
 
}
