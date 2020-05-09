////EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO////

// 1) Esta declarado uma função de conversão de moeda que recebe como parametro de fora uma variavel (valorEmDolar). É armazenado em uma variavel 
// um valor number, digitado pelo usuario, que informara a cotação do dolar. O retorno dessa função é o valorEmDolar multiplicado pela cotação, que
// representa um valor em reais. Em outra variavel, chamada meu dinheiro, é chamada a função de conversão e atribuído a ela o valor de 100. Abaixo é 
// impresso no console o valor da variavel, que é o return da função, com o valor 100 atribuido e calculado na equação.

// 2)Nesse caso vemos uma função que calcula o valor dos investimentos, multiplicando pela taxa de cada tipo. São valores colhidos de fora da função. 
// A partir de uma variavel que recolhe o tipo de investimento, é aberto um switch para cada tipo de investimento, multiplicando o valor inserido pela 
// respectiva taxa. Caso o tipo de investimento não seja correspondente ao casos, é mostrado uma mensagem de alerta. Considerando os valores atribuidos 
// a função, no caso da variavel novoMontante, o valor retornado seria de 165 reais. No caso da variavel segundoMontante, seria mostrado uma mensagem 
// de alerta, informando que o tipo de investimento informado não é valido

// 3)O programa mostra uma array de numeros e cria outras duas arrays. A primeira, array1, terá valores pares atribuidos e a segunda, array2, tera valores
// impares atribuidos. Esses valores são inseridos a partir de um for, que irá percorrer todo o array principal e usando um if, irá verificar se os valores 
// são pares ou impares, ou seja, se os dividindo por dois, eles possuem mod 0 ou não, respectivamente. Ao fim da execução, serão mostrados os tamanhos do 
// array original de numeros, do array de numeros pares e do array de numeros impares.
 
// 4)Através de um for, são analisados todos os valores de um array chamado numeros. Para o elemento 0, é visto se ele é menor do que infinito e se sim, 
// é adicionado esse valor a variavel numero1. Depois disso, caso o elemento seja maior que zero, seu valor é atribuido a variavel numero2. Nessa primeira 
// volta, teriamos os valores de numero1=25 e numero2=25. Porém, a cada volta, os valores das condições são atualizados. Ele sempre vai comparar um elemento,
// com seu sucessor no index do array, até acabarem os elementos.


////EXERCICIOS DE LÓGICA DE PROGRAMAÇÃO////

// 1) Podemos usar for of, for ou while. 
//
//const arrayDeNumeros=[20,30,4,50,6,92,33,7,15,62]
//let arrayForOf=[]
//let arrayFor=[]
//let arrayWhile=[]
//
////for of para criar um novo array mostrando apenas os divisiveir por 5
//for (let numero of arrayDeNumeros){    
//    if (numero%5===0){
//        arrayForOf.push(numero)
//    }
//    
//}
//console.log("Usando for of: " +arrayForOf)
//
////for para copiar a array de original em outra array
//for (i=0; i<=arrayDeNumeros.length; i++){
//    arrayFor.push(arrayDeNumeros[i])
//}
//console.log("Usando for: " +arrayFor)


// 2) 
//a-false
//b-false
//c-true
//d-true
//e-true


// 3) Não funciona, a condição do while está errada, a impressão está errada ao multiplicar por dois e ele não possui incremento
//const quantidadeDeNumerosPares =10
//let i = 0
//array=[]
//while(array.length<quantidadeDeNumerosPares){   
//    if (i%2===0){        
//        array.push(i)
//    }
//    i++    
// }
//console.log(array)


//4) 
//a=prompt("Digite o valor do lado A:")
//a= Number(a)
//b=prompt("Digite o valor do lado B:")
//b= Number(b)
//c=prompt("Digite o valor do lado C:")
//c= Number(c)
//
//const tipoDeTriangulo= (a,b,c) =>{
//    if ((a === b) && (b === c) && (c===a)){
//        return ("Equilatero")
//    }else if((a===b || a ===c) && (b===c || b===a)) {
//            return ("Isosceles")    
//    }else{
//         return ("Escaleno")  
//    }
//}
//
//let resposta = tipoDeTriangulo(a,b,c)
//alert("Seu triangulo é: "+ resposta)


//5)
//
//primeiroNumero=prompt("Digite o primeiro valor")
//primeiroNumero= Number(primeiroNumero)
//segundoNumero=prompt("Digite o segundo valor:")
//segundoNumero= Number(segundoNumero)
//
/////////função pra mostrar numero maior
//const calculaMaior =(primeiroNumero,segundoNumero)=>{
//    if (primeiroNumero>segundoNumero){
//        return (primeiroNumero)
//    }else if(segundoNumero>primeiroNumero){
//        return (segundoNumero)
//    }else{
//        return ("nenhum")
//    }
//}
//
//let numeroMaior=calculaMaior(primeiroNumero,segundoNumero)
//console.log("O número maior é "+numeroMaior)
//
/////////função pra mostrar se numero é divisivel
//const calculaSeSaoDivisiveis =(primeiroNumero,segundoNumero)=>{
//    if (primeiroNumero%segundoNumero===0){
//        return (primeiroNumero+ " é divisivel por " +segundoNumero)
//    }else if (segundoNumero%primeiroNumero===0){
//        return (segundoNumero+ " é divisivel por " +primeiroNumero)
//    }else{
//        return ("Não são divisíveis")
//    }
//}
//
//let numeroDivisivel=calculaSeSaoDivisiveis(primeiroNumero,segundoNumero)
//console.log(numeroDivisivel)
//
/////////// função pra mostrar a diferença entre os numeros 
//const diferenciaNumeros=(primeiroNumero,segundoNumero)=>{
//    return (primeiroNumero-segundoNumero)
//}
//
//let diferencaDeNumeros=diferenciaNumeros(primeiroNumero,segundoNumero)
//console.log("Diferença entre numeros: "+diferencaDeNumeros)

////EXERCICIOS DE FUNÇÕES////

//1) 
////Dá erro quando o  esse exercicio. 
//const array =[54,22,45,2,4,8]
//const retornaSegundoMaior = (array)=>{
//    let segundoMaior=0
//    let numeroMaior=0
//    for(let elemento of array){
//        if (elemento > numeroMaior){          
//            numeroMaior=elemento            
//        }else if (elemento > segundoMaior){
//             segundoMaior=elemento          
//        }     
//    }
//    return console.log("O segundo maior elemento é: "+segundoMaior)
//}
//retornaSegundoMaiorESegundoMenor(array)

//2)
//const mostraMensagem=()=>{
//    alert("Hello Labenu")
//}
//mostraMensagem()



//////////EXERCICIOS DE OBJETOS////////////////
//1) Um array guarda diversas informações, assim como um objeto. Mas um objeto possui uma caracterização do valor guardado
// através de cada variavel que podemos criar dentro dele. Um array também guarda vários valores, mas ele armazena todos 
// do mesmo tipo

//2)
//lado1=prompt("Digite o valor do lado 1")
//lado1=Number(lado1)
//lado2=prompt("Digite o valor do lado 2")
//lado2=Number(lado2)
//
//const criaRetangulo = (lado1, lado2) =>{
//    let perimetro= 2* (lado1+lado2)
//    let area= lado2*lado1
//    return ("Largura: "+lado1+ " Altura: "+lado2+ " Perimetro: "+perimetro+ " Área: "+area)
//}
//console.log(criaRetangulo(lado1,lado2))

//3)
const filme = {
    titulo: 'Harry Potter e o prisioneiro de Azkaban',
    ano: '2003',
    diretor: 'Alfonso Cuarón',
    elenco: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint']
}

console.log("Venha assistir ao filme "+filme.titulo+ ", de "+filme.ano + ", dirigido por "+filme.diretor +" e estrelado por " + filme.elenco[0]+ ", "+ filme.elenco[1] + " e "+ filme.elenco[2])
//Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2,