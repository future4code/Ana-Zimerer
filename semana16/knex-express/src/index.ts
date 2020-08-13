import knex from "knex";
import dotenv from "dotenv";
import express, {Request, Response} from "express";

import { AddressInfo } from "net";

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

//QuantityOfActorsByGender('male')

const updateSalary= async(id:string, salary: number): Promise<void>=>{
    try{
        await connection('Actor')
        .update({
            salary: salary
        })
        .where("id", id)
        console.log('Sucesso ao atualizar salário pelo id')
    }catch{
        console.log('Erro ao atualizar salário pelo id')
    }   
}
//updateSalary("010", 700000)

const deleteActorById=async(id:string): Promise<void>=>{
    try{
        await connection('Actor')
        .delete()
        .where("id", id)
        console.log('Sucesso ao deletar ator')
    }catch{
        console.log('Erro ao deletar ator')
    }
}
//deleteActorById('006')

const averagesSalaryByGender= async(gender:string): Promise<any>=>{
    try{
        const result= await connection('Actor')
        .avg(
            "salary as average"
        )
        .where("gender", gender)
        console.log(result)
    }catch{
        console.log('Erro ao atualizar salário pelo id')
    }   
}
//averagesSalaryByGender('male')

const app = express();
app.use(express.json())


app.get('/actor', async (req: Request, res: Response)=>{
    try{
        const count = await QuantityOfActorsByGender(req.query.gender as string);
        res.status(200).send({
            quantity: count,
        });        
    }catch(error){
        res.status(400).send({
            message: error.message,
        });
    }
})


