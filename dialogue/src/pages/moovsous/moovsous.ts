import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { Popover2Component } from '../../components/popover2/popover2';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-moovsous',
  templateUrl: 'moovsous.html',
})
export class MoovsousPage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,public navParams: NavParams,public popoverCtrl: PopoverController,private callNumber: CallNumber) {
  }
  /* 
  *515*1*1*4*1#;*515*1*1*3*1#;*515*1*1*2*1#;*515*1*1*1*1#
*515*2*1*1*1#;*515*2*1*2*1#;*515*3*1*1*1#;*515*3*1*2*1#
*515*3*1*3*1#;*515*3*1*4*1#
  */
 presenttoast1(){
  let toast=this.toastCtrl.create({
   message:'*515*1*1*4*1#',
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
   message:'*515*1*1*3*1#',
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
   message:'*515*1*1*2*1#',
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
   message:'*515*1*1*1*1#',
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
   message:'*515*2*1*1*1#',
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
   message:'*515*2*1*2*1#',
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
   message:'*515*3*1*1*1#',
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
   message:'*515*3*1*2*1#',
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
   message:'*515*3*1*3*1#',
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
   message:'*515*3*1*4*1#',
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
  moovsous1() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous1'});
    popover.present();
  }
  moovsous2() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous2'});
    popover.present();
  }
  moovsous3() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous3'});
    popover.present();
  }
  moovsous4() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous4'});
    popover.present();
  }
  moovsous5() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous5'});
    popover.present();
  }
  moovsous6() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous6'});
    popover.present();
  }
  moovsous7() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous7'});
    popover.present();
  }
  moovsous8() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous8'});
    popover.present();
  }
  moovsous9() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous9'});
    popover.present();
  }
  moovsous10() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovsous10'});
    popover.present();
  }
}
