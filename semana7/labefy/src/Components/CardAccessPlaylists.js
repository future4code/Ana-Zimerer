import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import iconDelete from './assets/imgs/icon_delete.png';

const ContainerMaster = styled.div`
    width: 30vw;
`
const ContainerTrackInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 65px;  
    h5,p {
        margin: 0px;
        a{
            margin-left: 20px;
        }
        hr{
            color: black;
        }
    }
`
const ContainerAddTrack = styled.div`
    text-align: center;
    width: 100%;
    input{
        height: 4vh;
	    border-radius: 10px;
       }
`
const ContainerInfosPlaylist = styled.div`
    width: 30vw;
    h4{
        text-align: center;
    }
`
const ButtonSaveTrack=styled.button`
    height: 5vh;
	border-radius: 10px;
    background-color: #F5A9BC;
`

class CardAccessPlaylists extends React.Component{
    state={
        playlists:[{
            
        }],
        tracks: [{  
            trackName: '',
            trackArtist: '',
            trackUrl: ''          
        }]
            
    }

    componentDidMount= ()=>{
        this.onChangePlaylist()    
    }

    //quando são alteradas as playlists - adicionadas ou excluidas
    onChangePlaylist=()=>{
        const id = this.props.playlistId
        const axiosConfig={
			headers: {
				Authorization: "anapaula-zimerer-mello"
			}
        };
        
    	axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,              
			axiosConfig
		)
		.then ((response)=>{
            this.setState({playlists: response.data.result.tracks})
			window.alert('Buscando informações da playlist...')
		})
		.catch (() =>{
            window.alert('Informações não encontradas')
		})
    }

    //inputs controlados
    onChangeInputTrackName=(event)=>{
		this.setState({trackName: event.target.value})
    }

    onChangeInputTrackArtist=(event)=>{
		this.setState({trackArtist: event.target.value})
    }

    onChangeInputTrackUrl=(event)=>{
		this.setState({trackUrl: event.target.value})
    }
    
    //Salvando musicas ás playlists
    onClickSaveTrack=()=>{
        const id= this.props.playlistId
        const axiosConfig={
			headers: {
				Authorization: "anapaula-zimerer-mello"
			}
		}

		const body={
            name: this.state.trackName,
            artist: this.state.trackArtist,
            url: this.state.trackUrl
		}
		axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
		body,
		axiosConfig
		).then(()=>{
			alert('Música salva')
            this.setState({trackName: '', trackArtist: '', trackUrl: ''})
            this.onChangePlaylist();
		}).catch((e)=>{
			alert(`Música não salva. Erro:${e.data}`)
        })
        
        this.onChangePlaylist();
    }

    //removendo musicas das playlists
    onClickDeleteTrack=(trackId, trackName)=>{
        const playlistName= this.props.playlistName
        const playlistId= this.props.playlistId
        if (window.confirm(`Deseja excluir ${trackName} da playlist ${playlistName} ?`)){
            const axiosConfig={
                headers:{
                    Authorization: "anapaula-zimerer-mello"
                }
            }

            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`
            , axiosConfig
            )
            .then(()=>{
                window.alert('Música deletada')
                this.onChangePlaylist();
            })
        }else{
            window.alert(`A música ${trackName} não foi exluída`)
        }
        
    }

    render (){
        const listOfTracks = this.state.playlists.map(track =>{
            return(
                <ContainerTrackInfo>                
                        <h5> 
                            {track.name}
                            <a href={track.url}>ouvir!</a>
                            <span onClick={()=> {this.onClickDeleteTrack(track.id, track.name)}}>
                            <img src={iconDelete} alt={'Deletar música'}></img>
                            </span>
                        </h5>
                        <p>Artista: {track.artist}</p>
                        <hr></hr>               
                </ContainerTrackInfo>
            )
        })
        return(
            <ContainerMaster>
                <ContainerAddTrack>
                    <input
                        type='text'
                        value={this.state.trackName}
                        placeholder={'Digite o nome da música'}
                        onChange={this.onChangeInputTrackName}
                        />
                     <input
                        type='text'
                        value={this.state.trackArtist}
                        placeholder={'Digite o nome do artista'}
                        onChange={this.onChangeInputTrackArtist}
                        />
                     <input
                        value={this.state.trackUrl}
                        placeholder={'Digite a url da musica'}
                        onChange={this.onChangeInputTrackUrl}
                        />
                    <ButtonSaveTrack onClick={this.onClickSaveTrack}>SALVAR</ButtonSaveTrack>	
                </ContainerAddTrack> 

                <ContainerInfosPlaylist> 
                    <h4>Playlist: {this.props.playlistName}</h4>        
                    {listOfTracks}  
                </ContainerInfosPlaylist>
            </ContainerMaster>
        );
    }

}

export default CardAccessPlaylists;