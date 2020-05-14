import React, {Component} from 'react'
import './SecaoComentario.css'
//import { NovoComentario } from '../NovoComentario/NovoComentario'

export class SecaoComentario extends Component {
	state = {
		comentario:''
	}

	onChangeComentario=(event)=>{
		this.setState({comentario: event.target.value})
		
	}
	onClickComent=(event)=>{		
		return alert(this.state.comentario)
	}
   render() {
	   
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>

		<button onClick={this.onClickComent} >Enviar</button>	
		
		</div>
		
            
        

	
	}
}