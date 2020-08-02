import * as fs from 'fs'
import moment from 'moment'

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

const newNameAccount: string =  process.argv[2]
const newCpfAccount: number = Number(process.argv[3])
const newDateOfBirthAccount= moment(process.argv[4], 'DD/MM/YYYY')

function checkAdulthood(birth: moment.Moment):boolean{
	let now= moment()
	let ageOfClient:number= now.diff(birth, "years")
	console.log(ageOfClient)
	if (ageOfClient>=18){
		return true
	}else{
		return false
	}
}

function createAccount(
  accountName: string, 
  accountCpf: number,
  accountDateOfBirth: moment.Moment
): void{
	const AgeIsValid= checkAdulthood(accountDateOfBirth)
	if (AgeIsValid){
  		try{		
			const fileData= fs.readFileSync('./data.json').toString()
			let data = JSON.parse(fileData)

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
	}else{
		console.log('Sua conta não foi criada pois é necessário ter mais de 18 anos')
	}
}

createAccount(newNameAccount, newCpfAccount, newDateOfBirthAccount)

