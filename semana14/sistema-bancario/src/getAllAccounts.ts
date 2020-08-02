import * as fs from 'fs'

function getAllAccounts(): any {
    try {
      const fileData: string = fs.readFileSync('./data.json').toString()
      console.log(JSON.parse(fileData))
    } catch (error) {
      console.log("Erro ao ler a base de dados: " + error.message)
      return []
    }
  }

getAllAccounts()