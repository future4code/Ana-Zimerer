"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Accounts {
    constructor(newName, newCpf, newDateOfBirth, updateBalance, updateStatement) {
        this.balance = 0;
        this.setAccount = (accountName, accountCpf, accountDateOfBirth) => {
            this.name = accountName;
            this.cpf = accountCpf;
            this.dateOfBirth = accountDateOfBirth;
        };
        this.name = newName,
            this.cpf = newCpf,
            this.dateOfBirth = newDateOfBirth,
            this.balance = updateBalance,
            this.statement = updateStatement;
    }
}
exports.default = Accounts;
//# sourceMappingURL=Accounts.js.map