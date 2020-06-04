import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';


class CardList extends React.Component{
    state={
		users:[{
			id: '02ab59d3-910e-440a-a6ae-3d4b73b11b96',
			name: '',
        	email: ''   	
		}]	
	}
	
	componentDidMount = () =>{
		this.buscaListaDeUsuarios();
	}

	buscaListaDeUsuarios = ()=>{
		const axiosConfig={
			headers: {
				Authorization: "anapaula-zimerer-mello"
			}
		};

		axios
			.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',  
			axiosConfig
		)
		.then ((response)=>{
			this.setState({users: response.data})
			console.log('Buscando dados...')
		})
		.catch ((erro) =>{
		
		})
	}
    onClickDeleteUser=(id)=>{
		const axiosConfig={
			headers:{
				Authorization: "anapaula-zimerer-mello"
			}
		}
		axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, axiosConfig
		)
		.then(()=>{
			alert('Usuario deletado')
			this.buscaListaDeUsuarios()
		})	
    }
    render(){
        const listaDeUsuarios = this.state.users.map(user=> {
			return (
				<li>
					{user.name}
					<span onClick={() => {this.onClickDeleteUser(user.id)}}>X</span>                    
				</li>
			);
		})  
    	return(
   	 	    <>
   	 	        <p>Usuarios Cadastrados</p>
   	 	        <ul>
   	 	            {listaDeUsuarios}
   	 	        </ul>
   	 	    </>
   	 	);
	}
}
export default CardList;
a