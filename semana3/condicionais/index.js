/*EXERCÍCIO 1
Resposta: o código acima verifica se um numero é par ou impar. Quando dividimos um numero par por dois, o 
resto de sua divisão é sempre 0. Quando dividimos um numero ímpar por dois, o resto de sua divisão é sempre 
maior que 0. Dessa forma, é utilizado a equação 'numero % 2 === 0', para verificar se o mod da divisão é 
igual ou diferente de zero, constatando se um numero é par ou impar e imprimindo a mensagem 
'Passou no teste' ou 'Não passou no teste', respectivamente.

/*EXERCÍCIO 2 
a. Para que sere o código acima?
R: Para verificar o preço das frutas

b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
R:2.25

c.Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria 
o preço que você pagaria?
R: R$ 24.75

d.Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se 
retirássemos o break que está logo acima do deafult (o break indicado pelo comentário "BREAK PARA O ITEM d.")?
R: Seria 5, pois a condição continuaria até o default que substituiria o preço de R$5,50 pelo de R$5.
*/

/*EXERCÍCIO 3
Resposta: Independente dos números digitados pelo usuário, mensagem alguma seria impressa pois a variável 
'mensagem' está fora do bloco onde foi declarada e onde estão sendo atribuidos valores a ela. Para resolver
esse problema, o console deveria estar dentro do bloco de if 
*/

/*EXERCICIO 4
let primeiroNumero=prompt('Digite o primeiro número')
let segundoNumero=prompt('Digite o segundo número')
primeiroNumero= Number(primeiroNumero)
segundoNumero= Number(segundoNumero)

if (primeiroNumero>segundoNumero){
    console.log('Por ordem decrescente temos os números '+primeiroNumero+ ' e '+segundoNumero)
}else if (primeiroNumero<segundoNumero){
    console.log('Por ordem decrescente temos os números '+segundoNumero+ ' e '+primeiroNumero)
}else{
    console.log('Os dois números digitados são iguais a '+primeiroNumero)
}
*/

/*EXERCÍCIO 5
a. LINK DO DIAGRAMA: https://drive.google.com/file/d/1f111BKD3dPT7MARqG0IlRj6fKj4r4_0k/view?usp=sharing
*/

let  invertebradoOuVertebrado=prompt("Olá! Para descobrir a qual grupo um animal pertence, responda sobre as características do animal:"+ "\n" +"Esse animal possui ossos formando seu esqueleto?" + "\n" +  "(responda com um 'S' para sim e 'N' para não)")
let resposta =""


switch (invertebradoOuVertebrado){
    case "N" :
    alert("O animal pertence ao grupo dos invertebrados. Para mais classificações acesse outro site" + "\n" +  "(responda com um 'S' para sim e 'N' para não)");
    break;
    case "S":
        resposta=prompt("O animal possui pelos?"+ "\n" +  "(responda com um 'S' para sim e 'N' para não)")
        switch (resposta) {
            case "S":
                resposta=prompt("É um animal racional?" + "\n" +  "(responda com um 'S' para sim e 'N' para não)")
                switch(resposta){
                    case "S":
                        alert("O animal pertence ao grupo dos seres humanos" )
                        break;
                    case "N":
                        alert("O animal pertence ao grupo de mamíferos não humanos")
                        break;
                    default:
                        alert('Você digitou incorretamente. Digite em letra maiúscula "S" para sim e "N" para não')
                        break;            
                    }
                break;
            case "N":
                resposta=prompt("Esse animal possui penas?"+ "\n" +  "(responda com um 'S' para sim e 'N' para não)")
                switch (resposta){
                    case "S":
                        alert("O animal pertence ao grupo das aves")
                        break;
                    
                    case "N":
                        resposta=prompt("Esse animal é terrestre?"+ "\n" +  "(responda com um 'S' para sim e 'N' para não)")
                        switch (resposta){
                            case "S":
                                resposta=prompt("Esse animal passa algum período da vida em ambiente aquático?"+ "\n" +  "(responda com um 'S' para sim e 'N' para não)")
                                switch (resposta){
                                    case "S":
                                        alert("O animal pertence ao grupo dos anfíbos")
                                        break;
                                    case "N":
                                        alert("O animal pertence ao grupo dos répteis")
                                        break;
                                
                                    default:
                                    alert('Você digitou incorretamente. Digite em letra maiúscula "S" para sim e "N" para não')
                                    break;  
                                }                                
                                break;

                            case "N":
                            alert("O animal pertence ao grupo dos peixes")
                            break; 
                            default:
                                alert('Você digitou incorretamente. Digite em letra maiúscula "S" para sim e "N" para não')
                                break;                          
                        }
                    break;
                    
                default:
                alert('Você digitou incorretamente. Digite em letra maiúscula "S" para sim e "N" para não')
                 break; 
                }
            break; 
            
            default:
                alert('Você digitou incorretamente. Digite em letra maiúscula "S" para sim e "N" para não')
                break; 
        }
    break;
    default:
        alert('Você digitou incorretamente. Digite em letra maiúscula "S" para sim e "N" para não')
        break;
    
}

