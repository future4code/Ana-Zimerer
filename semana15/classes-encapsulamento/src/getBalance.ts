import JSONFileManager from './JSONFileManager'
import Account from './Accounts'

const fileManager: JSONFileManager = new JSONFileManager("data.json")
// Ler a base de dados
const accounts: any = fileManager.readDatabase()

const accountName: string = process.argv[2]
const accountCpf: number = Number(process.argv[3])

//ler, achar pessoa, mandar arquivo pra instancia, metodo faz a lógica e retorna
const accountRequired = accounts.filter((user: any)=>{
    if(accountName===user.name && accountCpf === user.cpf){
        return true
    }
})

const getBalance: Account = new Account(
    accountRequired[0].name, 
    accountRequired[0].cpf, 
    accountRequired[0].dateOfBirth,
    accountRequired[0].balance,
    accountRequired[0].statement
)


getBalance.getBalance()
