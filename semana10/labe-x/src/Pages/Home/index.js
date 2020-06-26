import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Div=styled.div`
    display: flex;
    justify-content: center;

    align-items: center;
    button{
        margin: 10px;
    }
`
export default function Home(){
    const [userAccess, setUserAccess]= useState(false)
    const [admAccess, setAdmAccess]= useState(false)

    const onCLickUserAccess=(()=>{
        setUserAccess(!userAccess)
    })

    const onClickAdmAccess=(()=>{
        setAdmAccess(!admAccess)
    })
    
    return(
        <Div>
            <Link to={"/trips/list"}>
                <button onCLick={onCLickUserAccess}>Explorar viagens!</button>
            </Link>
            <Link to={"/login"}>
                <button onClick={onClickAdmAccess}>Acessar área restrita</button>
            </Link>
        </Div>
    )
}