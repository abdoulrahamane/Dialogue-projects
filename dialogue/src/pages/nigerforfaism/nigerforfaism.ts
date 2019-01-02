import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { PopoverComponent } from '../../components/popover/popover';

/**
 * Generated class for the NigerforfaismPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nigerforfaism',
  templateUrl: 'nigerforfaism.html',
})
export class NigerforfaismPage {
  constructor(public navCtrl: NavController, private toastCtrl: ToastController,public navParams: NavParams,private callNumber: CallNumber,public popoverCtrl: PopoverController) {
  }
/*  *150*62005*1#;*150*62006*1#;*150*62007*1#;*150*62005*1#  */
 
presenttoast1(){
  let toast=this.toastCtrl.create({
   message:'*150*62005*1#',
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
   message:'*150*62006*1#',
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
   message:'*150*62007*1#',
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
   message:'*150*62005*1#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
  button1sscnigt() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button1sscnigt'});
    popover.present();
  }
  button2sscnigt() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button2sscnigt'});
    popover.present();
  }
  button3sscnigt() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button3sscnigt'});
    popover.present();
  }
  button4sscnigt() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button4sscnigt'});
    popover.present();
  }


}
