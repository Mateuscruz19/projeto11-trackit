import styled from "styled-components"
import axios from 'axios';
import { AuthContext } from './context.js/auth';
import { CheckmarkDoneOutline } from 'react-ionicons'
import React, { useState,useEffect,useContext } from 'react';
import { MagnifyingGlass }  from 'react-loader-spinner'

export default function Check(props){

    const { User } = useContext(AuthContext);
    const { setP } = useContext(AuthContext);
    const [Habitos, setHabitos] = useState(undefined)
    const [Refresh, setRefresh] = useState(0)
    const [Erro, setErro] = useState(false)

    const config = {
        headers: {
            Authorization: `Bearer ${User.token}`
        }
    }

    useEffect(() => {

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)

        promise.then((res) => {
            console.log(res.data)
            setHabitos(res.data)
            
            if(res.data.length !== 0){
             let Total = parseInt(100/res.data.length*res.data.filter(y => y.done === true).length)
                 setP(Total) 
                 props.t(Total)
                 props.h(true)
            }if(res.data.length === 0){
                props.h(false)
                props.t(0)
                setP(0)
            }
         })

         promise.catch((err) => {
            console.log('Erro')
            console.log(err.response)
            setErro(true)
         })

    },[Refresh])


    

    function ClickCheck(haha){


        console.log(haha)
        if(haha.done === true){
          const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${haha.id}/uncheck`,haha.id,config)
          promise.then((res) => {
            console.log("Deu certo")
            setRefresh(Refresh+1)
         })

         promise.catch((err) => {
            alert('Erro')
            console.log(err.response)
         })

        }else if(haha.done === false){
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${haha.id}/check`,haha.id,config)

            promise.then((res) => {
                console.log("Deu certo")
                setRefresh(Refresh+1)
             })
    
             promise.catch((err) => {
                alert('Erro')
                console.log(err.response)
             })

        }
    }

    if (Erro === true) {
		return <div>Erro na requisição! Tente de novo</div>
	  }

    if(!Erro && Habitos === undefined){
        return(<ContainerLoading>
            <MagnifyingGlass
        visible={true}
        height="250"
        width="250"
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
        {Habitos.map((h) => 
        <Habito done={h.done}>
            <ContainerTitle data-identifier="today-infos">
                    <Title>{h.name}</Title>
                    <Sequence green={h.currentSequence !== 0}>Sequência atual: <span>{h.currentSequence} dias</span></Sequence>
                    <Sequence green={h.currentSequence !== 0}>Seu recorde: <span>{h.highestSequence} dias</span></Sequence>
            </ContainerTitle>
            <ContainerCheck data-identifier="done-habit-btn" onClick={() => ClickCheck(h)} done={h.done}>
            <CheckmarkDoneOutline
            color={'#181A1B'} 
              height="50px"
                width="50px"
                />
            </ContainerCheck>
            
        </Habito>)}
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
    padding:30px;

`


const Habito = styled.div`

    margin:20px;
    width: 90%;
    height: 94px;
    left: 18px;
    top: 177px;
    background: #181A1B;
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
    background: ${props => props.done ? "#8FC549" : "#A8A4A0"};
    border: 2px solid #121414;
    border-radius: 5px;
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;

`

const Title = styled.div`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #A8A4A0;
    margin-bottom:5px;
    
    `

const Sequence = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #A8A4A0;

span{
    color: ${props => props.green ? "#8FC549" : "#A8A4A0" };
}

`
