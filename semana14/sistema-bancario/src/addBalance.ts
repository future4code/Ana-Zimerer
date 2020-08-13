import * as fs from 'fs'
import moment from 'moment'
import { readDataBase } from './createAccount';

function addBalance(name: string, cpf:number, balanceToAdd: number){
    try{
        const accounts= readDataBase()
        accounts.forEach((account: any, i: number, array:any ) => {
        if(name=== account.name && cpf === account.cpf){
            const now=moment()
            account.balance= account.balance + balanceToAdd;
            account.statement.push({
                value: balanceToAdd,
                date: now.format('DD/MM/YYYY'),
                description: 'Depósito'
            })
            const updateAccountList= JSON.stringify(accounts, null, 2)
    		fs.writeFileSync('./data.json', updateAccountList)
            return console.log("Foi adicionado á seu saldo o valor de R$ "+balanceToAdd
            + "\n" + "Seu saldo atual é: R$"+ account.balance)
        }
        });
    }catch{
        console.log('Erro ao adicionar saldo')
    }   
}

addBalance(process.argv[2], Number(process.argv[3]), Number(process.argv[4]))
