import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the QualitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qualite',
  templateUrl: 'qualite.html',
})
export class QualitePage {
  tout:any;
  constructor(public navCtrl: NavController, 
    private callNumber: CallNumber,
    public navParams: NavParams) {
      this.callIT();
  }
  callIT(){
    this.tout = "*#*#4636#*#*";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
} 

}
