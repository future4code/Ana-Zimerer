import React, { useEffect, useState} from 'react'
import api from '../../Service/api.js'
import styled from 'styled-components'

const ContainerRoot=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    div:first-of-type{
        margin:10px;
    }
    div:last-of-type{
        margin: 10px;
    }
`

export default function TripDetails(props){
    const [tripChosen, setTripChosen]=useState()
    const [tripDetails, setTripDetails]=useState([])

    
    useEffect(()=>{
        const token=localStorage.getItem('token')
        console.log(token)
        console.log(props.id)
        
        const axiosConfig={
			headers: {
				Authorization: token
			}
        }        
        api
            .get(`/trip/${props.id}`, axiosConfig)
            .then((response)=>{
                setTripDetails(response.data.trip)
                alert('retornou detalhes da viagem')
            })
            .catch((error)=>{
                alert(error)
            });
    }, []);

    return(
        <ContainerRoot>
            <div>
                <img width="200px" height="200px"src="https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"/>
            </div>
            <div>
                <p>
                    <h2></h2>
                    <p>informações</p>
                    <p>diárias</p>
                </p>
                <div>
                    <hr />
                    icones de benefícios
                    <hr />
                </div>
                <div>    
                    data da viagem              
                </div>
                <button>
                     QUERO ME CANDIDATAR!
                </button>  
            </div>   
            
        </ContainerRoot>
    )
} 