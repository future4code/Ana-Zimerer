/*EXERCÍCIO 01
Resposta: O programa soma valores de forma progressiva de 0 a 15, como uma progressãoa aritmética. O programa 
resulta no valor 105.
*/

/*EXERCÍCIO 02
(a) O programa acessa todas as onze posições do array 'lista'. Em cada posição verifica se o valor acessado 
é divisivel por 5. Se for, é adicionado o valor divisivel por 5 a uma nova lista. Quando se encerrarem as 11 consultas, 
o console mostra a nova lista com os divisores de 5.

(b) O valor impresso no console é 10,15,20,30.

(c) Caso a variável 'numero' valesse 3, os valores impressos seriam os divisiveis por 3: 12,15,18,21,27 e 30.
Caso a variável 'numero' valesse 4, o único valor impresso seria o 12, pois é o unico da nova lista divisivel por 5.
*/

//EXERCÍCIO 3 
//(a)
/*
const lista = [10,200,30,1.5,50,2,70]
let maiorNumeroAtual = lista [0] //estou adicionando o valor da posição 0 (10), só pra começar com algum 
let menorNumeroAtual = lista [0]
//  o indice começa no zero// o valor do indice é menor do que o tamanho todo da array// sempre adicionar 1 ao valor do indice
//  pra pegar desde o começo da lista// pra ver se não está pegando posiçoes fora da array// serve pras posiçoes andarem do 0 pro 1, do 1 pro 2
// as condiçoes do for, tem a ver com a posição que a array está rodando
for (let i=0; i < lista.length; i++){ //aqui no fim, o i já vai ter valor de 1, pra proxima rodada
    if (lista[i]>maiorNumeroAtual) {//se 10 é maior que 10?//se 10 é maior que 20 // se 20 é maior que 30
        maiorNumeroAtual = lista [i] // não muda //atualiza pra 20//atualiza pra 30
    }
}

for (let i=0; i <lista.length; i++){
    if (lista[i]<menorNumeroAtual) {
        menorNumeroAtual = lista [i] 
    }
}
console. log ("O maior numero é " +maiorNumeroAtual+ " e o menor número é " +menorNumeroAtual)
*/

//(b)
/*
const lista= [12,5.2,70,40,120,-60]
let novaLista=[]

for (let item of lista){
    item = item/10
    novaLista.push(item)
}
console.log("Lista original com os numeros divididos por 10: "+novaLista)
*/


//(c)
/*
const lista= [12,5.2,70,40,120,-60]
let listaDePares=[]

for (i=0; i<lista.length; i++){
    if (lista[i]%2 === 0){
        listaDePares.push(lista[i])
    }
}
console.log("Somente os números pares: " + listaDePares)
*/


//(d)


const lista= [12,5.2,70,40,120,-60]

for (i=0; i<lista.length; i++){
    console.log("O elemento da posição " +i+ " é o número "+ lista[i])
}
