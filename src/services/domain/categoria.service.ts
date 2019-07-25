import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";
//Para fazer a importação correta do observable é preciso trocar por RX
import { Observable } from "rxjs/Rx";

//Definição de uma classe

@Injectable()//injetavel em outras classes
export class CategoriaService{

    constructor(public http: HttpClient){

    }

    //O angular encapsula o metodo de requisição asssincrona por meio de 
    //um objeto chamado Observable, que possibilita efetuar a requisição
    //e ficar aguardando a resposta
    findAll() : Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
        //A crase em javascript permite colocar variaveis no meio da string
       // sem a nescessidade de concatenar o +

       //Lista com um get tipado retornando uma lista de Categorias
    }

    
}