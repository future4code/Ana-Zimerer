import { readDataBase } from "./createAccount"

export function payBill(
    valueToPay: number, 
    dateToPay: moment.Moment, 
    descriptionOfBill: string)
: any{
    try{
        const dataBase=readDataBase()
        
    }catch{
        console.log('Erro ao pagar conta')
    }
}