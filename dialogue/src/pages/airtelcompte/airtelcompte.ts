import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the AirtelcomptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-airtelcompte',
  templateUrl: 'airtelcompte.html',
})
export class AirtelcomptePage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,public navParams: NavParams,private callNumber: CallNumber) {
  }

  callIT(phoneUSSD:string){
    this.callNumber.callNumber(phoneUSSD, true)
    .then((data)=>{
      console.log("Appel effecter"+data)
    }).catch(() => console.log('Error launching dialer'));

  }/*
  *137#

*436*6*1#

121

*137*1004#

*412*1*1#

*412*1*2#

*412*1*3#
*/
  presenttoast1(){
    let toast=this.toastCtrl.create({
     message:' *137#',
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
     message:'*436*6*1#',
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
     message:'121',
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
     message:'*137*1004#',
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
     message:'*412*1*1#',
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
     message:'*412*1*2#',
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
     message:'*412*1*3#',
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
     message:'*137*104#',
     duration:2000,
     position:'top'
    });
    toast.onDidDismiss(() => {
     console.log('long press');
    });
    toast.present();
  }
 }
