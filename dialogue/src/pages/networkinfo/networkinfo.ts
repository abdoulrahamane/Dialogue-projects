import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Sim } from '@ionic-native/sim';
import { Device } from '@ionic-native/device';
@IonicPage()
@Component({
  selector: 'page-networkinfo',
  templateUrl: 'networkinfo.html',
})
export class NetworkinfoPage {
  public simInfo: any;
  public cards: any;
  constructor(public navCtrl: NavController,platform: Platform,  private sim: Sim,public navParams: NavParams,private device: Device) { 
    platform.ready().then(() => {
     this. getuid()
     this.getSimData();
    });
  }
 async getSimData() {
    try {
      let simPermission = await this.sim.requestReadPermission();
      if (simPermission == "OK") {
        let simData = await this.sim.getSimInfo();
        this.simInfo = simData;
        this.cards = simData.cards;
        console.log(simData);
      }
    } catch (error) {
      console.log(error);
    }
    }
    items;
public getuid()
{
var items=[{key:'Identificateur',value: this.device.uuid},
{key:'nom',value: this.device.model},
{key:'le fabricant de l\'appareil',value: this.device.manufacturer},
{key:'version',value: this.device.version},
{key:'platform',value: this.device.platform},
{key:'le numero de serie',value: this.device.serial},
{key:' simulateur virtuel',value: this.device.isVirtual}
];
this.items=items;
}
}
  