import React from 'react';
import './CardLateral.css';

function CardLateral(props){
    return (
        <div className="bigcard-container-lateral">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardLateral;