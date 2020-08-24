import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness{   
    public async createUser(user:any){
        try{
            const idGenerator = new IdGenerator();
            const hashManager = new HashManager();
            const userDatabase = new UserDatabase();
            const authenticator = new Authenticator();
            
            if(!user.name || !user.email || !user.password || !user.role){
                throw new Error("Todos os campos são obrigatórios")
            }

            if(user.password.length>6){
                throw new Error("Sua senha deve ter pelo menos 6 dígitos")
            }
            if(user.email.indexOf('@')=== -1){
                throw new Error("Digite um email válido")
            }

            const id= idGenerator.generate()
            const hashPassword= await hashManager.hash(user.password)
            await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role)
            const token = authenticator.generateToken({id});

            return token;
        }catch(error){
            throw new Error(error.message || "Erro ao criar usuário")
        }


    }
}