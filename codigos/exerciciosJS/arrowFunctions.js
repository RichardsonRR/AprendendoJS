//arrow functions é uma forma mais facil de declarar function 

const nomes = [
    {sobremone: 'rodrigues', primeiroNome: 'Richardson'},
    {sobremone: 'felipe', primeiroNome: 'Luis'},
    {sobremone: 'Perira', primeiroNome: 'Matheus'},
]

/*const valorEmPrimeiroNome = nomes.find(function(nome) {
    return nome.primeiroNome === 'Richardson'
    
})
console.log(valorEmPrimeiroNome)*/


// podemos recriar uma function que esta dentro da outra com arrow functions

const valorEmPrimeiroNome = nomes.find(nome => nome.primeiroNome) // podendo ate mesmo tirar o () do 
console.log(valorEmPrimeiroNome)                                    // argumento nome e as {} do parametro 


