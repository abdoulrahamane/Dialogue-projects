import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Popover2Component } from '../../components/popover2/popover2';

/**
 * Generated class for the MoovtransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moovtransfer',
  templateUrl: 'moovtransfer.html',
})
export class MoovtransferPage {
  phoneNumber:any;
  phoneNumber1:any;
  phoneNumber2:any;
  tout:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,private callNumber: CallNumber,) {
  }
 

  callIT(){
    this.tout = "*102*"+this.phoneNumber+"*"+this.phoneNumber1 +"*"+this.phoneNumber2+"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
}
button1transcom() {
  let popover = this.popoverCtrl.create(Popover2Component, {data: 'button1transcom', btn1: this.phoneNumber, btn2: this.phoneNumber1,btn3: this.phoneNumber2});
  popover.present();
}
}
