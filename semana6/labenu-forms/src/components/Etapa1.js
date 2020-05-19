import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta/PerguntaAberta';

const Formulario= styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 20vw;
`
const SelecaoDeEscolaridade= styled.select`
	width: 20vw;
	margin: 6px;
`

class Etapa1 extends React.Component{
    render (){
        return(                       
            <Formulario>
                <h1>ETAPA 1</h1>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual seu email?"} />
                <SelecaoDeEscolaridade>  
                  <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                  <option value="Ensino médio completo">Ensino médio completo</option>
                  <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                  <option value="Ensino superior completo">Ensino superior completo</option>
                </SelecaoDeEscolaridade>                
            </Formulario>           
        );        
    }
}

export default Etapa1;