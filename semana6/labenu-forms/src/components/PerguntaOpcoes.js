import React from 'react';
import styled from 'styled-components';

const Opcoes= styled.option`
	color: violet;
    width: 20vw;
	
`
const Pergunta= styled.p`
  text-align: center;
	width: 20vw;
	margin: 6px;
`
const Seletor= styled.select`
  text-align: center;
	width: 20vw;
	margin: 6px;
`
class PerguntaOpcoes extends React.Component{
    state={
        perguntas: [""],
        opcoes: [""]
    }
    
    render() {        
        const listaDePerguntas = this.state.perguntas.map((pergunta, index, array) => {
          return (
            <div>
                <Pergunta>{this.props.pergunta}</Pergunta>
                <Seletor>
                    <Opcoes value={this.props.opcoes}/> 
                </Seletor>
            </div>                 
          );
        }); 

        //const listaDeOpcoes = this.state.opcoes.map((opcao) => {
        //    return
        //    {this.props.opcoes}                                            
        //   }); 
//
        return (
        <div>
            {listaDePerguntas}           
        </div>
        );
      }
    }
    
export default PerguntaOpcoes;