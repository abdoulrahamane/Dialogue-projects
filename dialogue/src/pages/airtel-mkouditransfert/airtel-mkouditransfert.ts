import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { OrangemoneypopComponent } from '../../components/orangemoneypop/orangemoneypop';

/**
 * Generated class for the AirtelMkouditransfertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-airtel-mkouditransfert',
  templateUrl: 'airtel-mkouditransfert.html',
})
export class AirtelMkouditransfertPage {
  phoneNumber:any;
  phoneNumber1:any;
  phoneNumber2:any;
  tout:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber,public popoverCtrl: PopoverController) {
  }

  callIT(){
    this.tout = "#145#*1*"+this.phoneNumber+"*"+this.phoneNumber1 +"*"+this.phoneNumber2 +"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
}
  
airteltransfertMkou() {
  let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'airteltransfertMkou', btn1: this.phoneNumber, btn2: this.phoneNumber1});
  popover.present();
}}