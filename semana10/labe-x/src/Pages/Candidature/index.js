import React from 'react';

export default function Candidature(){
    return(
        <div>
            <div>
                <label>Nome:</label>
                <input type="text"/>
                <label>Profissão:</label>
                <input type="text"/>
                <label>Pais:</label>
                <input type="text" />                
                <label>Porque você merece essa vaga?</label>
                <textarea />
            </div>
        </div>
    );
}