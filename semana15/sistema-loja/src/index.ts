//1) 
//a) Não seria possível imprimir o password pois não há método para isso
//b) A mensagem foi impressa uma unica vez
//import User from './ClassUser';
//
//const newUser:User = new User(
// 'a', 'ana.zimerer', 'Ana','oi')
//
// console.log(
// newUser.getEmail(),
// newUser.getId(),
// newUser.getName())

//2) a e b) Foi impresso uma vez o construtor da 
//classe user e em seguida o construtor da classe Customer.
//import Customer from './ClassCustomer'
//
//const newCustomer:Customer = new Customer(
//'a', 'ana.zimerer', 'Ana','oi', 'meucartao')
//
//console.log(newCustomer.getCreditCard())

//3) Sim, foi possivel imprimir o passorword
//import Customer from './ClassCustomer'
//const newCustomer:Customer = new Customer(
//'a', 'ana.zimerer', 'Ana','oi', 'meucartao')
//
//console.log(newCustomer.getCreditCard())

//4) 
//import Customer from './ClassCustomer'
//const newCustomer:Customer = new Customer(
//'a', 'ana.zimerer', 'Ana','oi', 'meucartao')
//
//newCustomer.introduceYourself()

//5)
import Customer from './ClassCustomer'
const newCustomer:Customer = new Customer(
'a', 'ana.zimerer', 'Ana','oi', 'meucartao')

newCustomer.introduceYourself()