import React from 'react';
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
export default function Adm_CreateTrip(){
    return(
        <ContainerRoot>
            <Forms>
                <label>Nome da viagem</label>
                <input type="text"/>
                <label>Planeta:</label>
                <input type="text"/>
                <label>Data:</label>
                <input type="date" />
                <input placeholder="upload de imagem"/>
                <label>Descrição:</label>
                <textarea />
                <button>CRIAR VIAGEM!</button>
            </Forms>
        </ContainerRoot>
    );
}