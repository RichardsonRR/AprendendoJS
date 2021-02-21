
let entrada = fizzbuzz(5)

function fizzbuzz(entrada){
    if(typeof entrada == 'number'){
        if(entrada % 3 === 0 || entrada % 5 === 0 ){
            
            if (entrada % 3 === 0 && entrada % 5 === 0){
                console.log('FizzBuzz')
            }else{
                if(entrada % 3 === 0){
                    console.log('Fizz')
                }else {
                    console.log('Buzz')
                }

            }

        
        }else{
            console.log(entrada)
        }

    }else{
        console.log(`${entrada} nao e um numero, tente novamente`)
    }
    
    
}