export default class Accounts{
    private name: string
    private cpf: number
    private dateOfBirth: string
    private balance: number = 0
    private statement: []
        
    constructor(
        newName: string,
        newCpf: number,
        newDateOfBirth: string,
        updateBalance: number,
        updateStatement: [],

    ){
        this.name=newName,
        this.cpf= newCpf,
        this.dateOfBirth= newDateOfBirth,
        this.balance=updateBalance,
        this.statement=updateStatement
        
    }
    //public setAccount = (accountName: string, accountCpf: number, accountDateOfBirth: any):void =>{
    //    this.name= accountName;
    //    this.cpf= accountCpf;
    //    this.dateOfBirth= accountDateOfBirth;
    //}
  }
