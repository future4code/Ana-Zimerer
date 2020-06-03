import React from 'react';
import axios from 'axios';


class CardRegister extends React.Component{
	state={		
		name: '',
    	email: ''		
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

    //onChanges
    onChangeInputUsuario =(event)=>{
        this.setState({name: event.target.value})
    }
    OnChangeInputEmail =(event)=>{
        this.setState({email: event.target.value})
    }

    //onClicks
	onClickSalvar=(event)=>{
		const axiosConfig={
			headers: {
				Authorization: "anapaula-zimerer-mello"
			}
		};

		const body={

			name: this.state.name,
			email:this.state.email
		};
		axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
		body,
		axiosConfig
		)
		.then (()=>{
			response.data
			alert('Usuario cadastrado')
		})
		.catch ((erro) =>{
			alert('erro')
		})
	
	}  

    render(){   
		 
       return (        
            <div>
              <input
			  	type={'text'}
                value={this.state.name}
                placeholder={"Usuario"}
                onChange={this.onChangeInputUsuario}
              />
              <input
			  	type={'text'}
                value={this.state.email}
                placeholder={"Email"}
                onChange={this.onChangeInputEmail}
              />
              
              <button onClick={this.OnClickSalvar}>Salvar</button>
            </div>
        );
    }
}

export default CardRegister;