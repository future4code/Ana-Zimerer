import moment from 'moment'
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
//import Customer from './ClassCustomer'
//const newCustomer:Customer = new Customer(
//'a', 'ana.zimerer', 'Ana','oi', 'meucartao')
//newCustomer.introduceYourself()

//6) a) O construtor user foi impresso uma vez
//b) Apenas a data de admissao e a base salarial
//import moment from 'moment'
//import Employee from './ClassEmployee'
//const newEmployee:Employee = new Employee(
// 'id','ana@gmail', 'Ana Paula','123456',moment(), 1500)
//
//console.log(newEmployee.getAdmissionDate())

//7)
//import moment from 'moment'
import Employee from './ClassEmployee'
//const newEmployee:Employee = new Employee(
// 'id','ana@gmail', 'Ana Paula','123456',moment(), 1500)
//
//console.log(newEmployee.calculateTotalSalary())

//8) a) id, email, nome, senha, data de admissao e base salarial
//b) apenas as propriedade do employee, que estão protegidas
//import moment from 'moment'
//import Seller from './ClassSeller'
//const newSeller: Seller = new Seller(
// 'id','ana@gmail', 'Ana Paula','123456',moment(), 1500)
//
//newSeller.showProperties()

//9)
//import Seller from './ClassSeller'
//const newSeller: Seller = new Seller(
// 'id','ana@gmail', 'Ana Paula','123456',moment(), 1500)
//
//newSeller.setSalesQuantity(60)

//10)a) alterei o construtor da classe seller para receber a sales quantity
// e a soma funcionou normalmente

import Seller from './ClassSeller'
const newSeller: Seller = new Seller(
'id','ana@gmail', 'Ana Paula','123456',moment(), 1500, 40)
console.log('Salário total: ' + newSeller.calculateTotalSalary())