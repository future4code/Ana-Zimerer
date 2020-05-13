import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'//pra mostrar a caixinha quando clicka no comentario


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {//quando chamar a função, vai aparcer curtiu
    console.log('Curtiu!')
    if (this.state.curtido){
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas-1
    })
    }else{
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas+1
      })
    }
  }

  onClickComentario = () => {
    //quando chamar a função vai haver uma modificação na classe, 
    //na propriedade comentando, que vai receber o contrario do valor inicial
    //ou seja, true, quando clickarem no comentario
    this.setState({
      comentando: !this.state.comentando
    })
  }
  
  aoEnviarComentario = (props) => {
    
    //quando essa função for ativada, vai haver uma modificação na variavel comentando e
    //será adicionado 1 ao contador de comentarios 
    
    this.setState({
      //fecha a caixinha
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })    
    
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {//se curtido for igual a true
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {//se comentando for true, ou seja, se alguem clickar no icone de comentar
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>//recebe
    }    
    
    ///tem varios this.props
    //chamado um componente
    //IconeContador.icone=recebe o status da curtida
    //
    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
     
      
    </div>
  }
}

export default Post