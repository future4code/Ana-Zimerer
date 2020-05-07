let informacoes={
    titulo: "",
    texto: "",
    hora: "",
    data: "",
};   
    
    informacoes.titulo=document.getElementById('titulo-do-post')
    informacoes.texto=document.getElementById('texto-do-post')
    informacoes.hora=document.getElementById('hora-do-post')
    informacoes.data=document.getElementById('data-do-post')
function guardaInformacoesDoPost(){  
    const informacoesDoPost = {
        ...informacoes
        }
    let arrayDeObjetos=[informacoesDoPost.titulo, informacoesDoPost.texto,informacoesDoPost.hora,informacoesDoPost.data]
    //informacoesDoPost.titulo.innerHTML=""
    //informacoesDoPost.texto.innerHTML=""
    //informacoesDoPost.data.innerHTML=""
    //informacoesDoPost.hora.innerHTML=""
    console.log(arrayDeObjetos)
}  
    
    
    
   