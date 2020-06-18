import React, { useEffect, useState } from 'react'
import {ContainerRoot, Container, Header , SectionPhotos, DivInfos, SectionButtons} from './components/InicialPage/styles.js'
import axios from 'axios'
import logo from './components/assets/imgs/logo.png'
import MatchsPage from './components/MatchsPage/index.js'
import 'materialize-css/dist/css/materialize.min.css';
function App() {
	const [profiles, setProfiles]=useState({})
	const [count, setCount] = useState(0)
	const [changePage, setChangePage] = useState(false)

	useEffect(()=>{
		getProfiles();
	}, [count]);
	
	const getProfiles = ()=>{
		axios
			.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapaula/person')
			.then((response)=>{
				setProfiles(response.data.profile)				
			})
			.catch((error)=>{
				alert(error)
			})	
	}

	const onClickYes = () =>{		
		setCount(count+1)
		const body ={
			id: profiles.id,
			choice: true,
		}
		axios
		.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/anapaula/choose-person', body)
		.then(()=>{						
		})
		.catch((err)=>{
			alert(err)
		})	
	}
	
	const onClickNo = () =>{
		setCount(count+1)
	}

	const onCLickSeeMatchs = ()=>{
		setChangePage(!changePage)		
	}
  	return (
    	<ContainerRoot>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
			{changePage? <MatchsPage />: 
    	    <Container>
    	    	<Header>
    	    	 	 <img src={logo} alt="logo"/>
					<button onClick={onCLickSeeMatchs}>matchs</button>					
    	    	</Header>
    	    	<SectionPhotos>	
				<div class="row">
  				  	<div class="col s12 m7">
  				    	<div class="card">
  				      		<div class="card-image">
  				        		<img src={profiles.photo}/>
  				        		<span class="card-title">{profiles.name}, {profiles.age}</span>
  				         	</div>
  				      		<div class="card-content">
  				        		<p>{profiles.bio}</p>
  				    		</div>   				    
  				  		</div>
  					</div>	
				</div>			
				</SectionPhotos>
				<SectionButtons>
					<button onClick={onClickNo} class="btn-floating waves-effect waves-light red"> <i class="material-icons">close</i></button>
					<button onClick={onClickYes} class="waves-effect waves-light btn-large"> <i class="material-icons">favorite</i></button>
				</SectionButtons>  
			</Container>
		}    
    	</ContainerRoot>
    );
}

export default App;
