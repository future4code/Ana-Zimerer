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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const fileData = fs.readFileSync('./data.json').toString();
let users;
try {
    users = JSON.parse(fileData);
}
catch (error) {
    users = [];
    console.log("Erro ao ler a base de dados: " + error);
}
function returnBalance(name, cpf) {
    users.forEach((account, i, array) => {
        if (name === account.name && cpf === account.cpf) {
            return console.log(`Seu saldo é de: R$` + account.balance);
        }
    });
}
returnBalance(process.argv[2], Number(process.argv[3]));
