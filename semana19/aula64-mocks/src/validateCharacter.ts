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
        }

        if (character.life <= 0) {
            throw new Error('You lost the game. Your life must to be greater than 0' + character.life)
        }

        if (character.strength || character.defense < 0) {
            throw new Error('You cant start the game with strength and defense less than 0')
        }
        return true
    } catch{
        return false
    }
}

