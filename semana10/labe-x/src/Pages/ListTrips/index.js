import React, { useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../Service/api'
import styled from 'styled-components'
import TripDetails from '../TripDetails/index.js'
import { ContainerRoot } from '../Adm_CreateTrip'
import 'materialize-css/dist/css/materialize.min.css'

const GridOfTrips=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin:20px;
    div{
        width: 50%;
        height: 50%;
        flex-direction: column;
        img{
            width: 60%;
            height:60%;
        }
        button:first-of-type{
            position: relative;
            margin-left: -50vh;
        }
        button:last-of-type{
            position: relative;
        }
    }
`
export default function ListTrips(){
    const [trips, setTrips]=useState([]);
    const [selectedTrip]=useState([])
    const [search, setSearch]=useState("");
    const [showsTripDetailsPage, setShowsTripDetailsPage]=useState(false);
    const [idSelectedTrip, setIdSelectedTrip]=useState()
    const history = useHistory()
    
    useEffect(()=>{
        api
            .get('trips')
            .then((response)=>{
                setTrips(response.data.trips)
            })
            .catch((error)=>{
                alert(error)
            });
    }, []);

    const onChangeInputSearch = ((event) =>{
        setSearch(event.target.value)       
    })

    const onClickSeeTripDetails = ((id, trip)=>{
        setShowsTripDetailsPage(!showsTripDetailsPage)
        setIdSelectedTrip(id)
        selectedTrip.push(trip)
        history.push(`/trips/details${id}`)  
        localStorage.setItem('idOfTrip', (id)); 
    })

    const goToCandidaturePage = ((id, name)=>{
        history.push(`/trips/candidature${id}${name}`)    
        localStorage.setItem('idOfTrip', (id));
        localStorage.setItem('nameOfTrip', (name))
    })

    const listOfTrips = trips.map((trip)=>{
        return(
            <div>
                <p>{trip.name}</p>
                <img alt={`Imagem da viagem ${trip.name}`} src="https://img.olhardigital.com.br/uploads/acervo_imagens/2020/01/r16x9/20200107060943_1200_675_-_sistema_solar.jpg"/>
                <button onClick={() =>{onClickSeeTripDetails(trip.id, trip)}} class="waves-effect waves-light btn-small orange accent-3">Visualizar viagem</button>
                <button onClick={() =>{goToCandidaturePage(trip.id, trip.name)}} class="waves-effect waves-light btn-small red">Me candidatar!</button>
            </div>
        )
    })

    return(
        <ContainerRoot>
            {showsTripDetailsPage ?
                 <TripDetails id={idSelectedTrip} /> : <>          
                    <input value={search} onChange={onChangeInputSearch} placeholder="Pesquise uma viagem"/> 
                <GridOfTrips>                    
                    {listOfTrips} 
                </GridOfTrips>   
                </> 
            } 
        </ContainerRoot>  
    );
} 