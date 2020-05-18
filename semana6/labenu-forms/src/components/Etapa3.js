import React from 'react';
import styled from 'styled-components';


const Formulario= styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 20vw;

`
const InputTerminouCurso= styled.input`
	width: 20vw;
	margin: 6px;
`
const SelecaoDeEscolaridade= styled.select`
	width: 20vw;
	margin: 6px;
`

class Etapa3 extends React.Component{
    render (){
        return (  
        <Formulario>
            <h1>ETAPA 3</h1>
            <label>Porque você não terminou um curso de graduação? </label> <InputTerminouCurso/>
            <label>Você fez algum curso complementar?</label> 
            <SelecaoDeEscolaridade>  
                  <option value="Nenhum">Nenhum</option>
                  <option value="Curso técnico">Curso técnico</option>
                  <option value="Curso inglês">Curso de inglês</option>                  
            </SelecaoDeEscolaridade>                 
        </Formulario>   
    );    
    }
}

export default Etapa3;