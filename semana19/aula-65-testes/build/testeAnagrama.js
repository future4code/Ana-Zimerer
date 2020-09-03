"use strict";
function checkIfIsAnagram(firstInput, secondInput) {
    const firstWord = Array.from(firstInput);
    const secondWord = Array.from(secondInput);
    let firstAnagram = [];
    let secondAnagram = [];
    for (let i = 1; i <= firstWord.length; i++) {
        firstAnagram.push(firstWord[firstWord.length - i]);
    }
    for (let i = 1; i <= secondWord.length; i++) {
        secondAnagram.push(secondWord[secondWord.length - i]);
    }
    if (firstAnagram === firstWord && secondAnagram === secondWord) {
        console.log(firstWord + " é igual a " + firstAnagram);
        console.log(secondWord + " é igual a  " + secondAnagram);
        return true;
    }
    else {
        console.log(firstWord + "  não é igual a " + firstAnagram);
        console.log(secondWord + " não é igual a " + secondAnagram);
        return false;
    }
}
checkIfIsAnagram('arara', 'reviver');
