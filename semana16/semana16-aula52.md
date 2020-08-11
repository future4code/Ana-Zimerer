<h3>EXERCÍCIO 1</h3>
<p> a) Na tabela Actor, deta a coluna salary. </p>
<p> b) Altera o nome do atributo gender para sex, do tipo varchar(6) </p>
<p> c) Alterar o tipo da propriedade gender da tabela para varchar(6) </p>
<p>d) ALTER TABLE Actor CHANGE name name VARCHAR(100);</p>

<h3>EXERCÍCIO 2</h3>
a) 

```
UPDATE Actor 
SET name = "Montenegro",
birth_date = "1956-08-19"
WHERE id= "003"; 
```
b) 
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juiana Paes"
WHERE name = "JULIANA PÃES";
```
c) 
```
UPDATE Actor 
SET name= "Vanessa Camargo",
birth_date= "2018-09-15",
salary= 780000,
gender= "female"
WHERE id="005";
```
d) O erro diz que não há parâmetros conhecidos, não encontra o aributo age.
```
UPDATE Actor 
SET age= 18,
birth_date= "2018-09-15",
salary= 780000,
gender= "female"
WHERE id="005";
```
<h3> EXERCÍCIO 3 </h3>
a) 

```
DELETE FROM Actor WHERE name= "Montenegro";
```
b) 
```
DELETE FROM Actor WHERE (gender="male" AND salary>1000000);
```

<h3>EXERCÍCIO 4 </h3>
a)

```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary) FROM Actor WHERE gender="female";
```
c) 
```
SELECT COUNT(*) FROM Actor WHERE gender="female";
```
d)
```
SELECT SUM(salary) FROM Actor;
```

<h3>EXERCÍCIO 5</h3>
a) O group by compara uma coluna ou um atributo, em todos os tipos que ele pode ter. Como o gender só possui masculino e feminino e como usamos a função COUNT, o resultado foi uma conta de quantos homens e quantas mulheres haviam nos registros. 
