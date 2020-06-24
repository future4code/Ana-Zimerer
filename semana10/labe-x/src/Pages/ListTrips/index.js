import React, { useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import api from '../../Service/api';
import styled from 'styled-components';

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
    const [search, setSearch]=useState("");
    const history = useHistory()

    useEffect(()=>{
        api
            .get('')
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

    const onClickSeeTripDetails = ((id)=>{
        history.push("/trips/details")
    })

    const listOfTrips = trips.map((trip)=>{
        return(
            <div>
                <p>{trip.name}</p>
                <img src="https://lh3.googleusercontent.com/proxy/1WH4E8YiKpZUPLfUjA87CyeCdrb7zhO9mzp-MCZTvSkxcFbd_Y0UtTjpcEi6KkYo33WbCcR48TC-ploKHyt59UvsqpKHQEgRANIUQYIPgYjzVT5j_1ny7CN6u-yqT06p8bcDB2G84ajcFIcl4ifhmHYx18E_RvXEkNhLTTKPOCUGWiw"/>
                <button onClick={() =>{onClickSeeTripDetails(trip.id)}}>Visualizar viagem</button>
            </div>
        )
    })

    return(
        <div>
            <input value={search} onChange={onChangeInputSearch} placeholder="Pesquise uma viagem"/>            
            <GridOfTrips>
                {listOfTrips} 
            </GridOfTrips>                 
        </div>
    )
}