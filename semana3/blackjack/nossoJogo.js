/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
 let baralhoUsuario=[]
 let baralhoComputador=[]
 let pontuacaoUsuario=0
 let pontuacaoComputador=0
 const cartaUsuario =""
 const cartaComputador=""

 alert("Bem vindo ao jogo BlackJack")
   if (confirm("Quer iniciar nova rodada?")){ 
     
         for (let i=0; i<2; i++) {  
            const cartaUsuario=comprarCarta()
            const cartaComputador=comprarCarta()            
            pontuacaoUsuario+=cartaUsuario.valor
            pontuacaoComputador+=cartaComputador.valor     
            baralhoUsuario.push(cartaUsuario.texto) 
            baralhoComputador.push(cartaComputador.texto)          
         }
         console.log("Usuário - cartas: "+baralhoUsuario+ " - Pontuação: "+pontuacaoUsuario) 
         console.log("Computador - cartas: "+baralhoComputador+ " - Pontuação: "+pontuacaoComputador)  
         
   }else{
      alert("O jogo acabou")
   }


   if ((pontuacaoUsuario === 21)||(pontuacaoUsuario>pontuacaoComputador && pontuacaoUsuario<21)){
      console.log("O usuário ganhou!")
   }else if (pontuacaoUsuario===pontuacaoComputador){
      console.log("Empate!")
   }
    else {
      console.log("O computador ganhou!")   
   }

   