import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import {HashManager} from '../services/HashManager'

const app = express();
app.use(express.json());

export default async function signup(req:Request, res:Response){
    try {
      // Item b. Validação do email
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      // Item c. Validação da senha
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      };
  
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();
      
      const cypherPassword= await new HashManager().hash(id)

      const userDb = new UserDatabase();
      await userDb.createUser(id, userData.email, cypherPassword, role);
  
      const authenticator = new Authenticator();
      const token = authenticator.generateToken({
        id,
        userData.role
      });
  
      res.status(200).send({
        token,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };