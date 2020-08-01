//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela.
// Tente atribuir um número a esta variável.O que acontece?
// R: a execução não é completada e aparece um erro, dizendo que o numero não é uma string 
var ana = {
    nome: 'Ana',
    idade: 25,
    corFavorita: 'Azul'
};
var joao = {
    nome: 'Joao',
    idade: 21,
    corFavorita: 'Preto'
};
var maria = {
    nome: 'Maria',
    idade: 41,
    corFavorita: 'Amarelo'
};
//e)Apenas escolher entre as cores do arco-íris, utilizando enum
var CORESPRIMARIAS;
(function (CORESPRIMARIAS) {
    CORESPRIMARIAS["AZUL"] = "Azul";
    CORESPRIMARIAS["AMARELO"] = "Amarelo";
    CORESPRIMARIAS["VERMELHO"] = "Vermelho";
})(CORESPRIMARIAS || (CORESPRIMARIAS = {}));
var anamaria = {
    corFavorita: CORESPRIMARIAS.AMARELO
};
