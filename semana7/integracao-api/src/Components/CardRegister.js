import React from 'react';
import axios from 'axios';


class CardRegister extends React.Component{
	state={		
		name: '',
    	email: ''		
	}         
	  
	//onChanges
    onChangeInputUsuario =(event)=>{
        this.setState({name: event.target.value})
	}
	onChangeInputEmail =(event)=>{
        this.setState({email: event.target.value})
	}
	
    //onClicks
	OnClickSalvarUsuario=()=>{
		const axiosConfig={
			headers: {
				Authorization: "anapaula-zimerer-mello"
			}
		}

		const body={
			name: this.state.name,
    		email: this.state.email
		}
		axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
		body,
		axiosConfig
		).then(()=>{
			alert('Usuario enviado')
			this.setState({name: '', email: ''})
		}).catch((e)=>{
			alert(`Usuario não enviado. Erro:${e.data}`)
		})
		
	}  

    render(){   		 
       return (        
            <div>
              <input
			    value={this.state.name}
                placeholder={'Usuario'}
                onChange={this.onChangeInputUsuario}
              />
			   <input
			    value={this.state.email}
                placeholder={'E-mail'}
                onChange={this.onChangeInputEmail}
              />     	  
              
              <button onClick={this.OnClickSalvarUsuario}>Salvar</button>
            </div>
        );
    }
}

export default CardRegister;