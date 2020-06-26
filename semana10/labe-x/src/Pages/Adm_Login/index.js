import React, {useState} from 'react'
import api from '../../Service/api'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

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

	const onClickNewSignUp=(()=>{		
		const body={
			email: email,
			password: password
		}
		api
			.post('/signup', body)
			.then(()=>{
				alert('Adm cadastrado')
				onClickLogin();
			})
			.catch((error)=>{
				alert(error)
			})		
	})

	const onClickLogin=(()=>{
		const body={
			email: email,
			password: password
		}
		api
			.post('/login', body)
			.then((response)=>{
				localStorage.setItem('token', JSON.stringify(response.data.token)); 
				alert('Logado')
			})
			.catch((error)=>{
				alert(error)
		})
		history.push('trips/list')
	})

	const onChangeInputEmail=((event)=>{
		setEmail(event.target.value)	
	})

	const onChangeInputPassword=((event)=>{
		setPassword(event.target.value)	
		console.log(password)	
	})
	
    return(
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
			  		<button onClick={onClickComebackToLogin}>voltar</button> 
          		</> : 
          		<>
			  		<button onClick={onClickShowSignUp}>Não tenho cadastro</button>
          	  		<button onClick={onClickLogin}>Entrar</button> 
          		</>
            }
            
		</Forms>
    )
}