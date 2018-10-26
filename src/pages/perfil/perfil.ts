import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PerfilDetailPage } from '../perfil-detail/perfil-detail';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public perfil = new Array<any>();

  constructor(public navCtrl: NavController, 
			  public http: HttpClient, 
			  public loadingCtrl: LoadingController) {
    this.getPerfilGithub();
  }
  
  presentLoadingDefault() {
	  let loading = this.loadingCtrl.create({
		content: 'Carregando'
	  });

	  loading.present();

	  setTimeout(() => {
		loading.dismiss();
	  }, 4000);
	}

  getPerfilGithub(){
    let url = "https://api.github.com/users/andreazierik"
    let data: Observable<any> = this.http.get(url);
    data.subscribe( result => {
	    this.presentLoadingDefault();
      this.perfil = result;
    });
  }

  abrirDetalhes(){
    this.navCtrl.push(PerfilDetailPage);
}

}