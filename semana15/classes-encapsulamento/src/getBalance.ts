import JSONFileManager from './JSONFileManager'
import Account from './Accounts'

const fileManager: JSONFileManager = new JSONFileManager("data.json")
// Ler a base de dados
const accounts: any = fileManager.readDatabase()

