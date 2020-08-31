enum LOCATION {
    BRAZIL = 'BRAZIL',
    EUA = 'EUA'
}

enum NACIONALITY {
    BRAZILIAN = 'BRAZILIAN',
    AMERICAN = 'AMERICAN'
}

interface Casino {
    name: string,
    country: LOCATION
}

interface User {
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

const verifyAge = (casino: Casino, users: User[]): Result => {
    for (const user of users) {
        const allowed: User[] = []
        const unallowed: User[] = []

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

        allowed.forEach((user: User) => {
            if (user.nacionality === NACIONALITY.BRAZILIAN) {
                allUsers.brazilians.allowed.push(user.name)
            } else {
                allUsers.americans.allowed.push(user.name)
            }
        })

        unallowed.forEach((user: User) => {
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


const newCasino = {
    name: 'lasvegas',
    country: LOCATION.BRAZIL
}

const newUsers = [{
    name: 'ana',
    age: 23,
    nacionality: NACIONALITY.BRAZILIAN
},
{
    name: 'pedro',
    age: 9,
    nacionality: NACIONALITY.BRAZILIAN
},
{
    name: 'rafa',
    age: 29,
    nacionality: NACIONALITY.AMERICAN
},
{
    name: 'dani',
    age: 12,
    nacionality: NACIONALITY.AMERICAN
}]

verifyAge(newCasino, newUsers)

