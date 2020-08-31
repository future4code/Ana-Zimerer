import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import {HashManager} from '../services/HashManager'

const app = express();
app.use(express.json());

app.get("/user/profile", async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
      const authenticator = new Authenticator();
      const authenticationData = authenticator.getData(token);
  
      const userDb = new UserDatabase();
      const user = await userDb.getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });