import * as fs from 'fs'
import moment from 'moment'

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync('./data.json').toString()
    return JSON.parse(fileData)
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message)
    return []
  }
}

export function writeToDatabase(data: any): void {
  try {
    const dataAsString: string = JSON.stringify(data, null, 2)
    fs.writeFileSync('data.json', dataAsString)
    readDatabase()
    console.log('Dados salvos')
  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message)
  }
}

type account= {
  name: string,
  cpf: number,
  dateOfBirth: moment.Moment,
  balance: number,
  statement: number[]
}

const newAccount: account={
  name: process.argv[2],
  cpf: Number(process.argv[3]),
  dateOfBirth: moment(process.argv[4], 'DD/MM/YYYY'),
  balance: 0,
  statement: []
}

writeToDatabase(newAccount)