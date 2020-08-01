"use strict";
const operation = (process.argv[2]);
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);
let result = 0;
switch (operation) {
    case 'sum':
        result = firstNumber + secondNumber;
        break;
    case 'sub':
        result = firstNumber + secondNumber;
        break;
    case 'mult':
        result = firstNumber * secondNumber;
        break;
    case 'div':
        result = firstNumber / secondNumber;
        break;
    default:
        console.log('Digite uma operação válida');
}
console.log('O resultado de sua ' + operation + ' é: ' + result);
