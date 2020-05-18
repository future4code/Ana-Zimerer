import React from 'react';
import styled from 'styled-components';

const Formulario= styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 20vw;

`
const InputNome= styled.input`
	width: 20vw;
	margin: 6px;
`
const InputIdade= styled.input`
	width: 20vw;
	margin: 6px;
`
const InputEmail= styled.input`
	width: 20vw;
	margin: 6px;
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
                <label>Qual seu nome? </label> <InputNome/>
                <label>Qual sua idade?</label> <InputIdade/>
                <label>Qual seu email? </label> <InputEmail/>
                <label>Qual Sua escolaridade? </label>
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