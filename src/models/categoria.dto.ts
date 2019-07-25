export interface CategoriaDTO{
//O id é definido com string ao invés de long, para dar mais flexibilidade
//e poder trabalhar no mongoDB em que o id é string
    id : String;
    nome : String;
}