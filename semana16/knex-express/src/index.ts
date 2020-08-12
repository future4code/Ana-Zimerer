import knex from "knex";
import dotenv from "dotenv";
import express from "express";

import { AddressInfo } from "net";
import { promises } from "fs";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST, 
    port: Number(process.env.DB_PORT) ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

async function createTable(): Promise<void>{
    try{
        await connection.raw(`
        CREATE TABLE Pokemon
        (
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            type VARCHAR(255) NOT NULL
        );
        `);
        console.log('Sucesso')
    }catch{
        console.log('Error')
    }
}

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

getActorById("007")



//const app = express();
//
//app.use(express.json());
//
//const server = app.listen(process.env.PORT || 3003, () => {
//  if (server) {
//    const address = server.address() as AddressInfo;
//    console.log(`Server is running in http://localhost:${address.port}`);
//  } else {
//    console.error(`Failure upon starting server.`);
//  }
//});