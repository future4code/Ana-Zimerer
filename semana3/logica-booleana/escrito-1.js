//FAHRENHEIT PARA KELVIN
let kelvin = ""
let fahrenheit =77
kelvin = (fahrenheit - 32) * 5/9 + 273.15
console.log ("O valor de " +fahrenheit+ "°F em Kelvin é: "+kelvin+"°K")

// CELSIUS PARA FAHRENHEIT 
celsius = 80
fahrenheit= (celsius)*9/5 + 32
console.log ("O valor de " +celsius+ "°C em Fahrennheit é: "+fahrenheit+"°F")

//CELSIUS PARA FAHRENHEIT E KELVIN
celsius= 30
fahrenheit= (celsius)*9/5 + 32
kelvin = celsius + 273.15
console.log ("O valor de " +celsius+ "°C em Fahrennheit é de "+fahrenheit+"°F e em Kelvin é de " +kelvin+ "°K")

//USUÁRIO DIGITANDO O VALOR DE °C
celsius2 = prompt ("Digite o valor em Celsius para conversão")
fahrenheit= (celsius2)*9/5 + 32
kelvin = Number(celsius2) + 273.15
console.log("O valor de " +celsius2+ "°C em Fahrennheit é de "+fahrenheit+"°F e em Kelvin é de " +kelvin+ "°K")


