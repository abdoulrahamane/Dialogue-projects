import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { PopoverComponent } from '../../components/popover/popover';

/**
 * Generated class for the NigertransfertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nigertransfert',
  templateUrl: 'nigertransfert.html',
})
export class NigertransfertPage {

  phoneNumber:any;
  phoneNumber1:any;
  phoneNumber2:any;
  tout:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber,public popoverCtrl: PopoverController) {
  }
  callIT(){
    this.tout = "*134*"+this.phoneNumber+"*"+this.phoneNumber1 +"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
}
nigertrans() {
  let popover = this.popoverCtrl.create(PopoverComponent, {data: 'nigertrans', btn1: this.phoneNumber, btn2: this.phoneNumber1});
  popover.present();
}
}
