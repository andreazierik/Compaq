import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [
    ApiProvider
  ]
})
export class PerfilPage {

  public perfil = new Array<any>();

  constructor(public navCtrl: NavController, public http: HttpClient, private API: ApiProvider) {
    this.getPerfilGithub();
  }

  getPerfilGithub(){
    let url = "https://api.github.com/users/andreazierik"
    let data: Observable<any> = this.http.get(url);
    data.subscribe( result => {
      this.perfil = result;
      console.log(result);
    });
  }

  /*ionViewDidLoad(){
    this.API.getPerfil().subscribe(
      data => {

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.perfil = objeto_retorno.avatar_url;

        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
      
    )
    
  }*/

}