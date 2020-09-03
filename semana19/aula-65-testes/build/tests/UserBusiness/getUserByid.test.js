"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = require("./../../src/business/UserBusiness");
describe('Test function getUserById', () => {
    const userDatabase = {};
    let idGenerator = jest.fn(() => { return "idMock"; });
    let hashGenerator = jest.fn(() => { return "passwordMock"; });
    const tokenGenerator = {};
    test("Should return error if doesen't exist user ", () => __awaiter(void 0, void 0, void 0, function* () {
        const userBusiness = new UserBusiness_1.UserBusiness(userDatabase, hashGenerator, idGenerator, tokenGenerator);
        try {
            yield userBusiness.getUserById("001");
        }
        catch (error) {
            expect(error.errorCode).toBe(undefined);
            expect(error.message).toEqual('User not found');
        }
    }));
});
//- *O código de erro está correto*
//- *Se a mensagem está correta*
