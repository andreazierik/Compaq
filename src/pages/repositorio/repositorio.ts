import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-repositorio',
  templateUrl: 'repositorio.html'
})
export class RepositorioPage {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'}

  constructor(public navCtrl: NavController) {

  }

}
