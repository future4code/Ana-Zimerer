import { UserBusiness } from './../../src/business/UserBusiness';
import { UserDatabase } from './../../src/data/UserDatabase';

describe('Test function getUserById', () => {
    const userDatabase = {}
    let idGenerator = jest.fn(() => { return "idMock" })
    let hashGenerator = jest.fn(() => { return "passwordMock" })
    const tokenGenerator = {}

    test("Should return error if doesen't exist user ", async () => {
        expect.assertions(2)
        const userBusiness = new UserBusiness(userDatabase as any,
            hashGenerator as any,
            idGenerator as any,
            tokenGenerator as any
        )

        try {
            await userBusiness.getUserById("")
        } catch (error) {
            expect(error.errorCode).toBe(404)
            expect(error.message).toEqual('User not found')
        }
    })
})

// - *Todas as funções mockadas foram chamadas (com os inputs corretos)*
// - *A resposta de sucesso em si*