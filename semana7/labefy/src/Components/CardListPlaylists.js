import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import iconDelete from './assets/imgs/icon_delete.png';
import iconInfosPlaylist from './assets/imgs/icon_playlist.png';
import CardAccessPlaylists from'./CardAccessPlaylists';

const P = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;  
    justify-content: space-between; 
    width: 90%;
    padding: 5px;
    margin-left:3px;
    div{
        display: flex;       
    }   
`
const Span = styled.span`
    width: 100%;
    vertical-align: middle;    
    img{
         cursor: pointer;        
    }img:hover{
        width: 110%;
        height: 90%;
        background-color: #F6CEEC;
        border-radius: 30px;
    }
`
const ContainerMaster = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 90%;    
`
const List = styled.div`   
    width: 30vw;
`
const ListOfTracks= styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: 450px;
    margin-top: -85px;
    
`

class CardListPlaylists extends React.Component{
    state={
        playlists:[{
            id: '',
            name: ''
        }],
        statusClickPlaylist: false,
        playlistId: '',
        playlistName: ''
    }
    componentDidMount= ()=>{
        this.getPlaylists();
    }
    
    //acessa as playlists já existentes assim que o componente é montado
    getPlaylists=()=>{
        const axiosConfig={
			headers: {
				Authorization: "anapaula-zimerer-mello"
			}
		};

		axios
			.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',  
			axiosConfig
		)
		.then ((response)=>{
            this.setState({playlists: response.data.result.list})
			window.alert('Buscando dados...')
		})
		.catch (() =>{
            window.alert('Dados não encontrados')
		})
    }

    //exclui playlists
    onClickDeletePlaylist= (id, name) =>{
        if (window.confirm(`Deseja excluir a playlist ${name} ?`)){
            const axiosConfig={
                headers:{
                    Authorization: "anapaula-zimerer-mello"
                }
            }
            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/`, axiosConfig
            )
            .then(()=>{
                alert('Playlist deletada')
                this.getPlaylists()
            })
        }else{
            window.alert(`A playlist ${name} não foi exluída`)
        }
        
    }

    //quando é clickado em minhas playlists
    onClickAccessPlaylist= (id, name)=>{
        this.setState({statusClickPlaylist: !this.state.statusClickPlaylist})  
        this.setState({playlistId: id }) 
        this.setState({playlistName: name})  
    }
    
    render (){
        const listOfPlaylists = this.state.playlists.map(playlist=> {
			return (
				<P>
					{playlist.name}	
                    <div>
                        <Span onClick={() => {this.onClickAccessPlaylist(playlist.id, playlist.name)}}>
                            <img src={iconInfosPlaylist} alt={'Ver playlist'}></img>
                        </Span>	
                        <Span onClick={() => {this.onClickDeletePlaylist(playlist.id, playlist.name)}}>
                            <img src={iconDelete} alt={'Deletar playlist'}></img>
                        </Span>
                    </div>	
                    		                   
				</P>
            );
        })        

        return(
            <ContainerMaster>             
                <List>
               {listOfPlaylists} 
               </List>  
               <ListOfTracks>
                    {this.state.statusClickPlaylist? 
                    <CardAccessPlaylists 
                    playlistId={this.state.playlistId} 
                    playlistName={this.state.playlistName}/> : <div></div>} 
                </ListOfTracks>                        
            </ContainerMaster>
        );
    }

}
export default CardListPlaylists; 