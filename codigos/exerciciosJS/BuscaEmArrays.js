


// buscas em arrays de tipos primitivos

const numeros = [1,2,3,4,5,6,7,8,9,10,3]
console.log(numeros.indexOf(3))  // retorna o indice  no caso 2, so funciona com numeros 
console.log(numeros.lastIndexOf(3)) // retonar o indice da ultima occorencia do numero  no casa 10


const letrar = [ 'a', 'b', 'c', 'd']
console.log(letrar.includes('b')) // retorna true ou false, funciona com strings



// busca em arrays tipos de referencia 
// O find() retorna o valor do primeiro elemento do array, podemos usar uma funçao dentro
// para retorna um valor especico a uma determinada condicao 

const marcas = [
    {id:1 , nome: 'a'},
    {id:1 , nome: 'a'}]
  
const valorDaBusca = marcas.find(function(marca) { // coloco uma function dentro do find
    return marca.nome === 'a'                      // com o bjetivo de me retonar o valor
                                                    // se existir o 'a'
})
console.log(valorDaBusca)
// outro exemplo

const nomes = [
    {sobremone: 'rodrigues', primeiroNome: 'Richardson'},
    {sobremone: 'felipe', primeiroNome: 'Luis'},
    {sobremone: 'Perira', primeiroNome: 'Matheus'},
]

const valorEmPrimeiroNome = nomes.find(function(nome) {
    return nome.primeiroNome === 'Richardson'
    
})
console.log(valorEmPrimeiroNome)