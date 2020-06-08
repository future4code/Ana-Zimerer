import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardListPlaylists from './Components/CardListPlaylists';

const ContainerPrincipal=styled.div`
	justify-content: center;
	font-size: 1em;
	width: 100%;
	height: 100vh;		
`
const ContainerList=styled.div`
	display: flex;
	margin-top: 10px;
	width: 30vw;		
`
const DivButtonList=styled.div`
	display: flex;
	justify-content: center;
	width: 30vw;			
`
const ButtonList=styled.button`
	text-align: center;
	width: 50%;
	height: 5vh;
	border-radius: 50px;
	box-shadow: none;
	background-color: #FE2E64;
	font-size: 1.2em;
	:hover{		
		background-color: #DF013A;
	}
`
const ContainerSavePlaylist=styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30vw;
	height: 6vh;
	margin: 10px;
	input{
		height: 4vh;
		border-radius: 10px;
	}button{
		background-color: #F5A9BC;
		height: 5vh;
		border-radius: 10px;
	}		
`
class App extends React.Component {
	state={
		name:'',
		statusButtonList: false,
		statusUpdateList: false,
		loading: ''	
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
		this.setState({loading: true})
	}
	
	render(){		
		return (				
  		 	<ContainerPrincipal>
			<ContainerSavePlaylist>
				<input
				type='text'
				value={this.state.name}
				placeholder={'Digite o nome da playlist'}
				onChange={this.onChangeInputPlaylist}
				/>
				<button
				onClick={this.onClickSavePlaylist}
				> SALVAR </button>				
			</ContainerSavePlaylist>
			<DivButtonList><ButtonList onClick={this.onClickShowsPlaylists}>Minhas playlists</ButtonList></DivButtonList> 
			<ContainerList> {this.state.statusButtonList? <CardListPlaylists/> : <div></div>}</ContainerList>	
			</ContainerPrincipal>		    	
		);
	}
}

export default App;
