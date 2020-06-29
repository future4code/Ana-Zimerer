import React, { useState } from 'react'
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
	width: 40vw;
	input,textarea, button{
		margin: 0.5px;
		width: 15vw;
	}
    h4, h5{
        margin: 10px;
    }
    button{
        width: 20vw;
    }
    label{
        font-size: 1em;
    }
`
export default function Candidature(){
    const [form, setForm]=useState({
        name:'',
        age: '',
        text:'',
        profession: '',
        country: '',
    })

const onClickApplyToTrip= ((event)=>{
        event.preventDefault();
        const id = localStorage.getItem("idOfTrip")
        console.log('id sem '+ id)
        const body={
            name: form.name,
            age: form.age,
            applicationText: form.text,
            profession: form.profession,
            country: form.country,
        }
        api
            .post(`/trips/${id}/apply`, body)
            .then(()=>{
                alert(`Você se candidatou á ${localStorage.getItem("nameOfTrip")} com sucesso!`)
            }).catch((error)=>{
                alert('Cadastro inválido')
        })   
    })
    
    const onChangeInputsForm=((event)=>{
        const {name, value}=event.target
        setForm({...form, [name]:value});
    })
    
    return(
        <ContainerRoot>
            <Forms>
                <h4>Ficha de cadastro</h4>
                <h5>Viagem: {localStorage.getItem("nameOfTrip")}</h5>
                <label>Nome: </label>
                <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    pattern="[A-Za-z ]{3,}"
			        title="Digite um nome válido"
                    onChange={onChangeInputsForm}
                    required/>
                <label>Idade: </label>
                <input 
                    type="number" 
                    name="age" 
                    value={form.age} 
                    min="18"
                    max="100"
                    title="Digite uma idade entre 18 e 100 anos"
                    onChange={onChangeInputsForm}
                    required
                />
                <label>Profissão:</label>
                <input 
                    type="text" 
                    name="profession" 
                    value={form.profession} 
                    pattern="{10,}"
                    title="Digite uma profissão com no mínimo 10 letras"
                    onChange={onChangeInputsForm}
                    required
                />
                <label>Pais:</label>
                <input type="text" name="country" value={form.country} onChange={onChangeInputsForm}/>                
                <label>Porque sou um bom candidato(a)?</label>
                <input type="text" name="text" value={form.text} onChange={onChangeInputsForm}/>  
                <button onClick={onClickApplyToTrip} class="btn-large waves-effect waves-light orange accent-3 " >Quero concorrer á vaga!</button>
            </Forms>
        </ContainerRoot>
    );
}