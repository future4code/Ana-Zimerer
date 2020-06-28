import React, { useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../Service/api'
import styled from 'styled-components'
import TripDetails from '../TripDetails/index.js'

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
            width: 80%;
            height:80%;
        }
        button{
            position: relative;
            margin-left: -52vh;

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

    if ((search !== "") &&(trips.name.indexOf( search ) === -1)){
        return null;
    }

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

    const goToCandidaturePage = ((id)=>{
        history.push(`/trips/candidature${id}`)    
        localStorage.setItem('idOfTrip', (id));
    })

    const listOfTrips = trips.map((trip)=>{
        return(
            <div>
                <p>{trip.name}</p>
                <img alt={`Imagem da viagem ${trip.name}`} src="https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"/>
                <button onClick={() =>{onClickSeeTripDetails(trip.id, trip)}}>Visualizar viagem</button>
                <button onClick={() =>{goToCandidaturePage(trip.id)}}>Me candidatar!</button>
            </div>
        )
    })

    return(
        <div>
            {showsTripDetailsPage ?
                 <TripDetails id={idSelectedTrip} /> : <>          
                <input value={search} onChange={onChangeInputSearch} placeholder="Pesquise uma viagem"/>        
                <GridOfTrips>
                    {listOfTrips} 
                </GridOfTrips>   
                </> 
            } 
        </div>  
    );
} 