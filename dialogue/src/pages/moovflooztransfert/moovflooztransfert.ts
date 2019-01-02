import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { Popover2Component } from '../../components/popover2/popover2';

/**
 * Generated class for the MoovflooztransfertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moovflooztransfert',
  templateUrl: 'moovflooztransfert.html',
})
export class MoovflooztransfertPage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,public navParams: NavParams,public popoverCtrl: PopoverController) {
  }/* 
  *888*1*1*1*2*1#
      *888*1*1*1*3*1#
      *888*1*1*2*1*1#
      *888*1*1*2*2*1#
      *888*1*1*3*1*1#;*888*1*1*3*2*1#;*888*1*1*3*3*1#
  */
 presenttoast1(){
  let toast=this.toastCtrl.create({
   message:'*888*1*1*1*2*1#',
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
   message:' *888*1*1*1*3*1#',
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
   message:'*888*1*1*2*1*1#',
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
   message:'*888*1*1*2*2*1#',
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
   message:' *888*1*1*3*1*1#',
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
   message:'*888*1*1*3*2*1#',
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
   message:'*888*1*1*3*3*1#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
  moovint1() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovint1'});
    popover.present();
  }
  moovint2() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovint2'});
    popover.present();
  }
  moovint3() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovint3'});
    popover.present();
  }
  moovint4() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovint4'});
    popover.present();
  }
  moovint5() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovint5'});
    popover.present();
  }
  moovint6() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovint6'});
    popover.present();
  }
  moovint7() {
    let popover = this.popoverCtrl.create(Popover2Component, {data: 'moovint7'});
    popover.present();
  }
  
}
