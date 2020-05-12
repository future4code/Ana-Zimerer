import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './components/CardGrande/fotinha.jpeg'
import CardPequeno from './components/CardPequeno/CardPequeno'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil}
          nome="Ana Paula Zimerer" 
          descricao="Bióloga e estudante na área de desenvolvimento web full stack, aprendendo tecnologias front-end e back-end. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">        
        <CardPequeno
        imagem="https://n6-img-fp.akamaized.net/icones-gratis/novo-simbolo-de-destaque-e-mail-no-botao-circular-preto_318-68510.jpg?size=338&ext=jpg"
        titulo="Email: "
        texto=" zimerer.ana@ig.com"
        />
        <CardPequeno
        imagem="https://img2.gratispng.com/20180830/bww/kisspng-the-daily-dot-internet-logo-online-newspaper-5b8824be044753.2560879215356489580175.jpg"
        titulo="Endereço: "
        texto=" Rua Casa Forte"
        />

      </div>      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/proxy/SnZndYcZxBhxG5ANStkZkeph9dhac9vvvNUbyhgAfF31i12Vf217BXx3UJ3HddsAcnYMjftjdW8ecHSNXUrFiEm3t5CjPASAZi70NCm_eui6xhH4Viaxl1_f7L_FYtWp3QSKWOPkemAYS6twhVSVsaXkR-OjGG9r" 
          nome="Departamento de Biologia - Unesp Rio Claro" 
          descricao="Estágio em laboratório de Biologia Molecular. Desenvolvimento de projeto com células hepáticas tumorais, que incluiu práticas de cultura de células, assim como alguns ensaios específicos da área.
          "
        />
        
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/proxy/SnZndYcZxBhxG5ANStkZkeph9dhac9vvvNUbyhgAfF31i12Vf217BXx3UJ3HddsAcnYMjftjdW8ecHSNXUrFiEm3t5CjPASAZi70NCm_eui6xhH4Viaxl1_f7L_FYtWp3QSKWOPkemAYS6twhVSVsaXkR-OjGG9r"
          nome="Departamento de Ecologia - Unesp Rio Claro" 
          descricao="Desenvolvimento de projeto com abelhas solitárias da espécie. Estudos de nidificação." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
