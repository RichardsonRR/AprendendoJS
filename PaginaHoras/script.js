function carregar (){
var msg = document.getElementById('msg')
var imagem = document.getElementById('imgHora')
var data = new Date ()
var horas = data.getHours()



if( horas >= 0 && horas < 12){
    msg.innerHTML= `Bom Dia!  Agora sao ${horas} horas`
    imagem.src = 'imgs/pexels-reneereneee-3993720.png'
    document.body.style.background = '#d3be9f'

}else if (horas >= 12 && horas < 18 ){
    msg.innerHTML= `Boa tarde!  Agora sao ${horas} horas`
    imagem.src = 'imgs/Tarde.png'
    document.body.style.background = '#d9e0e3'

}else {
    msg.innerHTML= `Boa noite!  Agora sao ${horas} horas`
    imagem.src = 'imgs/noite.png'
    document.body.style.background = '#09181b'

} 



}