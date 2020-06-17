import React from 'react';
import styled from 'styled-components';

const Input= styled.input`
	width: 20vw;
	margin: 6px;
`
const Pergunta= styled.p`
  text-align: center;
	width: 20vw;
	margin: 6px;
`
class PerguntaAberta extends React.Component{
    state={
        perguntas: [""]
    }
    
    render() {        
        const listaDePerguntas = this.state.perguntas.map((pergunta) => {
          return (
            <div>
              <Pergunta>{this.props.pergunta}</Pergunta> 
              <Input/>
            </div>                 
          );
        });    
        return (
          <div>
            {listaDePerguntas}
          </div>
        );
      }
    }
    
export default PerguntaAberta;