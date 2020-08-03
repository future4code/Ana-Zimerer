"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createAccount_1 = require("./createAccount");
function returnBalance(name, cpf) {
    try {
        const accounts = createAccount_1.readDataBase();
        accounts.forEach((account, i, array) => {
            if (name === account.name && cpf === account.cpf) {
                return console.log(`Seu saldo é de: R$` + account.balance);
            }
        });
    }
    catch (_a) {
        console.log('Erro ao buscar saldo');
    }
}
returnBalance(process.argv[2], Number(process.argv[3]));
