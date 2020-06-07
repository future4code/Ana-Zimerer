import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import iconDelete from './assets/imgs/icon_delete.png';

const P = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;   
    width: 15vw;
    padding: 5px;
    margin:3px;
`
const Span = styled.span`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    vertical-align: middle;    
    img{
         cursor: pointer;
        
    }
`
class CardListPlaylists extends React.Component{
    state={
        playlists:[{
            id: '',
            name: ''
        }]
    }
    componentDidMount= ()=>{
        this.getPlaylists();
    }
    
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
            console.log (response.data.result.list)
			window.alert('Buscando dados...')
		})
		.catch ((erro) =>{
		
		})
    }
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
    
    render (){
        const listOfPlaylists = this.state.playlists.map(playlist=> {
			return (
				<P>
					{playlist.name}	
                    <Span onClick={() => {this.onClickDeletePlaylist(playlist.id, playlist.name)}}>
                    <img src={iconDelete}></img>
                    </Span>				                   
				</P>
            );
        })
        return(
            <div>
               {listOfPlaylists}               
            </div>
        );
    }

}
export default CardListPlaylists; 