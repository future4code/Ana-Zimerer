

function adicionaTarefa(){
let tarefa=document.getElementById("inputNovaTarefa")
let diaEscolhido=document.getElementById('seletorDiaDaSemana')
let diaDaSemana=diaEscolhido.options[seletorDiaDaSemana.selectedIndex].index //pegando o valor do index
    if ((tarefa.value !== "")&&(tarefa.value !== undefined)){//pra verificar se o input da tarefa está em branco ou não
    switch (diaDaSemana){
        case 0: //considerando que na posição 0 temos segunda
       // segunda.innerHTML+=`<p class="tarefaAdicionada" onclick=${riscarTarefa()}>${tarefa.value}</p>`;
        segunda.innerHTML+=`<p class="itensDaLista">${tarefa.value}</p>`;
        break;

        case 1://considerando que na posição 1 temos terca
        terca.innerHTML+=`<p class="itensDaLista">${tarefa.value}</p>`;
        break;

        case 2://considerando que na posição 2 temos quarta
        quarta.innerHTML+=`<p class="itensDaLista">${tarefa.value}</p>`;
        break;

        case 3:
        quinta.innerHTML+=`<p class="itensDaLista">${tarefa.value}</p>`;
        break;

        case 4:
        sexta.innerHTML+=`<p class="itensDaLista">${tarefa.value}</p>`;
        break;

        case 5:
        sabado.innerHTML+=`<p class="itensDaLista">${tarefa.value}</p>`;
        break;

        case 6:
        domingo.innerHTML+=`<p class="itensDaLista">${tarefa.value}</p>`;
        break;

        default:
            console.log('Erro na escolha de dias da semana') 
                   
    } }else{
        alert("Ei! Digite alguma tarefa antes de apertar o botão!")
    }
    inputNovaTarefa.value=""
}

function riscarTarefa(){
    //tarefa que será riscada
    let tarefaCompleta=document.querySelector(".itensDaLista") 
    tarefaCompleta.innerHTML=`<p class="tarefaRiscada">${tarefa.value}</p>`;
}



