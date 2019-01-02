import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { OrangeinternetComponent } from '../../components/orangeinternet/orangeinternet';

/**
 * Generated class for the OrangemoneytransfertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orangemoneytransfert',
  templateUrl: 'orangemoneytransfert.html',
})
export class OrangemoneytransfertPage {

  phoneNumber:any;
  phoneNumber1:any;
  phoneNumber2:any;
  tout:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber,public popoverCtrl: PopoverController) {
  }

  callIT(){
    this.tout = "#145#*1*"+this.phoneNumber+"*"+this.phoneNumber1 +"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
}
button1transom() {
  let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button1transom', btn1: this.phoneNumber, btn2: this.phoneNumber1});
  popover.present();
}
}
