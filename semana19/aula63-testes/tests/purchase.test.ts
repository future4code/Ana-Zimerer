import { performPurchase, User } from '../src/performPurchase'

describe('Verify puchase function', () => {
    test('must return a user to greater balance than purchase', () => {
        const user: User = {
            name: 'astrodev',
            balance: 60
        }
        const value: number = 20
        const result = performPurchase(user, value)
        const updateUser: User = {
            name: 'astrodev',
            balance: 60 - value
        }
        expect(result).toEqual(updateUser)
    })

    test('must return a user when the balance equal to purchase', () => {
        const user: User = {
            name: 'astrodev',
            balance: 60
        }
        const value: number = 60
        const result = performPurchase(user, value)
        const updateUser: User = {
            name: 'astrodev',
            balance: 60 - value
        }
        expect(result).toEqual(updateUser)
    })

    test('must return undefined to balance less than purchase', () => {
        const user: User = {
            name: 'astrodev',
            balance: 60
        }
        const value: number = 90
        const result = performPurchase(user, value)
        expect(result).toEqual(undefined)
    })
})


//a) usuario com saldo maior
//b) usuario com saldo igual
//c) usuario com saldo menor que a compra 