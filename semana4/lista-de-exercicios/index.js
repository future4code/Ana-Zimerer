////EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO////

//1) Esta declarado uma função de conversão de moeda que recebe como parametro de fora uma variavel (valorEmDolar). É armazenado em uma variavel 
//um valor number, digitado pelo usuario, que informara a cotação do dolar. O retorno dessa função é o valorEmDolar multiplicado pela cotação, que
//representa um valor em reais. Em outra variavel, chamada meu dinheiro, é chamada a função de conversão e atribuído a ela o valor de 100. Abaixo é 
//impresso no console o valor da variavel, que é o return da função, com o valor 100 atribuido e calculado na equação.

//2)Nesse caso vemos uma função que calcula o valor dos investimentos, multiplicando pela taxa de cada tipo. São valores colhidos de fora da função. 
//A partir de uma variavel que recolhe o tipo de investimento, é aberto um switch para cada tipo de investimento, multiplicando o valor inserido pela 
//respectiva taxa. Caso o tipo de investimento não seja correspondente ao casos, é mostrado uma mensagem de alerta. Considerando os valores atribuidos 
//a função, no caso da variavel novoMontante, o valor retornado seria de 165 reais. No caso da variavel segundoMontante, seria mostrado uma mensagem 
//de alerta, informando que o tipo de investimento informado não é valido

//3)O programa mostra uma array de numeros e cria outras duas arrays. A primeira, array1, terá valores pares atribuidos e a segunda, array2, tera valores
//impares atribuidos. Esses valores são inseridos a partir de um for, que irá percorrer todo o array principal e usando um if, irá verificar se os valores 
//são pares ou impares, ou seja, se os dividindo por dois, eles possuem mod 0 ou não, respectivamente. Ao fim da execução, serão mostrados os tamanhos do 
//array original de numeros, do array de numeros pares e do array de numeros impares.
 
//4)Através de um for, são analisados todos os valores de um array chamado numeros. Para o elemento 0, é visto se ele é menor do que infinito e se sim, 
//é adicionado esse valor a variavel numero1. Depois disso, caso o elemento seja maior que zero, seu valor é atribuido a variavel numero2. Nessa primeira 
//volta, teriamos os valores de numero1=25 e numero2=25. Porém, a cada volta, os valores das condições são atualizados. Ele sempre vai comparar um elemento,
//com seu sucessor no index do array, até acabarem os elementos.