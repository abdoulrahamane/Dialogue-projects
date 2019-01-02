import { Component,ViewChild, Renderer, ElementRef,ChangeDetectorRef } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { PopoverController, ViewController,IonicPage, NavController, NavParams,Platform } from 'ionic-angular';


@Component({
  selector: 'orangemoneypop',
  templateUrl: 'orangemoneypop.html'
})
export class OrangemoneypopComponent {
  pageName :any;
  btn1: any;
  btn2: any;
  btn3: any;
  btn4: any;
  phoneNumber:any;
  phoneNumber1:any;
  phoneNumber2:any;
  phoneNumber3:any;
  tout:any;
  constructor(public popoverCtrl: PopoverController,public navParams: NavParams, public viewCtrl:ViewController,private callNumber: CallNumber,private platform:Platform,private changeDetectorRef:ChangeDetectorRef,public render: Renderer) {
    this.pageName = this.navParams.get('data');
    this.btn1 = this.navParams.get('btn1');
    this.btn2 = this.navParams.get('btn2');
    this.btn3 = this.navParams.get('btn3');
    this.btn4 = this.navParams.get('btn4');
    console.log(this.pageName);
   }
   callIT(phoneUSSD:string){
    this.callNumber.callNumber(phoneUSSD, true)
    .then((data)=>{
      console.log("Appel effecter"+data)
    }).catch(() => console.log('Error launching dialer'));

  }
  
   callITc(){
    this.tout = "*433*3*"+this.btn1+"*"+this.btn2 +"*"+this.btn3 +"*"+this.btn4 +"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
}
//Mkoudi transfert
callITM(){
  this.tout = "#145#*1*"+this.phoneNumber+"*"+this.phoneNumber1 +"*"+this.phoneNumber2 +"#";
  this.callNumber.callNumber(this.tout, true)
  .then((data)=>{
    console.log("Appel effecter"+data+" "+this.tout)
  }).catch(() => console.log('Error launching dialer'));
}
  
   close() {
     this.viewCtrl.dismiss();
   }
}
