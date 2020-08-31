interface User {
    name: string,
    balance: number
}

const performPurchase = (user: User, value: number): User | undefined => {
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

const inputUser: User = {
    name: 'Ana',
    balance: 20
}

performPurchase(inputUser, 10)