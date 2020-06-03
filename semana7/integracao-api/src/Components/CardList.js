import React from 'react';
import axios from 'axios';

class CardList extends React.Component{
    state={
		users:[{
			name: '',
        	email: ''   	
		}]	
	}
	
	componentDidMount = () =>{
		const axiosConfig={
			headers: {
				Authorization: "anapaula-zimerer-mello"
			}
		};

		//const body={
		//	name: this.state.name,
		//	email:this.state.email
		//};

		axios
			.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',  
			axiosConfig
		)
		.then ((response)=>{
			this.setState({user: response.data})
			alert('Ae')
		})
		.catch ((erro) =>{
			alert('erro')
		})
	}

	
    onClickDeleteUser=(name)=>{
		//axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/id')
	
    }
    render(){
        const listaDeUsuarios = this.state.users.map(users => {
			return (
				<li>
					{users.name}
					<span onClick={() => {this.onClickDeleteUser(users.name)}}>X</span>                    
				</li>
			);
		})  
    	return(
   	 	    <div>
   	 	        <p>Usuarios Cadastrados</p>
   	 	        <ul>
   	 	            {listaDeUsuarios}
   	 	        </ul>
   	 	    </div>
   	 	);
	}
}
export default CardList;