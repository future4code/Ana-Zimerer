import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state={
    usuarios: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50/',
        fotoPost:'https://picsum.photos/200/150/'
      },
      {
        nomeUsuario:'anazimerer',
        fotoUsuario:'https://picsum.photos/50/50/',
        fotoPost:'https://picsum.photos/200/150/'
      },
      {
        nomeUsuario:'otavio.sanches',
        fotoUsuario:'https://picsum.photos/50/50/',
        fotoPost:'https://picsum.photos/200/150/'
      }
    ]
  }
  render() {

    const listaDeUsuarios=usuarios.map(usuario =>{
      return(  
        <p>{usuario.nomeUsuario}</p>
        <img src={usuario.fotoUsuario}/>
       <image src={usuario.fotoPost}/>);
      
    });
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50/'}
          fotoPost={'https://picsum.photos/200/150/'}
        />
        <Post
          nomeUsuario={'anazimerer'}
          fotoUsuario={'https://picsum.photos/50/50/'}
          fotoPost={'https://picsum.photos/200/150/'}
        />
        <Post
          nomeUsuario={'otavio.sanches'}
          fotoUsuario={'https://picsum.photos/50/50/'}
          fotoPost={'https://picsum.photos/200/150/'}
        />
      </div>
    );
  }
}

export default App;
