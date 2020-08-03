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
// Criar uma instância de Account
const newAccount = new Accounts_1.default(newAccountName, newAccountCpf, newAccountDateOfBirth, 0, []);
const checkAdulthood = (birth) => {
    let now = moment_1.default();
    let ageOfClient = now.diff(birth, "years");
    if (ageOfClient >= 18) {
        return true;
    }
    else {
        console.log('Conta não criada: para se cadastrar é necessário ter mais de 18 anos.');
        return false;
    }
};
const checkIfCpfIsValid = (cpf) => {
    let validate = true;
    accounts.forEach((account, i, array) => {
        if (cpf === account.cpf) {
            console.log('Conta não criada: o cpf informado já foi cadastrado em outra conta. Digite um cpf válido.');
            validate = false;
        }
    });
    return validate;
};
const AgeIsValid = checkAdulthood(dateOfBirth);
const cpfIdValid = checkIfCpfIsValid(newAccountCpf);
if (AgeIsValid && cpfIdValid) {
    accounts.push(newAccount);
    fileManager.writeToDatabase(accounts);
}
//# sourceMappingURL=index.js.map