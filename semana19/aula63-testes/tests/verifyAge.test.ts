import {
    Casino,
    UserCasino,
    LOCATION,
    NACIONALITY,
    verifyAge,
    deleteUsers
} from './../src/verifyAge';


describe('Test entry of users in brasilian and american casino', () => {
    afterEach(() => {
        deleteUsers()
    })
    test('one brasilian allowed at brasilian casino', () => {
        const brasilianUser: UserCasino[] = [{
            name: 'ana',
            age: 23,
            nacionality: NACIONALITY.BRAZILIAN
        }]
        const newCasino: Casino = {
            name: 'lasvegas BR',
            country: LOCATION.BRAZIL
        }
        const result = verifyAge(newCasino, brasilianUser)
        expect(result.brazilians.allowed).toContain('ana')
        expect(result.brazilians.allowed.length).toBeLessThan(2)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    })

    test('one american allowed at brasilian casino', () => {
        const americanUser: UserCasino[] = [{
            name: 'rafa',
            age: 29,
            nacionality: NACIONALITY.AMERICAN
        }]
        const newCasino: Casino = {
            name: 'lasvegas BR',
            country: LOCATION.BRAZIL
        }
        const result = verifyAge(newCasino, americanUser)
        expect(result.americans.allowed).toContain('rafa')
        expect(result.brazilians.unallowed.length).toEqual(0)
    })
    //user eua, casino br. Array unallowed americans = 0

    test('two americans and two brasilians at american casino with 19 years', () => {
        const newUsers: UserCasino[] = [{
            name: 'ana',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        },
        {
            name: 'pedro',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        },
        {
            name: 'rafa',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        },
        {
            name: 'dani',
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }]

        const newCasino: Casino = {
            name: 'lasvegas EUA',
            country: LOCATION.EUA
        }

        const result = verifyAge(newCasino, newUsers)
        expect(result.brazilians.unallowed).toContain('ana' && 'pedro')
        expect(result.americans.unallowed).toContain('rafa' && 'dani')
        expect(result.americans.unallowed.length).toEqual(2)
        expect(result.brazilians.unallowed.length).toEqual(2)
    })
    // c) 2 users br, 2 users eua, 19 age, casino eua, ver se em algum unallowed tenha os users
    test('two americans allowed and two brasilians unalloweds', () => {
        const newUsers: UserCasino[] = [{
            name: 'maria',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        },
        {
            name: 'julia',
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        },
        {
            name: 'jack',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        },
        {
            name: 'olivia',
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }]

        const newCasino: Casino = {
            name: 'lasvegas EUA',
            country: LOCATION.EUA
        }

        const result = verifyAge(newCasino, newUsers)
        expect(result.brazilians.unallowed).toContain('maria' && 'julia')
        expect(result.americans.allowed).toContain('jack' && 'olivia')
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.allowed.length).toEqual(2)
    })
})



