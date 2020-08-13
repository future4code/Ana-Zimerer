<h3>EXERCÍCIO 01</h3>
<p>a) Uma chave estrangeira é um valor que conecta duas tabelas. </p>
b)

```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Films(id)
);

INSERT INTO Rating VALUES
("001", "Achei um filme previsível", 7.3, "003")
;

INSERT INTO Rating VALUES
("002", "Uma obra prima da brasileira", 10, "004")
;
```
<p>c) O resultado da query indica que não há uma foreign key correspondente, que a foreign key falhou. A foreign key é o valor de busca da tabela films, se ele está incorreto, esse erro é previsível. </p>

d) 
```
ALTER TABLE Films 
DROP COLUMN review;
```
<p>e) O Mysql não permite que seja apagado uma linha que esteja vinculada a alguma outra tabela pela foreign key. Para que seja possivel deletar, todas as referências vindas de outra tabela devem ser excluídas antes.</p>

```
DELETE FROM Films
WHERE name= "Bacurau";
```

<h3> EXERCÍCIO 2 </h3>
a) Nessa tabela estamos relacionando Atores com filmes. A tabela m
MovieCast terá duas informações, o id do filme e o id do ator, que serão recebidos de outras duas tabelas. Essa tabela será então a relação entre as duas ultimas. <p>

```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
b) 
```
INSERT INTO MovieCast VALUES
("003","001"),("004","002"),("003","004"),
("003","005"),("004","010"),("004","007")
;
```
<p>c) Ao receber um valor de foreign key inexistente, não é possivel criar a relação entre filme e ator </p>

<p>d) O Mysql não permite que seja apagado uma linha que esteja vinculada a alguma outra tabela pela foreign key. Para que seja possivel deletar, todas as referências vindas de outra tabela devem ser excluídas antes. </p>

<h3> EXERCÍCIO 3 <h3>
<p>c) Ao receber um valor de foreign key inexistente, não é possivel criar a relação entre filme e ator </p>
<p>c) Ao receber um valor de foreign key inexistente, não é possivel criar a relação entre filme e ator </p>
<p>c) Ao receber um valor de foreign key inexistente, não é possivel criar a relação entre filme e ator </p>