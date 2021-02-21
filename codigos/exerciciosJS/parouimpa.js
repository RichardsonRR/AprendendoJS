parimpar(51) 

// A function recebe um valor e diz se os numeros dentro do valor sao PAR ou IMPAR 
function parimpar(numero){

for(i=0; i < numero; i++){
     if(typeof numero === 'number'){
        if(i % 2 === 0 ){
            console.log(`${i}   É PAR`)
        }else{
            console.log(`${i}   É IMPAR`)
        }


    }else{
        console.log(`${numero} Nao é um numero`)
    }

}

   
}