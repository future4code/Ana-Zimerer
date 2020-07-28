//a) para acessar os parametros passados na linha de comando para o node devemos ter instalado
//o types do node e importar o arquivo fs. Dessa forma, podemos utilizar o comando readFilesSync

//b)
const nome:string= process.argv[2]
const idade:number=Number(process.argv[3])
console.log('Seu nome é '+ nome+ ' e sua idade é '+ idade )

//c)
const idadeMaisSete:number= (idade +7)
console.log("Olá, "+nome+"! Você tem " +idade+ " anos. Em sete anos você terá "+idadeMaisSete)