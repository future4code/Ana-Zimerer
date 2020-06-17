import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardListPlaylists from './Components/CardListPlaylists';

const ContainerPrincipal=styled.div`
	display: flex;	
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items:center;
	margin-top: 10px;
	font-size: 1em;
		
`
const ContainerList=styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;
		
`
const ButtonList=styled.button`
	width: 15%;
	height: 5vh;
	margin: 10px;
	border-radius: 50px;
	box-shadow: none;
	background-color: #FF0040;
	font-size: 1.2em;
	:hover{
		
		background-color: #8A0829;
	}
	
`


class App extends React.Component {
	state={
		name:'',
		statusButtonList: false,		
	}

	onChangeInputPlaylist =(event)=>{
		this.setState({name: event.target.value})
	}

	onClickSavePlaylist = () =>{
		const axiosConfig={
			headers: {
				Authorization: "anapaula-zimerer-mello"
			}
		}

		const body={
			name: this.state.name,
		}

		axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
		body,
		axiosConfig
		).then(()=>{
			alert('Playlist salva')
			this.setState({name: ''})
		}).catch((e)=>{
			alert(`Playlist não salva. Erro:${e.data}`)
		})
	}

	onClickShowsPlaylists= (event)=>{
		this.setState({statusButtonList: !this.state.statusButtonList})
	}

	render(){
		
		return (
  		  <ContainerPrincipal>
			<div>
				<input
				type='text'
				value={this.state.name}
				placeholder={'Digite o nome da playlist'}
				onChange={this.onChangeInputPlaylist}
				/>
				<button
				onClick={this.onClickSavePlaylist}
				> SALVAR </button>				
			</div>
			<ButtonList onClick={this.onClickShowsPlaylists}>Minhas playlists</ButtonList> 
			<ContainerList>{this.state.statusButtonList? <CardListPlaylists/> : <div></div>}</ContainerList>
  		  </ContainerPrincipal>
		  );
	}
}

export default App;
