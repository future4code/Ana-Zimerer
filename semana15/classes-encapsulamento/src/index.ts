import moment from 'moment'
import JSONFileManager from './JSONFileManager'
import Account from './Accounts'

const fileManager: JSONFileManager = new JSONFileManager("data.json")

// Ler a base de dados
const accounts: any = fileManager.readDatabase()

// Receber parâmetros do terminal
const newAccountName: string = process.argv[2]
const newAccountCpf: number = Number(process.argv[3])
const dateOfBirth: moment.Moment= moment(process.argv[4], 'DD/MM/YYYY')
const newAccountDateOfBirth: string= dateOfBirth.format('DD/MM/YYYY')

// Criar uma instância de Account
const newAccount: Account = new Account(
  newAccountName, newAccountCpf, newAccountDateOfBirth, 0, []
)

accounts.push(newAccount)
fileManager.writeToDatabase(accounts)

