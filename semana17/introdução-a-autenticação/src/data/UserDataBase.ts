import {connection} from '../index'

export class UserDataBase{
    private connection= connection
    private static TABLE_NAME = "aula55_user"

    public async createUser(
        id:string,
        email: string,
        password: string)
    :Promise<void> {
        await this.connection
        .insert({
            id, email, password
        })
        .into(UserDataBase.TABLE_NAME)
        console.log('Usuário cadastrado')
    }
}