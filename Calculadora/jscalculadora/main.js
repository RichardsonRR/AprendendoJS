function somar(){
    var resultado = document.getElementById('resultado');
   

    var pNumero = document.getElementById('pNumero1');
    var sNumero = document.getElementById('pNumero2');
             pNumero = Number(pNumero.value)
             sNumero = Number(sNumero.value)
    var resposta = pNumero + sNumero;  
    resultado.innerHTML = `A soma de ${pNumero} e ${sNumero} é igual a: <strong>${resposta}</strong> `  
    resultado.style.backgroundColor = "Green"

}
function diminuir(){
    var resultado2 = document.getElementById('resultado2');
   

    var nD1 = document.getElementById('nD1');
    var nD2 = document.getElementById('nD2');
              nD1 = Number(nD1.value)
              nD2 = Number(nD2.value)
    var resposta = nD1 - nD2;  
    resultado2.innerHTML = `A subtraçao de ${nD1} e ${nD2} é igual a: <strong>${resposta}</strong> `  
    resultado2.style.backgroundColor = "Green"
}
function multiplicar(){ 

    var resultado2 = document.getElementById('resultado3');
   

    var nD1 = document.getElementById('nM1');
    var nD2 = document.getElementById('nM2');
              nD1 = Number(nD1.value)
              nD2 = Number(nD2.value)
    var resposta = nD1 * nD2;  
    resultado2.innerHTML = `A multplicaçao de ${nD1} e ${nD2} é igual a: <strong>${resposta}</strong> `  
    resultado2.style.backgroundColor = "Green"
} 
function dividir(){ 

var resultado2 = document.getElementById('resultado4');


var nD1 = document.getElementById('n1');
var nD2 = document.getElementById('n2');
  nD1 = Number(nD1.value)
  nD2 = Number(nD2.value)
var resposta = nD1 / nD2;  
resultado2.innerHTML = `A divisao de ${nD1} e ${nD2} é igual a: <strong>${resposta}</strong> `  
resultado2.style.backgroundColor = "Green"


} 
function limpar(){ 
    
  resultado.innerHTML= "Resultado..." 
  resultado.style.backgroundColor = "" 
  resultado.style.color = "darkblue"
  pNumero1.value= ""
  pNumero2.value= ""

}
function limpar2(){ 
  resultado2.innerHTML= "Resultado..." 
  resultado2.style.backgroundColor = "" 
  resultado2.style.color = "darkblue"
  nD1.value= ""
  nD2.value= ""

}
function limpar3(){ 
  resultado3.innerHTML= "Resultado..." 
  resultado3.style.backgroundColor = "" 
  resultado3.style.color = "darkblue"
  nM1.value= ""
  nM2.value= ""

}
function limpar4(){ 
  resultado4.innerHTML= "Resultado..." 
  resultado4.style.backgroundColor = "" 
  resultado4.style.color = "darkblue"
 n1.value= ""
 n2.value= ""

}
