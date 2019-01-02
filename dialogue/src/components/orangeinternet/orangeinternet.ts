import { Component,ViewChild, Renderer, ElementRef,ChangeDetectorRef } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { PopoverController, ViewController,IonicPage, NavController, NavParams,Platform } from 'ionic-angular';


@Component({
  selector: 'orangeinternet',
  templateUrl: 'orangeinternet.html'
})
export class OrangeinternetComponent {
  pageName :any;
  btn1: any;
  btn2: any;
  phoneNumber:any;
  phoneNumber1:any;
  tout:any;
  constructor(public popoverCtrl: PopoverController,public navParams: NavParams, public viewCtrl:ViewController,private callNumber: CallNumber,private platform:Platform,private changeDetectorRef:ChangeDetectorRef,public render: Renderer) {
 this.pageName = this.navParams.get('data');
 this.btn1 = this.navParams.get('btn1');
 this.btn2 = this.navParams.get('btn2');
 console.log(this.pageName);
}
close() {
  this.viewCtrl.dismiss();
}
callIT(phoneUSSD:string){
  this.callNumber.callNumber(phoneUSSD, true)
  .then((data)=>{
    console.log("Appel effecter"+data)
  }).catch(() => console.log('Error launching dialer'));
}
callIT2(){
  this.tout = "#134#1*"+this.btn1+"*"+this.btn2 +"#";
  this.callNumber.callNumber(this.tout, true)
  .then((data)=>{
    console.log("Appel effecter"+data+" "+this.tout)
  }).catch(() => console.log('Error launching dialer'));
}
callIT3(){
  this.tout = "#145#*1*"+this.phoneNumber+"*"+this.phoneNumber1 +"#";
  this.callNumber.callNumber(this.tout, true)
  .then((data)=>{
    console.log("Appel effecter"+data+" "+this.tout)
  }).catch(() => console.log('Error launching dialer'));
}
}
