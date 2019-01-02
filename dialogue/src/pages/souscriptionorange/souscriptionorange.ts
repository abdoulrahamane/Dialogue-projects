import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController, ToastController } from 'ionic-angular';
import { Popover2Component } from '../../components/popover2/popover2';
import{OrangeinternetComponent}from'../../components/orangeinternet/orangeinternet';
import { CallNumber } from '@ionic-native/call-number';

/**
 * Generated class for the SouscriptionorangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-souscriptionorange',
  templateUrl: 'souscriptionorange.html',
})
export class SouscriptionorangePage {

  constructor(public navCtrl: NavController,  private toastCtrl: ToastController,public navParams: NavParams,public popoverCtrl: PopoverController,private callNumber: CallNumber) {
  }

  /* #225#2121#;#123#;#225#2123#;#225#21231#;#225#222# ;#225#223#;
#225#232121#;#225#232131#;#225#232221#;#225#232231#*/
presenttoast1(){
  let toast=this.toastCtrl.create({
   message:'#225#2121#',
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
   message:'#123#',
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
   message:'#225#2123#',
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
   message:'#225#21231#',
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
   message:'#225#222#',
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
   message:'#225#223#',
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
   message:'#225#232121#',
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
   message:'#225#232131#',
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
   message:'#225#232221#',
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
   message:'#225#232231#',
   duration:2000,
   position:'top'
  });
  toast.onDidDismiss(() => {
   console.log('long press');
  });
  toast.present();
}
  presentPopover2() {
    let popover = this.popoverCtrl.create(Popover2Component);
    popover.present();
  }
  callIT(phoneUSSD:string){
    this.callNumber.callNumber(phoneUSSD, true)
    .then((data)=>{
      console.log("Appel effecter"+data)
    }).catch(() => console.log('Error launching dialer'));

  }
  button1ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button1ssc'});
    popover.present();
  }
  button2ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button2ssc'});
    popover.present();
  }
  button3ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button3ssc'});
    popover.present();
  }
  button4ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button4ssc'});
    popover.present();
  }
  button5ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button5ssc'});
    popover.present();
  }
  button6ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button6ssc'});
    popover.present();
  }
  button7ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button7ssc'});
    popover.present();
  }
  button8ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button8ssc'});
    popover.present();
  }
  button9ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button9ssc'});
    popover.present();
  }
  button10ssc() {
    let popover = this.popoverCtrl.create(OrangeinternetComponent, {data: 'button10ssc'});
    popover.present();
  }

  

}
