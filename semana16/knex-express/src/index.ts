import knex from "knex";
import dotenv from "dotenv";
//import express from "express";
//
//import { AddressInfo } from "net";
//import { promises } from "fs";
//
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

const getActorByName= async(name: string): Promise<void>=>{
    const result= await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
    `)
    console.table(result[0])
}

//getActorByName("Faustão")

const QuantityOfActorsByGender= async(gender:string): Promise<any>=>{
    const result= await connection.raw(`
        SELECT COUNT (*) FROM Actor WHERE gender= '${gender}'
    `)
    console.table(result[0])
}

QuantityOfActorsByGender('male')