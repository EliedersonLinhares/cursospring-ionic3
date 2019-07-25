import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public categoriaService: CategoriaService)//injetando Categoria service no construtor
    {
  }

  ionViewDidLoad() {
      this.categoriaService.findAll()//realizando uma chamada assincrona
      .subscribe(response => { //usando uma função anonima, 'arrow function'
        console.log(response);//quando for sucesso
      },
      error => {
        console.log(error);//quando der erro
      }

    );
      //inscrevendo para quando a resposta chegar executar a função F
      //um callback que escreverá na tela passando uma função
      //como argumento de outra função
    
  }

    //o console.log é usado em javascript para testar o dado retornado
    //nas requisições

}
