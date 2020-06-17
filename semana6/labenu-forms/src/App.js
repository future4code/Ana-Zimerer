import React from 'react';
import styled from 'styled-components';
import  Etapa1  from './components/Etapa1';
import  Etapa2  from './components/Etapa2';
import  Etapa3  from './components/Etapa3';
import  Final  from './components/Final';

const ContainerRoot= styled.div`
	display: flex;
	flex-direction: column;		
	align-items: center;
	width: 50vw;
	margin: auto;
`
const BotaoProximaEtapa= styled.button`
	width: 10vw;
	margin: 6px;
`

class App extends React.Component{
	state={
		etapa: 1
	};

	 renderizaEtapa=(event)=>{
		switch (this.state.etapa){			
			case 1 :
				return <Etapa1/>;
				break;
			case 2 :
				return <Etapa2/>;
				break;	
			case 3 :
				return <Etapa3/>;
				break;
			default:
				return <Final/>;	
		}				 
	};

	defineEtapa=()=>{
		this.setState({etapa: this.state.etapa+1})
	}
	render (){			
  		return (			  
    	<ContainerRoot>	
			{this.renderizaEtapa()}	  	  
		  <BotaoProximaEtapa onClick={this.defineEtapa}> Próxima etapa</BotaoProximaEtapa>
    	</ContainerRoot>
  		);
	}
}

export default App;
