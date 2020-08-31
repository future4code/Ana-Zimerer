import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import {HashManager} from '../services/HashManager'
import { hash } from "bcryptjs";

const app = express();
app.use(express.json());

export default async function login(req: Request, res: Response){
    try {
      // Item b. Validação do email
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
      
      
      const userDatabase = new UserDatabase();
      const user = await userDatabase.getUserByEmail(userData.email);
      
      const passwordIsCorrect = new HashManager().compare(userData.password, user.password)

      if (!user || !passwordIsCorrect) {
        throw new Error("Invalid password");
      }
  
      const authenticator = new Authenticator();
      const token = authenticator.generateToken({
        id: user.id,
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