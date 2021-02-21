function CriarEnd (rua, cidade, bairro, cep) {
    this.rua = rua; 
    this.cidade = cidade;
    this.bairro = bairro; 
    this.cep = cep; 
    
}

const endereco1  = new CriarEnd('A','B','c','D');
const endereco2  = new CriarEnd('e','B','c','D');

function valoresSaoIguais(endereco1,endereco2) {
    if(endereco1.rua == endereco2.rua){
        console.log(`os valores do compo rua sao iguais`)
    }else{ console.log(`os valores do campo rua sao diferentes`)}

    if(endereco1.cidade == endereco2.cidade){
        console.log(`os valores do campo cidade sao iguais`)

    }else{ console.log(`os valores do campo cidade sao diferentes`)}



    if(endereco1.bairro == endereco2.bairro){
        console.log(`os valores do campo bairro sao iguais`)

    }else{ console.log(`os valores do campo bairro sao diferentes`)}


    if(endereco1.cep == endereco2.cep){
        console.log(`os valores do campo cep sao iguais`)

    }else{ console.log(`os valores do campo cep sao diferentes`)}
    

    
}
valoresSaoIguais(endereco1,endereco2)