import { Injectable } from '@angular/core';
import{ BehaviorSubject}from'rxjs/Rx';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
@Injectable()
export class SettingProvider {
private theme :BehaviorSubject<string>
  constructor(private ht:HttpClientModule) {
   this.theme=new BehaviorSubject('theme');
  }
setActive(val){
this.theme.next(val);

}
getActivetheme(){
return this.theme.asObservable();
}
}
