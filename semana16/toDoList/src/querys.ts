import {insertItens, searchItens} from './index';

//insertItens(`	
//CREATE TABLE ToDoListUser	
//	(	
//		id VARCHAR(3) PRIMARY KEY ,	
//        name VARCHAR(255) NULL,	
//        nickname VARCHAR(255) UNIQUE NOT NULL,
//		email VARCHAR(255) UNIQUE NOT NULL
//	);	
//`)

//insertItens(`	
//    CREATE TABLE ToDoListTask (
//        id VARCHAR(3) PRIMARY KEY, 
//        title VARCHAR(255) NOT NULL, 
//        description TEXT NOT NULL, 
//        status VARCHAR(255) NOT NULL DEFAULT "to_do",
//        deadline DATE NOT NULL,
//        creator_user_id VARCHAR(3) NOT NULL,
//        FOREIGN KEY (creator_user_id) REFERENCES ToDoListUser(id)
//);
//`)

//insertItens(`
//    INSERT INTO ToDoListUser VALUES
//    ("001", "Ana", "ana.laura", "analaura@ig.com");
//`)

//insertItens(`
//    INSERT INTO ToDoListTask VALUES
//    ("001", "Estudar", "Lista de Calculo 3", "to_do",Date("2020-08-18"),"001");
//`)

searchItens(`
    SELECT * FROM ToDoListUser;
`)

//searchItens(`
//    SELECT * FROM ToDoListTask;
//`)
