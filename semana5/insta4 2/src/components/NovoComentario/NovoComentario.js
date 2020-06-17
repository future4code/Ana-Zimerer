import React, { Component } from 'react';
import './NovoComentario.css';


export function NovoComentario (props){    
    return     <div className={'comment-container'}>
        <label>{props.labelComentario}</label> />
        </div>    
    }

