"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = __importDefault(require("./JSONFileManager"));
const Accounts_1 = __importDefault(require("./Accounts"));
const fileManager = new JSONFileManager_1.default("data.json");
// Ler a base de dados
const accounts = fileManager.readDatabase();
const accountName = process.argv[2];
const accountCpf = Number(process.argv[3]);
//ler, achar pessoa, mandar arquivo pra instancia, metodo faz a lógica e retorna
const accountRequired = accounts.filter((user) => {
    if (accountName === user.name && accountCpf === user.cpf) {
        return true;
    }
});
const getBalance = new Accounts_1.default(accountRequired[0].name, accountRequired[0].cpf, accountRequired[0].dateOfBirth, accountRequired[0].balance, accountRequired[0].statement);
getBalance.getBalance();
//# sourceMappingURL=getBalance.js.map