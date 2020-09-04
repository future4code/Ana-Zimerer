import { Authenticator } from './../services/Authenticator';
import { User } from './../model/User';
import { HashManager } from './../services/HashManager';
import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";


export class UserBusiness {

    async createUser(user: UserInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(user.password);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(id, user.email, user.name, hashPassword, user.role);

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    async getUserByEmail(input: LoginInputDTO) {
        const userDatabase = new UserDatabase();
        const userFromDb: User = await userDatabase.getUserByEmail(input.email);

        const hashManager = new HashManager();
        const passwordIsCorrect = await hashManager.compare(input.password, userFromDb.getPassword())

        if (!passwordIsCorrect) {
            throw new Error("Invalid Password")
        }

        const authenticator = new Authenticator();
        const token = await authenticator.generateToken({ id: userFromDb.getId(), role: userFromDb.getRole() })

        return token;
    }

}