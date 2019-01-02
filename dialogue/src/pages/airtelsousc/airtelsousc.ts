import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';
import { OrangemoneypopComponent } from '../../components/orangemoneypop/orangemoneypop';

@IonicPage()
@Component({
  selector: 'page-airtelsousc',
  templateUrl: 'airtelsousc.html',
})
export class AirtelsouscPage {
  constructor(public navCtrl: NavController,private toastCtrl: ToastController,public navParams: NavParams,private callNumber: CallNumber,public popoverCtrl: PopoverController) {
  }
  button1ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button1ssc'});
    popover.present();
  }
  button2ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button2ssc'});
    popover.present();
  }
  button3ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button3ssc'});
    popover.present();
  }
  button4ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button4ssc'});
    popover.present();
  }
  button5ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button5ssc'});
    popover.present();
  }
  button6ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button6ssc'});
    popover.present();
  }
  button7ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button7ssc'});
    popover.present();
  }
  button8ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button8ssc'});
    popover.present();
  }
  button20ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button20ssc'});
    popover.present();
  }
  button21ssc() {
    let popover = this.popoverCtrl.create(OrangemoneypopComponent, {data: 'button21ssc'});
    popover.present();
  }/* 
  *141*1*1*1#; *141*1*1*2# ;*141*1*1*3#; *141*1*1*4#;*141*1*2*1#;*141*1*2*2#;*141*2*2*1#
  *141*2*3*1#;*141*4*1*1*1#;*141*4*1*1*2#
  */
  presenttoast1(){
    let toast=this.toastCtrl.create({
     message:'*141*1*1*1#',
     duration:2000,
     position:'top'
    });
    toast.onDidDismiss(() => {
     console.log('long press');
    });
    toast.present();
  }
  presenttoast20(){
    let toast=this.toastCtrl.create({
     message:'*141*1*1*2#',
     duration:2000,
     position:'top'
    });
    toast.onDidDismiss(() => {
     console.log('long press');
    });
    toast.present();
  }
  presenttoast21(){
    let toast=this.toastCtrl.create({
     message:'*141*1*1*3#',
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
     message:'*141*1*1*4#',
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
     message:'*141*1*2*1#',
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
     message:'*141*1*2*2#',
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
     message:'*141*2*2*1#',
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
     message:'*141*2*3*1#',
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
     message:'*141*4*1*1*1#',
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
     message:'*141*4*1*1*2#',
     duration:2000,
     position:'top'
    });
    toast.onDidDismiss(() => {
     console.log('long press');
    });
    toast.present();
  }

  
}
