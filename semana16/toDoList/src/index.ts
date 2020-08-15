import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { userInfo } from "os";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

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

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export async function insertItens(query: string): Promise<void>{
  	try{
    	await connection.raw(query);	
    	console.log('Sucesso')	
    }catch(error){	
    	console.log('Error' + error)	
    }	
}

export async function searchItens(query: string): Promise<any>{
	try{
	  const result = await connection.raw(query);	
	  console.log(result[0])
	  return result[0]	
  }catch(error){	
	  console.log('Error' + error)	
  }	
}

/*CREATE USER*/
async function createNewUser(
	newId: string,
	newName: string, 
	newNickname: string, 
	newEmail: string): Promise<void> {
	if(newId && newName && newNickname && newEmail !== ""){
    	try {
    	    await connection
    	        .insert({
					id: newId,
					name: newName,
					nickname: newNickname,
    	            email: newEmail
    	        })
    	        .into("ToDoListUser")			
    	    console.log("Sucesso!")
    	} catch (error) {
    	    console.log(error)
		}
	}else{
		throw new Error("Campos inváldos. Preencha todos os dados")
	}
}

app.put("/user", async (req:Request, res:Response): Promise<void> =>{
	try{
		const userData={
			id: req.body.id,
			name: req.body.name,
			nickname: req.body.nickname,
			email: req.body.email
		}
		if(userData.id && userData.name && userData.nickname && userData.email !== ""){
			await createNewUser(userData.id,userData.name, userData.nickname, userData.email);
			res.status(200).send({message: "Usuário criado com sucesso!"});
		}else{
			res.status(400).send({message:"Preencha todos os campos"})
		}		
	}catch(error){
		res.status(400).send({message:error.message});
	}
})


/* GET USER */
async function getUserById(id: string){
	if(id!==""){
		try{
			const result= await connection 
			.select ('*') 
			.from ('ToDoListUser')
			.where("id", id)
			console.log(result)
			return result
		}catch(error){
			console.log(error)
		}
	}else{
		throw new Error("Id inváldo. Preencha todos os dados")
	}
}

app.get('/user/:id', async function (req: Request, res: Response) {
    try {
		const user = await getUserById(
            req.params.id as string
		)
		if((req.params.id !== "") && (user !== [])){	
			res.status(200).send({
				message: "Sucesso!",user
			})	
		}else{
			res.status(400).send({message: ("Informe um valor de id válido")})
		}
    } catch (error) {
        console.log(error)
        res.status(400).send({ message: error.message })
    }
})