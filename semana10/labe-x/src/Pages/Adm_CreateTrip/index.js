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
	width: 30vw;
	input,textarea, button{
		margin: 0.5px;
		width: 10vw;
	}
    h4, h5{
        margin: 25px;
    }
    button{
        width: 20vw;
    }
    label{
        font-size: 1em;
    }
`
export default function Adm_CreateTrip(){
    const history=useHistory();
    const [token, setToken]=useState()
    const [form, setForm]=useState({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })
    

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
            name: "Rave em Urano",
            planet: "Urano",
            date: "22/07/2022",
            description: "Djs convidados de toda a galáxia esperam por você nessa super viagem!",
            durationInDays: 552
        }
        api
            .post('trips', body, axiosConfig)
            .then(()=>{
                alert("Viagem criada")
            })
            .catch(()=>{
                alert('Complete os campos corretamente')     
            });  
            
    }

    const onChangeInputsForm=((event)=>{
        const {name, value}=event.target
        setForm({...form, [name]:value});
    })

    return(
        <ContainerRoot>
            <Forms>
                <h4>Cadastrar nova viagem</h4>
                <label>Nome da viagem</label>
                <input 
                    type="text"
                    name="name" 
                    value={form.name} 
                    pattern=""
			        title="Digite um nome válido"
                    onChange={onChangeInputsForm}
                    required/>
                <label>Planeta:</label>
                <input 
                    type="text"
                    name="planet" 
                    value={form.planet} 
                    pattern=""
			        title="Digite um planeta valido"
                    onChange={onChangeInputsForm}
                    required    
                />
                <label>Data:</label>
                <input 
                    type="text" 
                    name="date" 
                    placeholder="dd/mm/aaaa"
                    title="Digite uma data no formato XX/XX/XXXX"
                    value="22/07/2022"
                    />
                <label>Descrição:</label>
                <input 
                    type="text"
                    name="description" 
                    value={form.description} 
                    pattern="[A-Za-z ]{30,}"
                    placeholder={'Digite no mínimo 30 caracteres'}
                    title="Digite no mínimo 30 caracteres"
                    onChange={onChangeInputsForm}
                    required
                />
                <button onClick={onClickCreateTrip} class="btn-large waves-effect waves-light orange accent-3 ">CRIAR VIAGEM!</button>
            </Forms>
        </ContainerRoot>
    );
}