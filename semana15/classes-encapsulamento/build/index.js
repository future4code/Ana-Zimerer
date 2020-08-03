"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const JSONFileManager_1 = __importDefault(require("./JSONFileManager"));
const Accounts_1 = __importDefault(require("./Accounts"));
const fileManager = new JSONFileManager_1.default("data.json");
// Ler a base de dados
const accounts = fileManager.readDatabase();
// Receber parâmetros do terminal
const newAccountName = process.argv[2];
const newAccountCpf = Number(process.argv[3]);
const dateOfBirth = moment_1.default(process.argv[4], 'DD/MM/YYYY');
const newAccountDateOfBirth = dateOfBirth.format('DD/MM/YYYY');
// Criar uma instância de Post
const newAccount = new Accounts_1.default(newAccountName, newAccountCpf, newAccountDateOfBirth, 0, []);
accounts.push(newAccount);
fileManager.writeToDatabase(accounts);
//# sourceMappingURL=index.js.map