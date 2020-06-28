import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Head = styled.div`
    width: 98%;
    height: 10vh;
    border: 1px solid black;
    margin-top:5px;
    background-color: #03A696;    
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center; 
    a{       
        margin: 5px;
        text-decoration: none;
        color: white;
        :hover{
            color:#F28705;
        }
    }
    p{
        justify-content: flex-end;
    }
`
export default function Header(){   
    const [token, setToken]=useState()
    const [login, setLogin]=useState()  
    
    useEffect(()=>{
        setToken(localStorage.getItem("token"))
        if ((token === null) || (token === "") || (token === undefined)){
            setLogin(false)
            localStorage.setItem('login', false)      
         }else{
            setLogin(true)
            localStorage.setItem('login', true)
         }     
    }, [localStorage.getItem('login')]);

    const onClickLogout =() =>{
        localStorage.removeItem("token")
        localStorage.setItem('login', false) 
        setLogin(false)       
    }

    return (
        <Head>            
            <a href="http://localhost:3000/">Home</a>
            <a href="http://localhost:3000/trips/list">Viagens</a>
            <p>
                {login? <>
                <a href="http://localhost:3000/trips/create">Criar viagem</a>
                <label>Logado!</label><button onClick={onClickLogout}>Sair!</button></> :
                <><a href="http://localhost:3000/login" >Login</a></>}
            </p>
        </Head>
    );
}

