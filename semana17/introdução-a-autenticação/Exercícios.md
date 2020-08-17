### **EXERCÍCIO 1** 
a) O tipo string dá a possibilidade de misturar letras com números, tornando o valor de id mais variado.

### **EXERCÍCIO 2** 
a) Na constante userTableName, temos o nome da tabela dentro de uma variavel para evitar possiveis erros de digitação. Na constante connection, estamos criando uma conexão com o banco de dados do my sql. Os dados de process.env são confidenciais, por isso se encontram em outro arquivo escondido e são apenas chamados como variaveis no codigo aberto. A função create user está recebendo da requisição um id, um email e uma senha. Esses valores serão inseridos na tabela pré estabelecida atraves do query builder, uma forma de mandar querys pro banco pelo typescript. 

b) 
```
CREATE TABLE aula55_user(
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL); 
```
d) 
```
const userData = new UserDataBase()
userData.createUser("001", 'astrodev@labenu.com','112233')
```
### **EXERCÍCIO 3** 
