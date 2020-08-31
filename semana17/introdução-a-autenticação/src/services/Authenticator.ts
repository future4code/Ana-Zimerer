import * as jwt from 'jsonwebtoken'
 
//interface do payload
interface AuthenticationData{id: string}

export default abstract class Authenticator{
    static generateToken(input: AuthenticationData){
        return jwt.sign(
            {input}, //input da função
            process.env.JWT_KEY as string, //chave do token que precisa ser string
            {expiresIn: process.env.JWT_EXPIRES_IN} //tempo de expiração
        )
    }
    static getTokenData(token:string):any{
        const tokenData= jwt.verify(
            token,
            process.env.JWT_KEY as string
        )
        return tokenData as AuthenticationData
    }
}