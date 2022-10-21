import React, { useState,useEffect,useContext } from 'react';
import styled from 'styled-components';
import Trash from './assets/img/Trash.png'
import axios from 'axios';
import { AuthContext } from './context.js/auth';

export default function Habito(props){

    const days = ["D","S","T","Q","Q","S","S"]
    const { User } = useContext(AuthContext);
    const [ArrayHabits, setArray] = useState([])

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${User.token}`
            }
        }

        console.log(config)

       const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config)

       promise.then((res) => {
        console.log(res.data)
        setArray(res.data)
        console.log("Deu certo")
        if(res.data.length === 0){
            props.f(true)
        }else{
            props.f(false)
        }
     })

     promise.catch((err) => {
        console.log('Erro')
        console.log(err.response)
     })

    },[props.new])



    return(
        <>
         {ArrayHabits.map((h, index) => <ConteinerHabito>
            <TitleDiv>
                <HabitName>{h.name}</HabitName>
                <img width={"17px"} height="20px" src={Trash}/>
            </TitleDiv>
          <DaysDiv>
            {days.map((d, i) => <DayButton click={h.days.includes(i)}>{d}</DayButton>)}
          </DaysDiv>
        </ConteinerHabito>)}
        </>
       
    )
}

const ConteinerHabito = styled.div`

    width: 340px;
    height: 91px;
    left: 17px;
    top: 147px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom:30px;

`
const TitleDiv = styled.div`

    margin:10px;
    height:25px;
    width:320px;
    display:flex;
    justify-content:space-between;
`
const HabitName = styled.p`

    left: 32px;
    top: 160px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    
`

const DaysDiv = styled.div`

    margin:10px;
    height:35px;
    width:230px;
    display:flex;  
`

const DayButton = styled.div`

    margin-left:5px;
    width: 30px;
    height: 30px;
    left: 36px;
    top: 218px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    background-color: ${props => props.click ? "#DBDBDB" : "#FFFF"};
    color: ${props => props.click ? " #FFFFFF" : "#CFCFCF"};
    display:flex;
    align-items:center;
    justify-content:center;

`