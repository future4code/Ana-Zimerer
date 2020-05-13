import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		comentario:''
	}

	onChangeComentario=(event)=>{
		this.setState({comentario: event.target.value})	
		//return console.log({this.state.comentario})				
	}


	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>

			<button onClick={this.props.aoEnviarComentario}>Enviar</button>	
			<div className={'comment-container'}>
            
        	</div>  

		</div>
	}
}
