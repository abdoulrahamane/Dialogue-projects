import { Component,ViewChild, Renderer, ElementRef,ChangeDetectorRef } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { PopoverController, ViewController,IonicPage, NavController, NavParams,Platform } from 'ionic-angular';


/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  pageName :any;
  btn1: any;
  btn2: any;
  phoneNumber:any;
  phoneNumber1:any;
  phoneNumber2:any;
  tout:any;
  constructor(public popoverCtrl: PopoverController,public navParams: NavParams, public viewCtrl:ViewController,private callNumber: CallNumber) {
    this.pageName = this.navParams.get('data');
    this.btn1 = this.navParams.get('btn1');
    this.btn2 = this.navParams.get('btn2');
    console.log(this.pageName);
   }
  close() {
    this.viewCtrl.dismiss();
  } 
  callITc(){
    this.tout = "*134*"+this.btn1+"*"+this.btn2 +"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
}
callIT(phoneUSSD:string){
  this.callNumber.callNumber(phoneUSSD, true)
  .then((data)=>{
    console.log("Appel effecter"+data)
  }).catch(() => console.log('Error launching dialer'));

}
}
