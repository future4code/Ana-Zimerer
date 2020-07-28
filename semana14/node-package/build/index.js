"use strict";
const nome = process.argv[2];
const idade = Number(process.argv[3]);
console.log('Seu nome é ' + nome + ' e sua idade é ' + idade);
const idadeMaisSete = (idade + 7);
console.log("Olá, " + nome + "! Você tem " + idade + " anos. Em sete anos você terá " + idadeMaisSete);
