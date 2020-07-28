
//passando de JS para TS:
function obterEstatisticas(numeros : number[]){

    const numerosOrdenados: number[] = numeros.sort(
        (a : number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    type tiposDosNumeros={
        maior: number,
        menor: number,
        media: number
    }
    
    const estatisticas: tiposDosNumeros= {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
console.log(obterEstatisticas([1,2,3]))

//a) Quais as entradas e saídas dessa função?
//Com a entrada [1,2,3] a saída é { maior: 3, menor: 1, media: 2 }

//b) Que outras variáveis compõem essa função? Explicite a tipagem de todas elas
// Para compor a função, foram utilizadas as variaveis a, b e soma, todas elas do tipo number

//c) Crie um type para representar uma amostra de dados, isto é, um objeto com as chaves numeros 
//e obterEstatisticas.

//type amostraDeIdades ={
//    numeros: number[],
//    obterEstatisticas: () => number
//}

