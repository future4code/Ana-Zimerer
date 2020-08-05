import { Client } from "./Client";
import { Place } from "./Place";
import { Residence } from "./Residencial";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";

//1)a) Consegui visualizar as variaveis e não o retorno do método
//const client: Client ={
//    name: 'Ana',
//    registrationNumber: 1,
//    consumedEnergy: 100,
//
//    calculateBill:()=>{
//        return 2;
//    }
//}
//console.table(client)

//2) a) O erro gerado pelo typescript indica que uma classe abstrata não pode ser instanciada
//const placezinho =new Place()
//b) para resolver esse problena, é interessante criar classes filhas para que elas sim passem parametros

//3) a) é necessário criar filhas para elas, pra que elas possam ser instanciadas.
//b) O place precisa ser uma classe pois exige acesso restrito a um de seus atributos: o cep!
//Por isso foi escolhido pra ser uma classe abstrata, que não pode ser instanciada, e isso é otimo! 
//Por não precisarmos mudar o valor do cep e também porque tem classes filhas com os atributos que são necessarios,
//então é só instanciar eles! Ou seja, todos os atributos já podem ser utilizados e acessados
//c) O Place é uma classe abstrata pois ela não precisa ser instanciada, já tem outras classes filhas 
//que podem ser instanciadas e que tbm possuem seus próprios métodos.
//const house: any= new Residence(1, '111')
//console.log(house)
//
//const market: any= new Commerce(1, '222')
//console.log(market)
//
//const factory: any= new Industry(1, '333')
//console.log(factory)

//4) name, registrationNumber, consumedEnergy, cpf. Como métodos temos o calculateBill