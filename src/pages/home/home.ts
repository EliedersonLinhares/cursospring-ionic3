import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

//@Ionic-Page: informa para a aplicação que essa classe que ela
//é uma pagina, e que ela pode ser referenciada pelo nome
//dela entre '', na forma de string
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
