import React, {useState} from 'react'
import api from '../../Service/api'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { ContainerRoot } from '../Adm_CreateTrip'

export const Forms =styled.form`
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20vw;
	button{
		margin: 2.5px;
		width: 9vw;
	}
`
export default function Adm_Login(){
	const [showSignUp, setShowSignUp]=useState(false);
	const [email, setEmail]=useState()
	const [password, setPassword]=useState()	
	const history=useHistory();

	const onClickShowSignUp=(()=>{
		setShowSignUp(true)
	})

	const onClickComebackToLogin=(()=>{
		setShowSignUp(false)
	})

	const onClickNewSignUp=((event)=>{
		event.preventDefault();	
		const body={
			email: email,
			password: password
		}
		api
			.post('/signup', body)
			.then(()=>{
				alert(`Cadastro de ${email} realizado com sucesso!`)
				
			})
			.catch((error)=>{
				alert(error)
		})	

		onClickLogin();
	})

	const onClickLogin=(()=>{
		const body={
			email: email,
			password: password
		}
		api
			.post('/login', body)
			.then((response)=>{
				localStorage.setItem('token', (response.data.token)); 
				localStorage.setItem('login', (true))
				alert(`O usuario ${email} está logado! `)
				
			})
			.catch((error)=>{
				alert(`Este email ou senha não são válidos. Erro:${error} `)
		})
		history.push('trips/list')
	})
	
	const onChangeInputEmail=((event)=>{
		setEmail(event.target.value)	
	})

	const onChangeInputPassword=((event)=>{
		setPassword(event.target.value)	
	})
	
    return(
		<ContainerRoot>
        <Forms>
          	<label>Email:</label> 
          	<input value={email} type="email" onChange={onChangeInputEmail}/>
          	<label>Senha:</label>
          	<input value={password} type="password" onChange={onChangeInputPassword}/>
          	{showSignUp?
			  	<> 
          	  		<label>Confirme a senha:</label>
          	  		<input type="number"/>  
          	  		<button onClick={onClickNewSignUp}>Cadastrar</button>  
			  		<button onClick={onClickComebackToLogin}> Voltar ao login! </button> 
          		</> : 
          		<>
				    <button onClick={onClickLogin}>Entrar</button> 
			  		<button onClick={onClickShowSignUp}>Criar um novo cadastro!</button>          	  		
          		</>
            }            
		</Forms>
		</ContainerRoot>
    )
}