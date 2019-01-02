import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { OrangeinternetComponent } from '../../components/orangeinternet/orangeinternet';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-internetorange',
  templateUrl: 'internetorange.html',
})
export class InternetorangePage {

  constructor(public navCtrl: NavController,private toastCtrl: ToastController,public navParams: NavParams,public popoverCtrl: PopoverController,private callNumber: CallNumber) {
  }
/* 
#225#42122#;#225#42222#;#225#1252#;#225#41122#;#225#41222#
#225#43122#;#225#43222#;#225#43322#
*/
  presenttoast1(){
    let toast=this.toastCtrl.create({
     message:'#225#42122#',
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
     message:'#225#42222#',
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
     message:'#225#131#',
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
     message:'#225#41122#',
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
     message:'#225#41222#',
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
     message:'#225#43122#',
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
     message:'#225#43222#',
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
     message:'#225#43322#',
     duration:2000,
     position:'top'
    });
    toast.onDidDismiss(() => {
     console.log('long press');
    });
    toast.present();
  }
  OrangeinternetComponent() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent);
    popover.present();
  }
  callIT(phoneUSSD:string){
    this.callNumber.callNumber(phoneUSSD, true)
    .then((data)=>{
      console.log("Appel effecter"+data)
    }).catch(() => console.log('Error launching dialer'));

  }
  button1intor() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button1intor'});
    popover.present();
  }
  button2intor() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button2intor'});
    popover.present();
  }
  button3intor() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button3intor'});
    popover.present();
  }
  button4intor() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button4intor'});
    popover.present();
  }
  button5intor() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button5intor'});
    popover.present();
  }
  button6intor() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button6intor'});
    popover.present();
  }
  button7intor() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button7intor'});
    popover.present();
  }
  button8intor() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button8intor'});
    popover.present();
  }

}
