import * as fs from 'fs'

const fileData: string = fs.readFileSync('./data.json').toString()
let users: any;

try{
    users= JSON.parse(fileData)
}catch (error){
    users=[] 
    console.log("Erro ao ler a base de dados: " + error)
}

function addBalance(name: string, cpf:number, balanceToAdd: number){
    users.forEach((account: any, i: number, array:any ) => {
        if(name=== account.name && cpf === account.cpf){
            account.balance= account.balance + balanceToAdd;
            return console.log("Foi adicionado á seu saldo o valor de R$ "+balanceToAdd) 
           // + "\n" + "Seu saldo atual é: R$"+ account.balance
        }
    });
}

try{
    const updatedUsers: string= JSON.stringify(users, null, 5)//tranformando o obj 'user'de volta em string || null é o replace pra fazer alterações nos dados || o 5 é a identação, qtos espaços até add a próxima letra
    fs.writeFileSync("./data.json", updatedUsers) //caminho | o que você quer add 
    console.log('atualizou sua conta')
}catch(error){
    console.log("erro ao atualizar a base")
}

addBalance(process.argv[2], Number(process.argv[3]), Number(process.argv[4]))
