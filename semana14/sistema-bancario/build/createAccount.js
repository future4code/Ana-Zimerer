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
const newNameAccount = process.argv[2];
const newCpfAccount = Number(process.argv[3]);
const newDateOfBirthAccount = moment_1.default(process.argv[4], 'DD/MM/YYYY');
function checkAdulthood(birth) {
    let now = moment_1.default();
    let ageOfClient = now.diff(birth, "years");
    console.log(ageOfClient);
    if (ageOfClient >= 18) {
        return true;
    }
    else {
        return false;
    }
}
function createAccount(accountName, accountCpf, accountDateOfBirth) {
    const AgeIsValid = checkAdulthood(accountDateOfBirth);
    if (AgeIsValid) {
        try {
            const fileData = fs.readFileSync('./data.json').toString();
            let data = JSON.parse(fileData);
            data.push({
                name: accountName,
                cpf: accountCpf,
                dateOfBirth: accountDateOfBirth.format('DD/MM/YYYY'),
                balance: 0,
                statement: []
            });
            const updateAccountList = JSON.stringify(data, null, 2);
            fs.writeFileSync('./data.json', updateAccountList);
            console.log(`Olá! uma nova conta foi criada!`);
        }
        catch (_a) {
            console.log('Erro ao tentar criar nova conta');
        }
    }
    else {
        console.log('Sua conta não foi criada pois é necessário ter mais de 18 anos');
    }
}
createAccount(newNameAccount, newCpfAccount, newDateOfBirthAccount);
//checkAdulthood(moment(process.argv[2], 'DD/MM/YYYY'))
