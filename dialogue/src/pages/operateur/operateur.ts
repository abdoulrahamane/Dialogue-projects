import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController  } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { PopoverComponent } from '../../components/popover/popover';

/**
 * Generated class for the OperateurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-operateur',
  templateUrl: 'operateur.html',
})
export class OperateurPage {
  phoneNumber:any;
  phoneNumber1:any;
  phoneNumber2:any;
  tout:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OperateurPage');
  }
  launchDialer(n:string){
    this.callNumber.callNumber(n, true)
    .then(() => console.log('Launched dialer!'))
    .catch(() => console.log('Error launching dialer'));
}
launchDialers(n:string){
  this.callNumber.callNumber(n, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
}
async CallNumber():Promise<any>{
  try{
    await this.callNumber.callNumber(String(this.phoneNumber),true);
    await this.callNumber.callNumber(String(this.phoneNumber1),true);
    await this.callNumber.callNumber(String(this.phoneNumber2),true);
   }
 catch(e){
    console.error(e);
  }
}
/* callIT(){
    this.tout = "*436*2*1*"+this.phoneNumber+"*"+this.phoneNumber1 +"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));

  }*/
 /* 
  callIT(){
    this.tout = "#145#1*"+this.phoneNumber+"*"+this.phoneNumber1 +"*"+this.phoneNumber2 +"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
}*/
// orange money transfert
  callIT(){
    this.tout = "#145#3*"+this.phoneNumber+"*"+this.phoneNumber1 +"*"+this.phoneNumber2 +"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
/*#144#21#montant#code#
#225#42# prendre de la connexion */
}
  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present();
  }
}
