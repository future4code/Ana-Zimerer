import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from 'knex';
import {UserDataBase } from "./data/UserDataBase";
import IdGenerator from "./services/IdGenerator";
import Authenticator from './services/Authenticator'

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const userData = new UserDataBase()
//userData.createUser("001", 'astrodev@labenu.com','112233')

app.post('/signup', async function(req: Request, res: Response){
    try{
        const {email, password} =req.body
        const id= IdGenerator.execute() as string
       

       // if(!email || !password){
       //   throw new Error("Todos os campos são obrigatórios")
       // }
        await userData.createUser(id, req.body.email, req.body.password)
        res.status(200).send({token: Authenticator.getTokenData(id)})
    }catch(error){
      res.status(400).send({message: error.message})
    }
})


//const token= Authenticator.generateToken({id:"banana"})
//console.log(token)
//const tokenData= Authenticator.getTokenData(token)
//console.log(tokenData)