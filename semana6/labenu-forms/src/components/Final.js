import React from 'react';
import styled from 'styled-components';

const Formulario= styled.div`
	display:flex;
	flex-direction: column;
	align-items: center;
	width: 40vw;

`
class Final extends React.Component{
    render (){
        return (  
        <Formulario>
            <h1>O FORMULÁRIO ACABOU</h1>
            <p>Muito obrigada por participar. Entraremos em contato!</p>                              
        </Formulario>   
    );    
    }
}

export default Final;