import { Character, validateCharacter } from './../src/validateCharacter';
describe('Test character input validation', () => {

    test('Should return true for valid character', () => {
        const newCharacter: Character = {
            name: 'Lux',
            life: 50,
            strength: 50,
            defense: 60
        }
        const result = validateCharacter(newCharacter)
        expect(result).toBe(true)
    })

    test('Should return false for empty name', () => {
        const newCharacter: Character = {
            name: '',
            life: 50,
            strength: 50,
            defense: 60
        }
        const result = validateCharacter(newCharacter)
        expect(result).toBe(false)
    })

    test('Should return false for empty life', () => {
        const newCharacter: Character = {
            name: 'Lux',
            life: 0,
            strength: 50,
            defense: 60
        }
        const result = validateCharacter(newCharacter)
        expect(result).toBe(false)
    })

    test('Should return false for empty strength', () => {
        const newCharacter: Character = {
            name: 'Lux',
            life: 50,
            strength: 0,
            defense: 60
        }
        const result = validateCharacter(newCharacter)
        expect(result).toBe(false)
    })

    test('Should return false for empty defense', () => {
        const newCharacter: Character = {
            name: 'Lux',
            life: 50,
            strength: 50,
            defense: 0
        }
        const result = validateCharacter(newCharacter)
        expect(result).toBe(false)
    })

    test('Should return false for negative value in strength, defense or life', () => {
        const newCharacter: Character = {
            name: 'Lux',
            life: -6,
            strength: -2,
            defense: -3
        }
        const result = validateCharacter(newCharacter)
        expect(result).toBe(false)
    })

    test('Should return false for strength, defense or life equal to 0', () => {
        const newCharacter: Character = {
            name: 'Lux',
            life: 0,
            strength: 0,
            defense: 0
        }
        const result = validateCharacter(newCharacter)
        expect(result).toBe(false)
    })



})

// a)nome vazio
// b)vida vazia
// c)força vazia
// d)defesa vazia
// e) vida, força ou defesa com valor negativo 
// f) vida | defesa | força = 0
// g) tudo certo, válido 