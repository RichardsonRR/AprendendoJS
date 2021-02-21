var array1 = 'texto qualquer'
var novaletra = 'q'
var contador = 0

let novoArray =  array1.split('')
console.log(novoArray)
for( let letras of novoArray){
  if(letras  === novaletra ){
    contador++
  }
}
