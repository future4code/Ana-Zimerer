import Transactions from "./Transactions"

export default class Accounts{
    private name: string
    private cpf: number
    private dateOfBirth: string
    private balance: number 
    private statement: Transactions[]
        
    constructor(
        newName: string,
        newCpf: number,
        newDateOfBirth: string,
        updateBalance: number,
        updateStatement: Transactions[]
    ){
        this.name=newName,
        this.cpf= newCpf,
        this.dateOfBirth= newDateOfBirth,
        this.statement=updateStatement 
        this.balance=updateBalance  
    }
    
        public getBalance(): any {
            console.log('Seu saldo é de R$ '+ this.balance)
            return this.balance
        }
    
        public addBalance(value: number): void {
          console.log('Saldo atualizado com sucesso')
        }
    }






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