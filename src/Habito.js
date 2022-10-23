import React, { useState,useEffect,useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext } from './context.js/auth';
import { TrashBinOutline } from 'react-ionicons'
import { MagnifyingGlass }  from 'react-loader-spinner'

export default function Habito(props){

    const days = ["D","S","T","Q","Q","S","S"]
    const { User } = useContext(AuthContext);
   const [Erro, setErro] = useState(false)

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
        console.log("Deu certo")
        props.setArray(res.data)
        if(res.data.length === 0){
            props.f(true)
        }else{
            props.f(false)
           
        }
     })

     promise.catch((err) => {
        console.log('Erro')
        console.log(err.response)
        setErro(true)
     })

    },[props.new])

    function Delete(id){
       
        const config = {
            headers: {
                Authorization: `Bearer ${User.token}`
            }
        }

        console.log(id)
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config)
        promise.then((res) => {
            console.log("Delete successful")
            console.log(res.data)
            props.setNew(props.new+1)
        })
    
         promise.catch((err) => {
            console.log('Erro')
            console.log(err.response)
         })
    }

    if (Erro === true) {
		return <div>Erro na requisição! Tente de novo</div>
	  }

    if(!Erro && props.ArrayHabits === undefined){
        return(<ContainerLoading>
            <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#e15b64'
    />
     <p>Carregando...</p>
    </ContainerLoading>)
    }

    return(
        <>
         {props.ArrayHabits.map((h, index) => <ContainerHabito>
            <TitleDiv>
                <HabitName data-identifier="input-habit-name">{h.name}</HabitName>
                <TrashBinOutline data-identifier="delete-habit-btn" color={'#939c9e'}  onClick={() => Delete(h.id)}/>
            </TitleDiv>
          <DaysDiv>
            {days.map((d, i) => <DayButton data-identifier="week-day-btn" click={h.days.includes(i)}>{d}</DayButton>)}
          </DaysDiv>
        </ContainerHabito>)}
        </>
       
    )
}

const ContainerLoading = styled.div`

    width:300px;
    height:260px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #52B6FF;

`


const ContainerHabito = styled.div`

    width: 390px;
    height: 110px;
    left: 17px;
    top: 147px;
    background: #121414;
    border-radius: 5px;
    margin-bottom:15px;

`
const TitleDiv = styled.div`

    margin:10px;
    height:25px;
    width:370px;
    display:flex;
    justify-content:space-between;

    ion-icon:hover{
        cursor:pointer;
    }

`
const HabitName = styled.p`

    left: 32px;
    top: 160px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #939c9e;
    
`

const DaysDiv = styled.div`

    margin-left:10px;
    height:35px;
    width:230px;
    display:flex;  
`

const DayButton = styled.div`

    margin-left:5px;
    width: 25px;
    height: 25px;
    left: 36px;
    top: 218px;
    border: 1px solid #939c9e;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    background-color: ${props => props.click ? "#a2a8aa" : "#121414"};
    color: ${props => props.click ? "#121414" : "#939c9e"};
    display:flex;
    align-items:center;
    justify-content:center;

`