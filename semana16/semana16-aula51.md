<h3> Exercício 1 </h3>
<p>a)id: tipo string com no máximo 255 caracteres, identificador primario necessário </p>
<p>name: tipo string com no máximo 255 caracteres, não podendo ser null, obrigatoriamente </p>
<p>birth_date: tipo date, não podendo ser null, ou seja, é obrigatório passar algum valor</p>
<p>gender: tipo string, podendo receber no máximo 6 caracteres, pra receber o valor feminino ou masculino, 
não podendo ser valor nulo </p>

<p>b)Com os comandos show database são mostradas todas as bases de dados. O SHOW TABLES mostra todas 
as tabelas existentes em sua base de dados </p>

<p>c)Os resultados mostraram os atributos da tabela Actor, com seus tipos e restrições. </p>


<h3> Exercício 2</h3>
a)
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
50000,
"1958-08-08",
"female"
);


b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
Esse erro de entrada duplicadase deu por necessitarmos de primary keys unicas.
Quando um atrinuto possui essa especificação, o mesmo deve ser unico.

c) Foi necessário uma correção nas colunas passadas na primeira linha. 
d) O atributo name não estava sendo passado e uma de suas restrições é não poder ser nulo. 
e) Id já adicionado, o id precisa ser unico.

<h3> Exercício 3</h3>
a) SELECT name FROM Actor WHERE gender= "female";
b) SELECT salary from Actor WHERE name="Tony Ramos";
c) SELECT * FROM Actor WHERE gender="invalid";
d) SELECT id, name, salary FROM Actor WHERE salary>500;
f) A palavra name estava como nome, dessa forma a coluna não foi encontrada

<h3> Exercício 4</h3>
a) A query busca selecionar todos da tabela Ator onde o nome começa com 'a' ou 
começa com 'j' e também os salarios maiores que 300.000.
b) SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary<350000;
c) SELECT * FROM Actor WHERE name LIKE "%G%" or name LIKE "%g" 
d) SELECT * FROM Actor WHERE ((name LIKE "%G%" or name LIKE "%g") 
OR (name LIKE "%A%" or name LIKE "%a")) AND salary BETWEEN 350000 AND 900000

<h3> Exercício 5</h3>
O tipo text serve pra armazenar valores de texto longo. Entre os subtipos temos
o TINYTEXT, TEXT, MEDIUMTEXT e LONGTEXT. A principal diferença entre eles é o valor 
maximo de armazenamento. 

<h3> Exercício 6</h3>
a)SELECT id, name, review FROM Films WHERE id="004";
b) SELECT * FROM Films WHERE name="Bacurau";

<h3> Exercício 7</h3>
a)SELECT * FROM Films WHERE name LIKE "%vida%";
b)SELECT * FROM Films WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%" ;
c)SELECT * FROM Films WHERE realeseDate < "2020/08/10";
d)SELECT * FROM Films WHERE (realeseDate < "2020/08/10") AND review > 7;