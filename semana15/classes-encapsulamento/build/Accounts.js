"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Accounts {
    constructor(newName, newCpf, newDateOfBirth, updateBalance, updateStatement) {
        this.balance = 0;
        console.log("Chamando o construtor da classe UserAccount");
        this.name = newName,
            this.cpf = newCpf,
            this.dateOfBirth = newDateOfBirth,
            this.balance = updateBalance,
            this.statement = updateStatement;
    }
    getBalance() {
        console.log(this.balance);
    }
    addBalance(value) {
        //Aqui deve ser inserida a lógica de adicionar saldo 
        console.log('Saldo atualizado com sucesso');
    }
}
exports.default = Accounts;
//public setAccount = (accountName: string, accountCpf: number, accountDateOfBirth: any):void =>{
//    this.name= accountName;
//    this.cpf= accountCpf;
//    this.dateOfBirth= accountDateOfBirth;
//}
//class UserAccount {
//  private cpf: string;
//  private name: string;
//  private age: number;
//  private balance: number = 0;
//  private transactions: [];
//
//  constructor(
//     cpf: string,
//     name: string,
//     age: number,
//  ) {
//     console.log("Chamando o construtor da classe UserAccount")
//     this.cpf = cpf;
//     this.name = name;
//     this.age = age;
//  }
//
//    public getBalance(): number {
//    //Aqui deve ser inserida a lógica de pegar saldo do usuário
//    }
//
//    public addBalance(value: number): void {
//    //Aqui deve ser inserida a lógica de adicionar saldo 
//      console.log('Saldo atualizado com sucesso')
//    }
//
//}
//# sourceMappingURL=Accounts.js.map