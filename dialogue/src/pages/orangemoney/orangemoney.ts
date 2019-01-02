import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController, ToastController } from 'ionic-angular';
import { OrangemoneypopComponent } from '../../components/orangemoneypop/orangemoneypop';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the OrangemoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orangemoney',
  templateUrl: 'orangemoney.html',
})
export class OrangemoneyPage {
  constructor(public navCtrl: NavController, 
    private toastCtrl: ToastController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,private callNumber: CallNumber) {
  }
  /* 
  #144#21#;#144#31#;#144#331#;#144#332#;#144#333#
  #144#334#;#144#511#;#144#5121#;#144#5122#;#144#63#
  #144#322#;#144#3521#;#144#3522#
  */
  presenttoast1(){
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
  
  presenttoast2(){
    let toast=this.toastCtrl.create({
     message:'#144#31#',
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
     message:'#144#331#',
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
     message:'#144#332#',
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
     message:'#144#333#',
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
     message:'#144#334#',
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
     message:'#144#511#',
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
     message:'#144#5121#',
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
     message:'#144#5122#',
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
     message:'#144#63#',
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
     message:'#144#322#',
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
     message:'#144#3521#',
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
     message:'#144#3522#',
     duration:2000,
     position:'top'
    });
    toast.onDidDismiss(() => {
     console.log('long press');
    });
    toast.present();
  }
  button1() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button1'});
    popover.present();
  }
  button2() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button2'});
    popover.present();
  }
  callIT(phoneUSSD:string){
    this.callNumber.callNumber(phoneUSSD, true)
    .then((data)=>{
      console.log("Appel effecter"+data)
    }).catch(() => console.log('Error launching dialer'));

  }


}
