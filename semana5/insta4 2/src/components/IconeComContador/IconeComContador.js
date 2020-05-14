import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	//esse props vem de onde? do post.js, que manda do estado dele e das condições
	//vai mostrar a imagem das curtidas e o num de curtidas
	//como é chamado duas vezes, é sobre as curtidas e comentarios
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}

