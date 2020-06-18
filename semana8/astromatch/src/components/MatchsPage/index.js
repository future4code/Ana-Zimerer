import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from '../assets/imgs/logo.png'
import {ContainerRoot, Container, Header , SectionPhotos, DivInfos, SectionButtons} from '../InicialPage/styles.js'
import App from '../../App'
import styled from 'styled-components'

const MatchPhoto = styled.img`
    width: 5vw;
    height: 5vh;
`
const MatchsPage =()=>{
    const [changePage, setChangePage]=useState(false)
    const [matches, setMatches] = useState([])

    useEffect(()=>{
       getAllMatches();
    }, [])
    
    const getAllMatches = ()=>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapaula/matches')
        .then((response)=>{
            setMatches(response.data.matches)
        })
        .catch((error)=>{
            alert(error)
        })
    }
    const onClickShowProfiles = ()=>{
        setChangePage(!changePage)
    }    
    
    const onClickClearMatches = ()=>{
        axios
            .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapaula/clear')
            .then((response)=>{
                alert(response.status)
            })
            .catch((error)=>{
                alert(error)
            })
        
    } 

    const listOfMatches = matches.map((person)=>{
        return(
            <div>
                <div> 
                    <MatchPhoto src={person.photo} alt='Foto de perfil'/>
                    <h4>{person.name}</h4>
                </div>                
            </div>
        );    
    })

    return(      
        <div>
            {changePage? <App /> :
            <>             
            <Header>
    	    	 	<img src={logo} alt="logo"/>
					<button onClick={onClickShowProfiles}>voltar</button>
                    <button onClick={onClickClearMatches}>limpar</button>					
    	    </Header>
            <div>
                {listOfMatches}
            </div>           
            </>
            }
        </div>
    )

    
}

export default MatchsPage;