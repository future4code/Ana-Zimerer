export interface User {
    name: string,
    balance: number
}

export const performPurchase = (user: User, value: number): User | undefined => {
    if (user.balance >= value) {
        const updateUser: User = {
            name: user.name,
            balance: user.balance - value
        }
        console.log(updateUser)
        return updateUser
    } else {
        console.log(undefined)
        return undefined
    }
}

