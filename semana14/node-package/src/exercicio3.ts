import * as fs from 'fs'

let newTask: string=process.argv[2]
try{
    fs.appendFileSync('./src/tarefas.txt', newTask);
    console.log('Tarefa adicionada com sucesso!')
}catch(error){
    console.log('Não foi possível adicionar essa tarefa')
}



