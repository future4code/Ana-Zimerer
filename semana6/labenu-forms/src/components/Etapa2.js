import React from 'react';
import styled from 'styled-components';

const Formulario= styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 20vw;

`
const InputCurso= styled.input`
	width: 20vw;
	margin: 6px;
`
const InputUnidadeDeEnsino= styled.input`
	width: 20vw;
	margin: 6px;
`

class Etapa2 extends React.Component{
    render (){
        return (  
        <Formulario>
            <h1>ETAPA 2</h1>
            <label>Qual seu curso? </label> <InputCurso/>
            <label>Qual a unidade de ensino?</label> <InputUnidadeDeEnsino/>                   
        </Formulario>   
    );    
    }
}

export default Etapa2;