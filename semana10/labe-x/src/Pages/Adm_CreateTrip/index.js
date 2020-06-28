import React, { useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import api from '../../Service/api'

export const ContainerRoot =styled.div`	
    display:flex;
    justify-content: center;
`

export const Forms =styled.form`
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20vw;
	input,textarea, button{
		margin: 2.5px;
		width: 15vw;
	}
`
export default function Adm_CreateTrip(){
    const [token, setToken]=useState()
    const history=useHistory();

    useEffect(()=>{
        setToken(localStorage.getItem('token'))

      if (token === null){
          alert('Indique um email e senha para continuar')
          history.push('/login')
      }   
    }, [token]);

    const onClickCreateTrip = (event) =>{
        event.preventDefault();
        const axiosConfig={
            headers:{
                auth: token
            }
        }

        const body={
            name: "Ano novo em Mercúrio",
            planet: "Mercúrio",
            date: "31/12/2019",
            description: "Venha passar a virada pertinho do Sol!",
            durationInDays: 7
        }
        api
            .post('trips', body, axiosConfig)
            .then(()=>{
            })
            .catch((error)=>{
                alert('Complete os campos corretamente')
                history.push('/login')        
            });  
            
    }

    return(
        <ContainerRoot>
            <Forms>
                <label>Nome da viagem</label>
                <input type="text"/>
                <label>Planeta:</label>
                <input type="text"/>
                <label>Data:</label>
                <input type="date" />
                <input placeholder="upload de imagem"/>
                <label>Descrição:</label>
                <textarea />
                <button onClick={onClickCreateTrip}>CRIAR VIAGEM!</button>
            </Forms>
        </ContainerRoot>
    );
}