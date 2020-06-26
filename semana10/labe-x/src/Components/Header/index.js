import React from 'react'
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
`
export default function Header(){
    return (
        <Head>            
             <a href="http://localhost:3000/">Home</a>
             <a href="http://localhost:3000/trips/list">Viagens</a>
             <a href="http://localhost:3000/trips/create">Criar viagem</a>
             <a href="http://localhost:3000/login">Acesso restrito</a>
        </Head>
    );
}

