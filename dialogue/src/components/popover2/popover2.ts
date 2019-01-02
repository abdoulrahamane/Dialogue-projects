import { Component,ViewChild, Renderer, ElementRef,ChangeDetectorRef, Inject } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { PopoverController, ViewController,IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import * as firebase from 'firebase';
import { FirebaseApp } from 'angularfire2';



/**
 * Generated class for the Popover2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover2',
  templateUrl: 'popover2.html'
})
export class Popover2Component {
  
  pageName :any;
  btn1: any;
  btn2: any;
  btn3: any;
  btn4: any;
  tout:any;
  phoneNumber:any;
  phoneNumber1:any;
  phoneNumber2:any;
  post:string;
  productId:string;
  referencia;
  arquivo;

  constructor(public popoverCtrl: PopoverController,public navParams: NavParams,
    private sharingVar: SocialSharing ,private navCtrl:NavController,
    private transfer: FileTransfer, private file: File,
    public viewCtrl:ViewController,private callNumber: CallNumber,
    @Inject(FirebaseApp) fb: any) {
    this.pageName = this.navParams.get('data');
    this.btn1 = this.navParams.get('btn1');
    this.btn2 = this.navParams.get('btn2');
    this.btn3 = this.navParams.get('btn3');
    this.btn4 = this.navParams.get('btn4');
    this.productId = navParams.get('productId');
    console.log(this.pageName);
    this.post=navParams.get('post');
   
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
  callITc(){
    this.tout = "*134*"+this.btn1+"*"+this.btn2 +this.btn3+"#";
    this.callNumber.callNumber(this.tout, true)
    .then((data)=>{
      console.log("Appel effecter"+data+" "+this.tout)
    }).catch(() => console.log('Error launching dialer'));
}


whatsappShare(whatsapp){
  this.sharingVar.shareViaWhatsApp(whatsapp.des,null)
  .then(()=>{
    console.log("Success");
  },
  ()=>{
    console.log("failed")
  })             
}
twitterShare(twitter){
this.sharingVar.shareViaTwitter(twitter.des,null)
.then(()=>{
console.log("Success");
},
()=>{
 console.log("failed")
})
}
}
