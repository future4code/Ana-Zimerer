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
export default function PerguntaOpcoes (props){ 
  return (
    <div>
    	<Pergunta>{props.pergunta}</Pergunta>
    	<Seletor>
		{props.opcoes.map(opcao => (
          <Opcoes value={opcao}>{opcao}</Opcoes>
        ))}
    	</Seletor>
	</div>  
); 
      
}
    
