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

 /*DESAFIO- ITEM 8
let baralhoUsuario=[]
let baralhoComputador=[]
let segundoBaralhoUsuario=[]
let segundoBaralhoComputador=[]
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
         alert("Primeira rodada:" +"\n"+
         "Usuário - cartas: "+baralhoUsuario+ " - Pontuação: "+pontuacaoUsuario +"\n"+
         "Computador- cartas: "+baralhoComputador+ " - Pontuação: "+pontuacaoComputador) 
        
      //DESAFIO ITEM 8 -------------------------
         if (pontuacaoUsuario===22){   
            pontuacaoUsuario=0         
            for (let i=0; i<2; i++) {               
               const cartaUsuario=comprarCarta()               
               pontuacaoUsuario+=cartaUsuario.valor
               segundoBaralhoUsuario.push(cartaUsuario.texto)               
               }
               alert("Usuário tirou duas cartas 'A': comprando nova carta..")
               console.log( "Usuário - novas cartas: "+segundoBaralhoUsuario+ " - Pontuação: "+pontuacaoUsuario)
               console.log("Computador- cartas: "+baralhoComputador+ " - Pontuação: "+pontuacaoComputador) 

        }if (pontuacaoComputador===22){
            pontuacaoComputador=0
            for (let i=0; i<2; i++){              
               const cartaComputador=comprarCarta()                            
               pontuacaoComputador+=cartaComputador.valor
               segundoBaralhoComputador.push(cartaComputador.texto)               
               }
               alert("Computador tirou duas cartas 'A':comprando nova carta..")
               console.log("Computador- novas cartas: "+segundoBaralhoComputador+ " - Pontuação: "+pontuacaoComputador )
               console.log( "Usuário - cartas: "+baralhoUsuario+ " - Pontuação: "+pontuacaoUsuario)
        }        
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

  */

  //DESAFIO - item 9 e 10 (não funcionam)
 /*
 let baralhoUsuario=[]
 let baralhoComputador=[]
 let segundoBaralhoUsuario=[]
 let segundoBaralhoComputador=[]
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

         /*while (pontuacaoUsuario>=21){
            if (confirm("Primeira rodada:" +"\n"+
            "Suas cartas são "+baralhoUsuario+ " - Pontuação: "+pontuacaoUsuario +"\n"+
            "A carta revelada do computador é  "+baralhoComputador[0] +"\n"+
            "Deseja comprar mais uma carta?")){
            const cartaUsuario=comprarCarta()
            pontuacaoUsuario+=cartaUsuario.valor
            baralhoUsuario.push(cartaUsuario.texto) 
            }else{                 
                 
         }
                     
         
       }if (pontuacaoUsuario===22){   
             pontuacaoUsuario=0         
             for (let i=0; i<2; i++) {               
                const cartaUsuario=comprarCarta()               
                pontuacaoUsuario+=cartaUsuario.valor
                segundoBaralhoUsuario.push(cartaUsuario.texto)               
                }
                alert("Usuário tirou duas cartas 'A': comprando nova carta..")
                console.log( "Usuário - novas cartas: "+segundoBaralhoUsuario+ " - Pontuação: "+pontuacaoUsuario)
                console.log("Computador- cartas: "+baralhoComputador+ " - Pontuação: "+pontuacaoComputador) 
 
         }if (pontuacaoComputador===22){
             pontuacaoComputador=0
             for (let i=0; i<2; i++){              
                const cartaComputador=comprarCarta()                            
                pontuacaoComputador+=cartaComputador.valor
                segundoBaralhoComputador.push(cartaComputador.texto)               
                }
                alert("Computador tirou duas cartas 'A':comprando nova carta..")
                console.log("Computador- novas cartas: "+segundoBaralhoComputador+ " - Pontuação: "+pontuacaoComputador )
                console.log( "Usuário - cartas: "+baralhoUsuario+ " - Pontuação: "+pontuacaoUsuario)
             
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
*/