import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController, ToastController } from 'ionic-angular';
import { OrangemoneypopComponent } from '../../components/orangemoneypop/orangemoneypop';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the AirtelmoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-airtelmoney',
  templateUrl: 'airtelmoney.html',
})
export class AirtelmoneyPage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,public navParams: NavParams,public popoverCtrl: PopoverController,private callNumber: CallNumber) {
  }
 OrangemoneypopComponent() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent);
    popover.present();
  }
  callIT(phoneUSSD:string){
    this.callNumber.callNumber(phoneUSSD, true)
    .then((data)=>{
      console.log("Appel effecter"+data)
    }).catch(() => console.log('Error launching dialer'));

  }/*
  *436*6*1#,*436*5*2*3#;*436*5*3*3#;*436*5*1#;436*5*2#;*436*5*3#;*436*4*2#;*436*4*3#
    *436*4*4#;*436*4*5#;*436*4*7#;*436*4*8#
*/
 presenttoast1(){
  let toast=this.toastCtrl.create({
   message:'*436*6*1#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast2(){
  let toast=this.toastCtrl.create({
   message:'*436*5*2*3#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast3(){
  let toast=this.toastCtrl.create({
   message:'*436*5*3*3#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast4(){
  let toast=this.toastCtrl.create({
   message:'*436*5*1#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast5(){
  let toast=this.toastCtrl.create({
   message:'*436*5*2#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast6(){
  let toast=this.toastCtrl.create({
   message:'*436*5*3#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast7(){
  let toast=this.toastCtrl.create({
   message:'*436*4*2#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast8(){
  let toast=this.toastCtrl.create({
   message:'*436*4*3#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast9(){
  let toast=this.toastCtrl.create({
   message:'*436*4*4#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast10(){
  let toast=this.toastCtrl.create({
   message:'*436*4*5#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast11(){
  let toast=this.toastCtrl.create({
   message:'*436*4*7#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast12(){
  let toast=this.toastCtrl.create({
   message:'*436*4*8#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast13(){
  let toast=this.toastCtrl.create({
   message:'#144#21#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
presenttoast14(){
  let toast=this.toastCtrl.create({
   message:'*436*6*1#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
}
