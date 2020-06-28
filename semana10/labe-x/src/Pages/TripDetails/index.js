import React, { useEffect, useState} from 'react'
import {useHistory} from 'react-router'
import api from '../../Service/api.js'
import styled from 'styled-components'

const ContainerRoot=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    div{
        margin:10px;
    }    
    img{
        margin: 10px;
    }
`

const Candidate=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    border: 1px solid black;
    border-radius: 5px;
    width: 30vw;
    h3{
        margin: 5px;        
    }
    p{
        padding: 0.5px;
        margin: 5px;
        button{            
            margin: 5px;
            height: 3vh;            
        }
    }
`
export default function TripDetails(){
    const [tripDetails, setTripDetails]=useState({})
    const [token]=useState(localStorage.getItem('token'))
    const [idOfTrip]=useState(localStorage.getItem('idOfTrip'))
    const [candidates, setCandidates]=useState([]);
    const history=useHistory()

    useEffect(()=>{
        if (token !== null && token !==0 && token!==undefined){           
            const axiosConfig={
		    	headers: {
		    		auth: token
		    	}
            }        
            api
                .get(`/trip/${idOfTrip}`, axiosConfig)
                .then((response)=>{
                    setTripDetails(response.data.trip)
                    setCandidates(response.data.trip.candidates)
                })
                .catch((error)=>{
                    alert(error)
                });
        }else{
            alert('Entre com o login e senha para acessar mais detalhes da viagem')
            history.push('/login')
        }

    }, [token]);

    const listOfCandidates=candidates.map((candidate)=>{
        return(
            <Candidate>
                <h3>{candidate.name}</h3>      
                <p>{candidate.age} anos, {candidate.profession}</p>
                <p>{candidate.country}</p>
                <p>{candidate.applicationText}
                    <button>APROVADO</button>
                    <button>AINDA NÃO</button>
                </p>
            </Candidate>
        )
    })

    return(
        <ContainerRoot>
            <div>
                <p>
                    <h2>{tripDetails.name}</h2>
                    <p>{tripDetails.date}</p>
                    <p>Duração: {tripDetails.durationInDays} dias</p>
                </p>
                <img alt="imagem da viagem" width="200px" height="200px"src="https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"/>
            </div> 
            <div>
                <hr />  
                Candidatos:
                {listOfCandidates}
                <hr />
            </div>      
        </ContainerRoot>
    )
} 