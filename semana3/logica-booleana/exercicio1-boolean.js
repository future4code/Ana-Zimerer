const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2 && bool3
console.log("a. false ", resultado)

//(true) && false
resultado = (bool2 || bool1) && !bool3
console.log("b. true && false = false ", resultado)

// true && true
resultado = !resultado && (bool1 || bool1)
console.log("c. true && true = true ", resultado)

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. false && false && false = false ", resultado)

console.log("e. Boolean ", typeof resultado)