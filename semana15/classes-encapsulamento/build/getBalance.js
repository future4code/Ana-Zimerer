"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = __importDefault(require("./JSONFileManager"));
const fileManager = new JSONFileManager_1.default("data.json");
// Ler a base de dados
const accounts = fileManager.readDatabase();
//# sourceMappingURL=getBalance.js.map