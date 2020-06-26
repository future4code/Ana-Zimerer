import React from 'react'
import styled from 'styled-components'

export const ContainerRoot =styled.div`	
    display:flex;
    justify-content: center;
`

export const Forms =styled.form`
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 20vw;
	input,textarea, button{
		margin: 2.5px;
		width: 15vw;
	}
`
export default function Candidature(){
    return(
        <ContainerRoot>
            <Forms>
                <label>Nome:</label>
                <input type="text"/>
                <label>Profissão:</label>
                <input type="text"/>
                <label>Pais:</label>
                <input type="text" />                
                <label>Porque você merece essa vaga?</label>
                <textarea />
                <button>ME CANDIDATAR!</button>
            </Forms>
        </ContainerRoot>
    );
}