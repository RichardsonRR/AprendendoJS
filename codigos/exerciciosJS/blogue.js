function Postagem(titulo,mensagem,autor,vizualizacoes,comentarios,estaoAoVivo) {
    this.titulo = titulo;
    this.mensagem = mensagem; 
    this.autor = autor;
    this.visualizacoes = vizualizacoes; 
    this.comentarios = comentarios ;
    this.estaoAoVivo = estaoAoVivo;

    
}

let novaPostagem = new Postagem('Primeiro poster','essa é primeira mensagem do blog teste ',
'Richardson Rodrigues','150',[{autor: 'a', mensagem :'b'},
{autor: 'b', mensagem: 'c'}],'sim');



console.log(novaPostagem) 