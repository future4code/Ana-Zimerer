import * as fs from 'fs'

const fileData: string = fs.readFileSync('./data.json').toString()
let users: any;

try{
    users= JSON.parse(fileData)
}catch (error){
    users=[] 
    console.log("Erro ao ler a base de dados: " + error)
}

function returnBalance(name: string, cpf:number){
    users.forEach((account: any, i: number, array:any ) => {
        if(name=== account.name && cpf === account.cpf){
            return console.log(`Seu saldo é de: R$` +account.balance)
        }
    });
}

returnBalance(process.argv[2], Number(process.argv[3]))




