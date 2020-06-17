import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta/PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';

const Formulario= styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 20vw;
`

class Etapa1 extends React.Component{
    render (){
        return(                       
            <Formulario>
                <h1>ETAPA 1</h1>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual seu email?"} />
                <PerguntaOpcoes  
                    pergunta={'Qual sua escolaridade'}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}                 
                />            
            </Formulario>           
        );        
    }
}

export default Etapa1;