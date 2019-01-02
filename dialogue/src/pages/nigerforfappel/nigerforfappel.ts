import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { PopoverComponent } from '../../components/popover/popover';

/**
 * Generated class for the NigerforfappelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nigerforfappel',
  templateUrl: 'nigerforfappel.html',
})
export class NigerforfappelPage {
  constructor(public navCtrl: NavController, private toastCtrl: ToastController,public navParams: NavParams,private callNumber: CallNumber,public popoverCtrl: PopoverController) {
  }/* 
  *150*62006*1#
  */
  presenttoast1(){
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
  
  presenttoast2(){
    let toast=this.toastCtrl.create({
     message:'*150#',
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
  button1internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button1internig'});
    popover.present();
  }
  button2internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button2internig'});
    popover.present();
  }
  button3internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button3internig'});
    popover.present();
  }
  button4internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button4internig'});
    popover.present();
  }
  button5internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button5internig'});
    popover.present();
  }
  button6internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button6internig'});
    popover.present();
  }
  button7internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button7internig'});
    popover.present();
  }
  button8internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button8internig'});
    popover.present();
  }
  button9internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button9internig'});
    popover.present();
  }
  button10internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button10internig'});
    popover.present();
  }
  button11internig() {
    let popover = this.popoverCtrl.create(PopoverComponent, {data: 'button11internig'});
    popover.present();
  }
}
