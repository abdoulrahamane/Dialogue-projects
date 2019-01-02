import { Component, ViewChild, } from '@angular/core';
import {
  IonicPage, NavController,
  NavParams, Slides, Content, Platform,
  MenuController, Loading,
  LoadingController,
  ToastController,
  AlertController
} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { DetailsPage } from '../details/details';
import { Network } from '@ionic-native/network';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Popover2Component } from '../../components/popover2/popover2';


@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  pushMessage: string = 'push message will be displayed here';

  public posts: Array<any> = [];
  loading: Loading;
  image: string;
  title: string;
  desc: string;
  companies: any = 0;
  showSpinner = true;
  data: string;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private menuCtrl: MenuController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private network: Network,
    public alertCtrl: AlertController,
    platform: Platform,
    private push: Push,
    private sharingVar: SocialSharing

  ) {


    if (navParams.data.message) {
      this.pushMessage = navParams.data.message;
    }
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('Aucune connexion internet.');
      let toast = this.toastCtrl.create({
        /* subTitle: 'Aucune connexion internet.Assurez-vous que le wifi/les donnees mobiles sont activés et réessayez',
         buttons: ['OK'],*/
        message: 'Aucune connexion internet',
        duration: 5000,
        position: 'top'
      });
      toast.present();
    });
    /*
presenttoast1(){
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
    */

    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('De nouveau connecté à internet');
      let toast = this.toastCtrl.create({
        message: 'De nouveau connecté à internet',
        duration: 2000,
        position: 'button'
      });
      toast.onDidDismiss(() => {
        console.log('long press');
      });
      toast.present();      
    });
       
  }
   
      onToggleMenu() {
        this.menuCtrl.open();
      }
        public thesecondpage(event ,post ){
          this.navCtrl.push(DetailsPage,{
          post:post
          });
          }
         
  ionViewDidLoad() {
   /* this.loading = this.loadingCtrl.create({
       content: 'SVP patient...',
       spinner:'dots's
       
   
  this.loading.present();*/
  
const postRef: firebase.database.Reference = firebase.database().ref('/post/');
         postRef.on('value', postSnapshot=>{
    //load page  
     // this.loading.dismiss();
      
  this.posts = [] ; 
      postSnapshot.forEach(postSnap => {
      //this.cours = courSnap.val();
        this.posts.push();
        this.showSpinner=false;
          console.log(this.showSpinner)
   /*var temp =this;
        etTimeout(function(){ 
             temp.postSnap.loadAll().then(result => {
                 temp.posts =  result;
                 
             000);*/
           this.posts.push(postSnap.val());     
        return false;
        });
      console.log(postSnapshot.val());
    }); 
  }
  doRefresh(refresher) {
   console.log('Begin async operation', refresher);
   setTimeout(() => {
     console.log('Async operation has ended');
     refresher.complete();
   }, 2000);
 }  
  /*
  pushSetup(){
    const options: PushOptions = {
      android: {
          senderID: '440043690862'
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {}
   };
  
   const pushObject: PushObject = this.push.init(options);
  
   pushObject.on('notification').subscribe((notification: any) => {
     if (notification.additionalData.foreground) {
       let youralert = this.alertCtrl.create({
         title: 'New Push notification',
         message: notification.message
       });
       youralert.present();
     }
   });
   
   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
   //pushObject.on('registration').subscribe((registration: any) => {
      //do whatever you want with the registration ID
     // alert(registration);
     // console.log(registration);
      
  // });//
  
   pushObject.on('error').subscribe(error => console.log('Error with Push plugin' , error));
  }*/
    
      
}