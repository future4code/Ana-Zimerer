1) usuario fez a compra ou não 
recebe um 
user={
    name: 'ana',
    balance: 10,
}
value= 5

3)
sistema de filas: quem pode entrar?

const cassino={
    name: string,
    country: ENUM(Brasil, Eua),
}

const user={
    nacionality: AMERICAN / BRASILIAN,
    age: number
}

Usuario nos eua = age>=21
Usuario nos brs = age>=18

return 
brasileiros | 
permitidos: []
não permitidos: []

americanos 
permitidos: []
não permitidos: []

testes:
a)user br, casino no br 
b)user america, casino no br
c) 2 users br, 2 america = 19 anos, casino eua
d) 2 users br(19 anos), 2 america(21 anos), casino eua 