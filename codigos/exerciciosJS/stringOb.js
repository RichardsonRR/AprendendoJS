const filmes = {
    titulo: 'magico de oz',
    qualidade:  'bom' , 
    personagem: 'homem de lata',
    idade:  130,
    quantidade: 1,
}
exibirStrings(filmes)

// funçao retira valores de class 
function exibirStrings(filmes){
    for (strings in filmes){
        if(typeof filmes[strings] === 'string'){
            console.log(`O indice é: ${strings}, o valor é: ${filmes[strings]}`)
        }
    }
    
}