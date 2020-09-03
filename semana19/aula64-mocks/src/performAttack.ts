import { Character, validateCharacter } from './validateCharacter';

interface Attack {
    attacker: Character,
    defender: Character
}

export const performAttack = (attack: Attack, validate: string) => {
    const newAttack: Attack = {
        attacker: {
            name: 'Lux',
            life: 50,
            strength: 90,
            defense: 60
        },
        defender: {
            name: 'Vayne',
            life: 70,
            strength: 60,
            defense: 40
        }
    }
}

// a)caso alguns dos personagens seja inválido, erro invalid Character
// b) - Ela deve retirar do `defender` o valor final do ataque (`(força do attacker) - (defesa do defender)`)
// C)- Caso a defesa do `defender` seja maior do que a força do `attacker`, nenhuma vida do `defender` deve ser retirada
// D) duas implementações