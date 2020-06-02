import React from 'react';
import axios from 'axios';


class CardRegister extends React.Component{
    state={        
        nomeUsuario: '',
        emailUsuario: ''           
    }   

    //onChanges
    onChangeInputUsuario =(event)=>{
        this.setState({nomeUsuario: event.target.value})
    }
    onChangeInputEmail =(event)=>{
        this.setState({emailUsuario: event.target.value})
    }

    //onClicks
    OnClickSalvar=(event)=>{

    }  

    render(){      
       return (        
            <div>
              <input
                value={this.state.nomeUsuario}
                placeholder={"Usuario"}
                onChange={this.onChangeInputUsuario}
              />
              <input
                value={this.state.emailUsuario}
                placeholder={"Email"}
                onChange={this.onChangeInputEmail}
              />
              
              <button onClick={this.OnClickSalvar}>Salvar</button>
            </div>
        );
    }
}

export default CardRegister;