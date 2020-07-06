import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta/PerguntaAberta';

const Formulario= styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 20vw;

`


class Etapa2 extends React.Component{
    render (){
        return (  
        <Formulario>
            <h1>ETAPA 2</h1>
            <PerguntaAberta pergunta={"5. Qual o seu curso?"} />
            <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />                  
        </Formulario>   
    );    
 }
}

export default Etapa2;