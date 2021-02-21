// constructor functions ==> como o nome ja diz constroi objetos e pode retorna uma funcao dentro 

function Celular (marca, cor, preco, beleza){
this.marcaCelular = marca; 
this.cor = cor ;
this.precoCelular = preco;
this.beleza = beleza; 

this.apresentar = function aprensentar(){

   console.log(`${this.marcaCelular} é a melhor marca de celular ${this.cor} com o valor de ${this.precoCelular} reais,
    e uma ${this.beleza} aparecencia`)
}

}

const celular = new Celular('philcon','azul',1500,'linda');

celular.apresentar(); 
    
 