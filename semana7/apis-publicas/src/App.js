import React from 'react';
import axios from 'axios';
//import Styled from 'styled-components';

class App extends React.Component {
	state={
		characters: [{
			_id: "5a0fa4daae5bc100213c232e",
        	name: "Hannah Abbott",
        	role: "student",
        	house: "Hufflepuff",
        	school: "Hogwarts School of Witchcraft and Wizardry",
        	__v: 0,
        	ministryOfMagic: false,
        	orderOfThePhoenix: false,
        	dumbledoresArmy: true,
        	deathEater: false,
        	bloodStatus: "half-blood",
        	species: "human"
		}],
		selectedId: ''
	}
	
	componentDidMount= ()=>{
		axios.get('https://www.potterapi.com/v1/characters?key=$2a$10$3TTTBFFTJM4Uzb46p98Thu9culYW1LIaXXpOfHmIVUbQA4sjOLqG6'
		).then(response=>{
			this.setState({characters: response.data})
			
		}).catch(err => {
        alert('Erro');
      });
	}

	onClickSearchData = (id) =>{		
		console.log('onclick do option')
		axios
      	.get(`https://www.potterapi.com/v1/characters/${id}`)
      	.then(resposta => {
			this.setState({ house: resposta.data.house});
			console.log('foi')
      	})
      	.catch(err => {
      	  console.log('no foi');
      	});
	}
	onChangeOption = (id)=>{
		this.setState({selectedId: id })
		console.log('onchange')
	}
  	render (){		
	  	const listOfCharacters = this.state.characters.map((character)=>{
			return (
				<option
				key= {character.id} 
				onChange={() => {this.onChangeOption(character._id)}} 
				value={character.name}>
				{character.name}				
				</option>	
			);		
		  })
		  
	
		return (
		  <div className="App">
			  <select>
				{listOfCharacters}
			  </select>
			  <button onClick={this.onClickSearchData}>Search</button>
			  
		  </div>
		);
    }
}

export default App;
