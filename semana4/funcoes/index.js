//EXERCICIO 01
//
// A) Para minhaFuncao(2) será retornado indefinido
// B) Para minhaFuncao(5) será retornado [0,1,0,1,2,3]
// C) Para minhaFuncao(8) será retornado [0,1,0,1,2,3,0,1,2,3,4,5]

//EXERCÍCIO 02
//
//A) console.log(funcao(arrayDeNomes, "Darvas")); =  retorna 0
//   console.log(funcao(arrayDeNomes, "João")); = retorna 2
//   console.log(funcao(arrayDeNomes, "Paula")); = retorna undefined. Caso tivesse escrito Paulinha, retornaria 3
//
//B)


//EXERCICIO 03 
//Para cada posição de uma array, são modificados os resultados A e B. No resultado A, é adicionado o valor da posição. 
//Para o resultado B, é multiplicado o valor da posição analisada. Todos esses resultados são adicionados em uma nova array
//e mostra essa nova array

//EXERCÍCIO 04
/*
let calculoIdadeDeCachorro = (anosHumanos) => {
    let idadeCachorro= anosHumanos * 7
    return idadeCachorro;
}
anosHumanos= prompt("Digite a idade de cachorro")
anosHumanos= Number (anosHumanos)

console.log("Sua idade de cachorro é: " + calculoIdadeDeCachorro(anosHumanos));
*/

//EXERCÍCIO 05
anoInformadoPeloUsuario=prompt("Digite um ano entre 1000d.c. e 2000d.c.")
let seculo=anoInformadoPeloUsuario/100

function converteEmSeculo(seculo){    
    seculoSemDecimal=Math.trunc(seculo)
    return(seculoSemDecimal)
}

const numerosRomanos=["null", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX","X","XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XI"]
if ((anoInformadoPeloUsuario>=1000) && (anoInformadoPeloUsuario<=2000)){
    alert(converteEmSeculo(seculo));  
    seculo=anoInformadoPeloUsuario/100
    if(seculo%1===0){        
        let emNumeroRomano= numerosRomanos[seculoSemDecimal]
        console.log("O ano "+anoInformadoPeloUsuario+ " pertence ao século "+emNumeroRomano)
    }else{
        let emNumeroRomano= numerosRomanos[seculoSemDecimal+1]
        console.log("O ano "+anoInformadoPeloUsuario+ " pertence ao século "+emNumeroRomano)
    }
}else{
   alert("Digite um valor válido")
}

