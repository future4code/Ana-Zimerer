import * as fs from 'fs'
import { readDataBase } from './createAccount';


function returnBalance(name: string, cpf:number){
    try{
        const accounts= readDataBase()
        accounts.forEach((account: any, i: number, array:any ) => {
            if(name=== account.name && cpf === account.cpf){
                return console.log(`Seu saldo é de: R$` +account.balance)
            }
        });
    }catch{
        console.log('Erro ao buscar saldo')
    }    
}

returnBalance(process.argv[2], Number(process.argv[3]))




