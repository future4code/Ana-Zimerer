import express, { Request, Response } from "express"
import dotenv from "dotenv"
import { AddressInfo } from "net"
import { IdGenerator } from "./services/IdGenerator"
import { UserDatabase } from "./data/UserDatabase"
import { Authenticator } from "./services/Authenticator"
import {HashManager} from './services/HashManager'
import signup from './endpoints/signup'
import login from "./endpoints/login"

dotenv.config();

const app = express();

app.use(express.json());

app.post("user/signup", signup)
app.post("login", login)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

