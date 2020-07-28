
const operation:string=(process.argv[2])
const firstNumber:number=Number(process.argv[3])
const secondNumber:number=Number(process.argv[4])
let result:number=0

switch(operation){
    case 'sum':
        result= firstNumber+secondNumber
        break;
    case 'sub':
        result= firstNumber+secondNumber
        break;
    case 'mult':
        result= firstNumber*secondNumber
        break;
    case 'div':
        result= firstNumber/secondNumber
        break;
    default:
        console.log('Digite uma operação válida')
}

console.log('O resultado de sua '+operation+' é: '+result)