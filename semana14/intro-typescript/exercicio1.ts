//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela.
// Tente atribuir um número a esta variável.O que acontece?
// R: a execução não é completada e aparece um erro, dizendo que o numero não é uma string 

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. 
//Como podemos fazer para que essa variável também aceite strings?
//R: podemos utilizar a seguinte sintaxe: 
//const meuNumero : number | string= 'a'

//c e d) Faça a tipagem do objeto para que ele só aceite os valores acima. Crie mais 3 objetos.
//type pessoa ={
//    nome: string,
//    idade: number,
//    corFavorita: string
//}
//
//const ana: pessoa={
//    nome: 'Ana',
//    idade: 25,
//    corFavorita: 'Azul'
//}
//
//const joao: pessoa={
//    nome: 'Joao',
//    idade: 21,
//    corFavorita: 'Preto'
//}
//
//const maria: pessoa ={
//    nome: 'Maria',
//    idade: 41,
//    corFavorita: 'Amarelo'
//}

//e)Apenas escolher entre as cores do arco-íris, utilizando enum

enum CORESPRIMARIAS {
    AZUL ='Azul',
    AMARELO = 'Amarelo',
    VERMELHO ='Vermelho'
}

type CORESPREFERIDAS ={
    corFavorita: CORESPRIMARIAS
}

const Ana: CORESPREFERIDAS={
    corFavorita: CORESPRIMARIAS.AMARELO
}

