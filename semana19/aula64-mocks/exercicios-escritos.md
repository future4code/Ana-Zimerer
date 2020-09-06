1) função que valida infos dos personagens 
   - name, life, strength, defense
força: o quanto pode tirar de vida
defesa: o quanto consegue se defender (força - defesa) e esse valor é tirado da vida
life (1500)

2)a)nome vazio
b)vida vazia
c)força vazia
d)defesa vazia
e) vida, força ou defesa com valor negativo 
f) vida | defesa | força = 0
g) tudo certo, válido 

3)performAttack
attacker:string,
defender: Character

a)caso alguns dos personagens seja inválido, erro invalid Character
b) - Ela deve retirar do `defender` o valor final do ataque (`(força do attacker) - (defesa do defender)`)
C)- Caso a defesa do `defender` seja maior do que a força do `attacker`, nenhuma vida do `defender` deve ser retirada
D) duas implementações