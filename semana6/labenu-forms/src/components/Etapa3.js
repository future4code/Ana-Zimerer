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
class Etapa3 extends React.Component{
    render (){
        return (  
        <Formulario>
            <h1>ETAPA 3</h1>
            <PerguntaAberta pergunta={"Porque você não terminou um curso de graduação?"}/>            
            <PerguntaOpcoes 
                pergunta={'Você fez algum curso complementar?'}
                opcoes={[
                    "Nenhum",
                    "Curso técnico",
                    "Curso de inglês",
                ]}                                 
            />                 
        </Formulario>   
    );    
    }
}

export default Etapa3;