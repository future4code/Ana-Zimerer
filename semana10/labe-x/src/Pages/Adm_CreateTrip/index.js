import React from 'react';

export default function Adm_CreateTrip(){
    return(
        <div>
            <div>
                <label>Nome da viagem</label>
                <input type="text"/>
                <label>Planeta:</label>
                <input type="text"/>
                <label>Data:</label>
                <input type="date" />
                <input placeholder="upload de imagem"/>
                <label>Descrição:</label>
                <textarea />
            </div>
        </div>
    );
}