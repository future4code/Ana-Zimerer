export enum LOCATION {
    BRAZIL = 'BRAZIL',
    EUA = 'EUA'
}

export enum NACIONALITY {
    BRAZILIAN = 'BRAZILIAN',
    AMERICAN = 'AMERICAN'
}

export interface Casino {
    name: string,
    country: LOCATION
}

export interface UserCasino {
    name: string;
    age: number,
    nacionality: NACIONALITY
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

interface ResultItem {
    allowed: string[];
    unallowed: string[];
}

let allUsers: Result = {
    brazilians: {
        allowed: [],
        unallowed: []
    },
    americans: {
        allowed: [],
        unallowed: []
    }
}

export const verifyAge = (casino: Casino, users: UserCasino[]): Result => {
    for (const user of users) {
        const allowed: UserCasino[] = []
        const unallowed: UserCasino[] = []

        switch (casino.country) {
            case 'BRAZIL':
                if (user.age >= 18) {
                    allowed.push(user)
                } else {
                    unallowed.push(user)
                }
                break;
            case 'EUA':
                if (user.age >= 21) {
                    allowed.push(user)
                } else {
                    unallowed.push(user)
                }
                break;
            default:
                console.log('Incorrect country')
        }

        allowed.forEach((user: UserCasino) => {
            if (user.nacionality === NACIONALITY.BRAZILIAN) {
                allUsers.brazilians.allowed.push(user.name)
            } else {
                allUsers.americans.allowed.push(user.name)
            }
        })

        unallowed.forEach((user: UserCasino) => {
            if (user.nacionality === NACIONALITY.AMERICAN) {
                allUsers.americans.unallowed.push(user.name)
            } else {
                allUsers.brazilians.unallowed.push(user.name)
            }
        })

    }
    console.table(allUsers)
    return allUsers
}

export const deleteUsers = () => {
    allUsers = {
        brazilians: {
            allowed: [],
            unallowed: []
        },
        americans: {
            allowed: [],
            unallowed: []
        }
    }
}

