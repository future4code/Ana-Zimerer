export interface Character {
    name: string,
    life: number,
    strength: number,
    defense: number
}

export function validateCharacter(character: Character) {
    try {
        if (!character.name || !character.life || !character.strength || !character.defense) {
            throw new Error('Fill all the blanks')
            console.log("valores invalidos")
        }

        if (character.life <= 0) {
            console.log("vida menor que zero")
            throw new Error('You lost the game. Your life must to be greater than 0' + character.life)
        }

        if (character.strength < 0 || character.defense < 0) {
            console.log("forças menores que zero ")
            throw new Error('You cant start the game with strength and defense less than 0')
        }

        return true
    } catch{
        return false
    }
}

const newCharacter: Character = {
    name: 'Lux',
    life: 50,
    strength: 50,
    defense: 60
}

console.log(validateCharacter(newCharacter))
