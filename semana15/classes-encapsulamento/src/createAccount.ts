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

const checkAdulthood= (birth: moment.Moment):boolean =>{
	let now= moment()
	let ageOfClient:number= now.diff(birth, "years")
	if (ageOfClient>=18){
		return true
	}else{
		console.log('Conta não criada: para se cadastrar é necessário ter mais de 18 anos.')
		return false
	}	
}

const checkIfCpfIsValid = (cpf: number):any =>{	
	let validate: boolean =true
	accounts.forEach((account: any, i: number, array:any ) => {
		if(cpf=== account.cpf){
			console.log('Conta não criada: o cpf informado já foi cadastrado em outra conta. Digite um cpf válido.')
			validate=false
		}
	});
	return validate
}

const AgeIsValid= checkAdulthood(dateOfBirth)
const cpfIdValid= checkIfCpfIsValid(newAccountCpf)

if (AgeIsValid && cpfIdValid){
  accounts.push(newAccount)
  fileManager.writeToDatabase(accounts)
}


