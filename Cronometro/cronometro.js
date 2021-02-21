let campoHoras, horas, minutos,segundos; 
compohoras = document.getElementById('msg');
horas = 0;
minutos = 0;
segundos= 0; 
let contador;
let salvador;
 

function start(){
    contador = setInterval(() => cronometro(),1000)
    let botaoStart = document.getElementById('botaoStart');
    botaoStart.style.display = 'none'; 
    
   
    
 
}
function pause(){
    clearInterval(contador)
    botaoStart.style.display= 'block'; 


}
function reset(){
    clearInterval(contador)
    horas= 0; minutos= 0; segundos= 0; 
    msg.innerHTML = `${horas}0:${minutos}0:${segundos}0`
    botaoStart.style.display= 'block'; 
    

     
}



function cronometro(){
segundos ++; 
if(segundos == 60){
    segundos = 0;
    minutos++; 


    if(minutos == 60){
        minutos= 0; 
        horas++; 

    }
} 

let formatoDeHoras = (horas<10 ? '0'+ horas: horas )+ ':'+(minutos<10 ? '0'+minutos: minutos)+':'+(segundos<10? '0'+segundos: segundos)
msg.innerHTML = formatoDeHoras; 

}