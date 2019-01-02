import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { OrangemoneypopComponent } from '../../components/orangemoneypop/orangemoneypop';

/**
 * Generated class for the AirteltransfertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-airteltransfert',
  templateUrl: 'airteltransfert.html',
})
export class AirteltransfertPage {
  phoneNumber:any;
  phoneNumber1:any;
  phoneNumber2:any;
  phoneNumber3:any;
  tout:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber,public popoverCtrl: PopoverController) {
  }
  callIT(){
    this.tout = "#145*1*"+this.phoneNumber+"*"+this.phoneNumber1 +"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
}
  
airteltransfert() {
  let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'airteltransfert', btn1: this.phoneNumber, btn2: this.phoneNumber1, btn3: this.phoneNumber2, btn4: this.phoneNumber3});
  popover.present();
}
}
