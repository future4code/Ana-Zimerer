//QUILOWATTS POR HORA

let quilowatts = 280
const hora= 0.05

let total= quilowatts * hora
console.log ("Consumindo "+quilowatts+" quilowatts por hora, o valor final de sua conta é de R$" +total)

let porcentagem = 15
let totalComDesconto= total - (total * porcentagem/100) 
console.log ("Aplicando o cupon de desconto de 15% o valor final de sua conta é de R$" +totalComDesconto)
