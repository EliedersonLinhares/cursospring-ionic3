import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

//@Ionic-Page: informa para a aplicação que essa classe que ela
//é uma pagina, e que ela pode ser referenciada pelo nome
//dela entre '', na forma de string
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Objeto injetado, no ionic e no angular quando você precisa injetar uma
  //instancia de um objeto de uma classe, basta voce declarar
  //esse objeto como parametro do seu construtor
  // objeto navCtrl do tipo NavController
  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  //desabilta o menu lateral quando entra na tela de login
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    }
   
  //Abilita o menu latral quando sair da pagina de login  
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
    }

   login(){
     //no typeScript é obrigatorio o uso do this para acessar
     //o objto do construtor
     this.navCtrl.setRoot('CategoriasPage')
   }

}
