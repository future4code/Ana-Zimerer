let array
console.log('I. undefined ', array)

array = null
console.log('II. Null ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. 11', array.length)

let i = 0
console.log('IV. 3 e 4', array[i], " e ", array[i+1])

//na posição 1, colocar o num 19
array[i+1] = 19
//valor recebe a posição 6
const valor = array[i+6]
console.log('V. 19 e 9', array[i+1], " e ", valor)

i+=1 //i=1
//na posição 1 será recebido o valor da posição 0
array[i] = array[i-1]
console.log('VI. 3', array[i])

//i vai receber o valor do comprimento(11) da array -1 = 10
i = array.length - 1
//a posição 10 vai receber o valor da posição 7 (10)
array[i] = array[i-3]
// a posição 10 mod posição 1 = 13%4
const resultadoC = array[i]%array[1]
console.log('VII. 1 ', resultadoC)

/* a. O que é array e como se declara em JS?
    R: Uma array é uma matriz e dessa forma ela possui a característica de armazenar um grande número de dados em linhas e colunas 
    Uma array pode ser declarada como let array.

b. Qual o index inicial de um array?
    R: Um array se inicia na posição 0

c. Como se determinar o tamanho do array?
    R: O tamanho é determinado pela quantidade de informação que são declaradas entre colchetes por um array.

d. Indique todas as mensagens impressas no console.  

    a. false  
    b. true && false = false  
    c. true && true = true  
    d. false && false && false = false 
    e. Boolean  

    I. undefined  
    II. Null  
    III. 11 11
    IV. 3 e 4 
    V. 19 e 9 
    VI. 3
    VII. 1  
*/

