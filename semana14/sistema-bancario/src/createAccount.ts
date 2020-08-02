import * as fs from 'fs'
import moment from 'moment'

const newNameAccount: string =  process.argv[2]
const newCpfAccount: number = Number(process.argv[3])
const newDateOfBirthAccount= moment(process.argv[4], 'DD/MM/YYYY')

type transactions=[{
  value: number,
  date: moment.Moment,
  description: string
}]

type account= {
  name: string,
  cpf: number,
  dateOfBirth: moment.Moment,
  balance: number,
  statement: transactions
}

export function readDatabase(): any {
	try {
	  const fileData: string = fs.readFileSync('./data.json').toString()
	  return JSON.parse(fileData)
	} catch (error) {
	  console.log("Erro ao ler a base de dados: " + error.message)
	  return []
	}
}

function checkAdulthood(birth: moment.Moment):boolean{
	let now= moment()
	let ageOfClient:number= now.diff(birth, "years")
	if (ageOfClient>=18){
		return true
	}else{
		console.log('Conta não criada: para se cadastrar é necessário ter mais de 18 anos.')
		return false
	}
}

function checkIfCpfIsValid(cpf: number):any{
	let fileData= readDatabase()
	fileData.forEach((account: any, i: number, array:any ) => {
		if(cpf=== account.cpf){
			console.log('Conta não criada: o cpf informado já foi cadastrado em outra conta. Digite um cpf válido.')
		    return false
		}else{
			return true
		}
	});
}

function createAccount(
  accountName: string, 
  accountCpf: number,
  accountDateOfBirth: moment.Moment
): void{
	const AgeIsValid= checkAdulthood(accountDateOfBirth)
	const cpfIdValid= checkIfCpfIsValid(accountCpf)
	if (AgeIsValid && cpfIdValid){
  		try{		
			let data = readDatabase()
  			data.push({
  			name: accountName,
  			cpf: accountCpf,
  			dateOfBirth: accountDateOfBirth.format('DD/MM/YYYY'),
  			balance: 0,
			statement: []})	

			const updateAccountList= JSON.stringify(data, null, 2)
    			fs.writeFileSync('./data.json', updateAccountList)
			console.log(`Olá! uma nova conta foi criada!`)	
			
  		}catch{
			console.log('Erro ao tentar criar nova conta')
		}
	}
}

createAccount(newNameAccount, newCpfAccount, newDateOfBirthAccount)

