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
	width: 20vw;
	input,textarea, button{
		margin: 2.5px;
		width: 15vw;
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
                alert('se candidatou')
            }).catch((error)=>{
                alert(error)
        })   
    })
    
    const onChangeInputsForm=((event)=>{
        const {name, value}=event.target
        setForm({...form, [name]:value});
    })
    
    return(
        <ContainerRoot>
            <Forms>
                <label>Nome: </label>
                <input type="text" name="name" value={form.name} onChange={onChangeInputsForm}/>
                <label>Idade: </label>
                <input type="number" name="age" value={form.age} onChange={onChangeInputsForm}/>
                <label>Profissão:</label>
                <input type="text" name="profession" value={form.profession} onChange={onChangeInputsForm}/>
                <label>Pais:</label>
                <input type="text" name="country" value={form.country} onChange={onChangeInputsForm}/>                
                <label>Porque você merece essa vaga?</label>
                <input type="text" name="text" value={form.text} onChange={onChangeInputsForm}/>  
                <button onClick={onClickApplyToTrip}>Quero concorrer á vaga!</button>
            </Forms>
        </ContainerRoot>
    );
}