// resposta de um exercicio do hackhank contador de ocorencias de valores de objetos dentro 
//de matrizes

function getCount (obj){
  var reapet = 0 
for(let i =0;i < obj.length; i++ ){
  if (obj[i].x == obj[i].y){
    reapet++
  }
}
console.log(reapet)
}
getCount([{x: 1, y: 2},{x: 1, y: 1},{x: 2, y: 2}])
// xe y do obj 2 e 3 sao iguais entao o retorno vai ser 2 ocorrencias 
