import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import logo from '../../Imgs/logo.PNG'
import { useHistory} from 'react-router-dom'

const Head = styled.div`
    width: 99.5%;
    height: 20vh;
    border: 1px solid black;
    margin-top:5px;
    margin-left: 2.5px;
    background-color: #03A696;    
    font-weight: bold;
    display: flex;
    justify-content: start;
    align-items: center; 
    img{
        margin-left: 50px;
        margin-top: 0;
        width: 120px;
        height: 120px;
    }
    a{       
        margin: 15px;
        text-decoration: none;
        color: white;
        :hover{
            color:#F28705;
        }
    }
    p{
        display: flex;
        flex-direction: row;
    }
    span{
        display:flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        width: 700px;
        height: 5vh;
        button{
            height:5vh;
            margin: 10px;           
        }       
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
            <img src={logo} alt="logo"/> 
                 
                <a href="/">Home</a>
                <a href="/trips/list">Viagens</a>
            <p>
                {login?(<><a href="/trips/create">Criar viagem</a>
                    <span>
                        <span>Logado!</span>
                        <button onClick={onClickLogout} class="waves-effect waves-light btn-small red">Sair!</button>
                    </span></>)
                :
                (<><a a href="/login">Login</a></>)}
            </p>
        </Head>
    );
}

