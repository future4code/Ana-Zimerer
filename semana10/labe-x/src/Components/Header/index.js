import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    width: 98%;
    height: 10vh;
    border: 1px solid black;
    margin-top:5px;
    a{
        margin: 5px;
    }
`
export default function Header(){
    return (
        <Head>
          <a href="#">Home</a>
          <a href="#">Viagens</a>
          <a href="#">Criar viagem</a>
          <a href="#">Acessar Adm</a>
        </Head>
    );
}

