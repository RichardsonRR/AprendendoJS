velocidade(75); 


/*  a funcao avalia se o condutor esta na velocidade correta nos seguintes parametros 
Velocidade maxima 70km 
a cada 5km acima do limite perde 1 ponto
caso perca mais de 12 postos a carteira 'e suspensa 
*/


function velocidade(velocidade){
 let velocidadeP =  velocidade - 70
    if(velocidade > 74 ){
    let pontosPerdidos = velocidadeP / 5 
    pontosPerdidos = Math.floor(pontosPerdidos)
        if( pontosPerdidos >= 12 ){
            console.log( `Sua carteira foi suspensa, ${pontosPerdidos} pontos perdidos na carteira`)
        }else { console.log(` voce perdeu ${pontosPerdidos} pontos na carteira `)}


    }else {
        console.log(' voce esta respseitando o limite de velocidade')
    }

}