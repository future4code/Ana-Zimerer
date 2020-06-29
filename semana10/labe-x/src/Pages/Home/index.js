import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import 'materialize-css/dist/css/materialize.min.css'

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
                <button onCLick={onCLickUserAccess} class="btn waves-effect waves-light orange accent-3 " >Explorar viagens!</button>
            </Link>
            <Link to={"/login"}>
                <button onClick={onClickAdmAccess} class="btn waves-effect waves-light red">Acessar área restrita</button>
            </Link>
        </Div>
    )
}