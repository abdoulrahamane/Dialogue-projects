import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,ToastController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { OrangemoneypopComponent } from '../../components/orangemoneypop/orangemoneypop';


/**
 * Generated class for the AirtelinternetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-airtelinternet',
  templateUrl: 'airtelinternet.html',
})
export class AirtelinternetPage {

  constructor(public navCtrl: NavController,private toastCtrl: ToastController,public navParams: NavParams,private callNumber: CallNumber,public popoverCtrl: PopoverController) {
  }
  callIT(phoneUSSD:string){
    this.callNumber.callNumber(phoneUSSD, true)
    .then((data)=>{
      console.log("Appel effecter"+data)
    }).catch(() => console.log('Error launching dialer'));

  }
  button1intairt() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button1intairt'});
    popover.present();
  }
  button2intairt() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button2intairt'});
    popover.present();
  }
  button3intairt() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button3intairt'});
    popover.present();
  }
  button4intairt() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button4intairt'});
    popover.present();
  }
  button5intairt() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button5intairt'});
    popover.present();
  }
  button6intairt() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button6intairt'});
    popover.present();
  }
  button7intairt() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button7intairt'});
    popover.present();
  }
  button8intairt() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button8intairt'});
    popover.present();
  }
  button9intairt() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button9intairt'});
    popover.present();
  }
  /*
  *612*1*1#
  *612*1*2#
  *612*1*3#
  *612*2*1#
  *612*2*2#
 *612*2*3#

  *612*3*1#
  *612*3*2#
  *612*3*3# */
 
  presenttoast1(){
    let toast=this.toastCtrl.create({
     message:'*612*1*1#',
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
     message:' *612*1*2#',
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
     message:'*612*1*3#',
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
     message:'*612*2*1#',
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
     message:' *612*2*2#',
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
     message:'  *612*2*3#',
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
     message:'*612*3*1#',
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
     message:'*612*3*2#',
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
     message:'*612*3*3#',
     duration:2000,
     position:'top'
    });
    toast.onDidDismiss(() => {
     console.log('long press');
    });
    toast.present();
  }






}
