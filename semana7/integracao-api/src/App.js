import React from 'react';
import CardRegister from './Components/CardRegister';
import CardList from './Components/CardList';
import './App.css';

class App extends React.Component {
	state={
		telaRenderizada: 'tela'  
	};
	
	OnClickTrocaDeTela=()=>{
		if (this.state.telaRenderizada==='tela'){
			this.setState({telaRenderizada: 'lista'})
		}else if (this.state.telaRenderizada==='lista') {
			this.setState({telaRenderizada: 'tela'})
		}
	}
	
	render(){
		const renderizaTela = () => {
			switch (this.state.telaRenderizada) {
			  case "lista":
				return <CardList />;
			  case "tela":
				return <CardRegister />;
			  default:
				return;
			}
		};

  		return (
  		  <div className="App">
  		     <button onClick={this.OnClickTrocaDeTela}>Ir para página de {this.state.telaRenderizada}</button>        
  		   	{renderizaTela()}       
  		  </div>
  		);
	}
}

export default App;
