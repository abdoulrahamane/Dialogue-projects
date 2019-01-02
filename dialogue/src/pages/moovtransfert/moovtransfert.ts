import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the MoovtransfertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moovtransfert',
  templateUrl: 'moovtransfert.html',
})
export class MoovtransfertPage {

 
  constructor(public navCtrl: NavController,private toastCtrl: ToastController, public navParams: NavParams,private callNumber: CallNumber) {
  }
  /* 

  
   *155#;*157*2#;*157*3#;*157*5#
  *157*6#;*157*7#;*157*4*2#;*157*4*4#
  *157*4*5#;*157*4*1#;*157*4*3#
  */
  presenttoast1(){
    let toast=this.toastCtrl.create({
     message:'*155#',
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
     message:'*157*2#',
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
     message:'*157*3#',
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
     message:'*157*5#',
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
     message:'*157*6#',
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
     message:'*157*7#',
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
     message:'*157*4*2#',
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
     message:'*157*4*4#',
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
     message:'*157*4*5#',
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
     message:'*157*4*1#',
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
     message:'*157*4*3#',
     duration:2000,
     position:'top'
    });
    toast.onDidDismiss(() => {
     console.log('long press');
    });
    toast.present();
  }
  callIT(phoneUSSD:string){
    this.callNumber.callNumber(phoneUSSD, true)
    .then((data)=>{
      console.log("Appel effecter"+data)
    }).catch(() => console.log('Error launching dialer'));

  }
  

}
