import knex from 'knex';
import Knex from 'knex';

export default abstract class BaseDB{
    private static connection: Knex | null=null

}

//(pai) BaseDatabase: var connecttion: propriedade estatica que começa sendo nula.
//começa nula, só é alterada com o getConnection, só nessa hora se abre a conection.
// dois métodos: getConnection< pra abrir a conexão e destroy, pra fechar a conexão
//são metodos estaticos

//(filha) userDatabase: todos os métodos do endpoiint relacionado ao user
//editUser, createUser, getUserby id

//(filha) TaskDatabase: o mesmo. Todas as querys relacionadas ao task.
//createTask, add task.

//Cada método com as querys das classes filhas, precisa começar a conexão
//(getConnection) e finalizar a conexão (destroyConnection). Chamam isso da classe pai,
//BaseDatabase.