
// uso de class 

class Poligno{
  constructor(num1){
    this.num1 = num1
    
  }
  //no segundo argumento da classs eu atribuir uma funçao contadora 
  // e com o propriedade .reduce que pemite e usar uma funcao pra trabalhar os dados do array so //mei o primeiro com o segundo
  perimeter(){
    const reducer = (a,b)=> a+b
    return this.num1.reduce(reducer)
  }

}
const quadrado = new Poligno([10,15,12,20])
console.log(quadrado.perimeter())