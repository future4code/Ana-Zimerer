import Accounts from "./Accounts";
import JSONFileManager from "./JSONFileManager";

export class Bank{
    private accounts: Accounts[]
    private fileManager: JSONFileManager

    constructor(
        newAccounts: Accounts[],
        useFileManager: JSONFileManager
    ){
        this.accounts = newAccounts,
        this.fileManager=useFileManager
    }
    
    public createNewAccount(userAccount: Accounts[]):void{
    }

    public getAllAccounts(): Accounts[] | undefined{
        return 
    }
    
    public getAccountByCpfAnd(name: string, cpf: string): Accounts[] | undefined{
        return
    }

}