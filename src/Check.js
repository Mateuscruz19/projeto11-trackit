import styled from "styled-components"
import Miau from "./miau"
import Right from "./assets/img/Right.png"
import axios from 'axios';
import { AuthContext } from './context.js/auth';
import React, { useState,useEffect,useContext } from 'react';


export default function Check(props){

    const { User } = useContext(AuthContext);
    const [Habitos, setHabitos] = useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${User.token}`
        }
    }

    useEffect(() => {

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)

        promise.then((res) => {
            console.log(res.data)
            console.log("Deu certo")
            setHabitos(res.data)
            if(res.data !== []){
                props.h(true)
            }
         })

         promise.catch((err) => {
            console.log('Erro')
            console.log(err.response)
         })

    },[])



    return(





        <>
        {Habitos.map((h) => 
        <Habito>
            <ContainerTitle>
                    <Title>{h.name}</Title>
                    <Sequence>Sequência atual: <span>{h.currentSequence} dias</span></Sequence>
                    <Sequence>Seu recorde: {h.highestSequence} dias</Sequence>
            </ContainerTitle>
            <ContainerCheck done={h.done}>
                <img src={Right}/>
            </ContainerCheck>
            
        </Habito>)}
        </>
    )
}

const Habito = styled.div`

    margin:20px;
    width: 370px;
    height: 94px;
    left: 18px;
    top: 177px;
    background: #FFFFFF;
    border-radius: 5px;
    display:flex;
    justify-content:space-between;
`

const ContainerTitle = styled.div`

    width:240px;
    height:70px;
    display:flex;
    margin:10px;
    flex-direction:column;

`

const ContainerCheck = styled.div`

    width: 69px;
    height: 69px;
    left: 276px;
    top: 190px;
    background: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;

`

const Title = styled.div`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom:5px;
    
    `

const Sequence = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;

span{
    color:#8FC549;
}

`
