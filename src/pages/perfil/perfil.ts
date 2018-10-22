import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Vibration } from '@ionic-native/vibration';
//import { PerfilDetailPage } from '../perfil-detail/perfil-detail';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public perfil = new Array<any>();

  constructor(public navCtrl: NavController, public http: HttpClient, private vibration: Vibration) {
    this.getPerfilGithub();
    this.vibration.vibrate(3000);
  }

  getPerfilGithub(){
    let url = "https://api.github.com/users/andreazierik"
    let data: Observable<any> = this.http.get(url);
    data.subscribe( result => {
      this.perfil = result;
    });
  }

}