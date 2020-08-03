"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
const createAccount_1 = require("./createAccount");
function addBalance(name, cpf, balanceToAdd) {
    try {
        const accounts = createAccount_1.readDataBase();
        accounts.forEach((account, i, array) => {
            if (name === account.name && cpf === account.cpf) {
                const now = moment_1.default();
                account.balance = account.balance + balanceToAdd;
                account.statement.push({
                    value: balanceToAdd,
                    date: now.format('DD/MM/YYYY'),
                    description: 'Depósito'
                });
                const updateAccountList = JSON.stringify(accounts, null, 2);
                fs.writeFileSync('./data.json', updateAccountList);
                return console.log("Foi adicionado á seu saldo o valor de R$ " + balanceToAdd
                    + "\n" + "Seu saldo atual é: R$" + account.balance);
            }
        });
    }
    catch (_a) {
        console.log('Erro ao adicionar saldo');
    }
}
addBalance(process.argv[2], Number(process.argv[3]), Number(process.argv[4]));
