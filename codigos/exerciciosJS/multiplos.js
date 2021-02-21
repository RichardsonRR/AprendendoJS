// altere o numero para testes e pra chamar a function 
let numero = 40
somar(numero);

//algoritimo pega os numeros divisiveis de 3 e 5 de um intervalo do numero digitado pelo user

function somar(numero){
    let m3 = 0
    let m5 = 0
    for(i=0;i<=numero;i++){
        if(i % 3=== 0){
            m3+=i 
        }
         if(i % 5 === 0){
            m5 +=i 
        }

    }
console.log(`o valor da soma de multiplos de 3: ${m3} de 5: ${m5} a soma dos dois ${m3 + m5}`)


}
