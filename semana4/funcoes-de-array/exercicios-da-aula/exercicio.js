//EXERCICIO 01
//const mostragemDeNumeros = (numero,funcao2) => {
//    if (numero%2!==0){
//        funcao2();
//    }else{         
//    }
//};
//
//const mostraImpares = () => {
//    console.log('Sim, é impar')
//}
//
//mostragemDeNumeros(15,mostraImpares)

//EXERCICIO 2
//primeiro montar uma array de objetos:
//const alunos=[
//    {nome:"Ana", turma: "b", nota: 5, notaAtual:9},
//    {nome:"Elaine", turma: "a", nota: 8, notaAtual:9},
//    {nome:"Paula", turma: "b", nota: 5, notaAtual:9},
//    {nome:"Caio", turma: "a", nota: 9, notaAtual:9}
//]
//
//alunos.forEach((aluninho,index,array)=>{
//    aluninho.nota=aluninho.notaAtual
//    console.log(alunos[index]);
//})

//EXERCICIO 3
//lista=[10,10,20,30,40,50]
//
//const escreveNumeros= lista.map((numeros,index,array)=>{
//    return (`O elemento"${index} é ${numeros}`)   
//    
//})
//
//const mostraNumeros =()=>{
//    console.log(escreveNumeros)
//
//}


//EXERCICIO 4
lista=[10,11,20,37,40,50]
listaPares=[]
listaMaioresQueDez=[]

const numerosPares= lista.filter((numeros,index,array)=>{
    if (numeros%2===0){
        return true;
    }
        return false;    
})

