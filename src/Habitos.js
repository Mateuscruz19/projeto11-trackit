import React from 'react';
import styled from 'styled-components';
import { useState, useEffect,useContext } from 'react';
import Days from './Days';
import Miau from './miau';
import Habito from './Habito';
import { AuthContext } from './context.js/auth';
import FotoTeste from './assets/img/img_avatar.png'
import { createGlobalStyle } from 'styled-components'
import axios from 'axios';
import { Circles } from 'react-loader-spinner'
import { Link } from 'react-router-dom';

export default function Habitos(){

    const { User } = useContext(AuthContext);
    const days = ["D","S","T","Q","Q","S","S"]
    const daysClicked = []
    const [DayPress, setDayPress] = useState(false)
    const [ShowNewhabit, setNewHabit] = useState(false)
    const [nameNewHabit, setNameNewHabit] = useState("")
    const [ArrayDaysNew, setArrayDaysNew] = useState([])
    const [Loading, setLoading] = useState(false)
    const [AddMore, setMore] = useState(0)
    const [Fine, setFine] = useState(false)
    const [ArrayHabits, setArray] = useState(undefined)

    function SaveNewHabit(){

        setLoading(true)
        setNameNewHabit("")

    let body = {
            name: nameNewHabit,
            days: ArrayDaysNew
        }

        console.log(body)

        const config = {
            headers: {
                Authorization: `Bearer ${User.token}`
            }
        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",body,config)

        promise.then((res) => {
            console.log(res.data)
            console.log("Deu certo")
            setLoading(false)
            setNewHabit(false)
            setMore(AddMore+1)
            setNameNewHabit("")
         })

         promise.catch((err) => {
            alert('Erro')
            console.log(err.response)
            setLoading(false)
         })

    }

    function AddHabit(){
        if(ShowNewhabit === false){
            return setNewHabit(true)
        }else{
           return setNewHabit(false)
        }

    }

    function Close(){
        setNewHabit(false)
    }

    function Input(h){
        setNameNewHabit(h.target.value)
    }

    return(
        <>
<GlobalStyle/>
        <Screen2Header>
          <Screen2Logo>TrackIt</Screen2Logo>
          <Screen2UserPhoto src={User.image}></Screen2UserPhoto>
        </Screen2Header>


        <Screen2Container>
            <Screen2HabitosTituloDiv>
                <Screen2HabitosTitulo>Meus Habitos</Screen2HabitosTitulo>
                <Screen2HabitosIconAddHabito onClick={AddHabit}><p>+</p></Screen2HabitosIconAddHabito>
            </Screen2HabitosTituloDiv>


            <Screen2HabitosCreate visible={ShowNewhabit} >
                <Screen2HabitosInput disabled={Loading ? true : false} placeholder='nome do hábito' onChange={(h) => Input(h)} value={nameNewHabit} ></Screen2HabitosInput>
                <Screen2DaysContainer>
                    {days.map((d, index) => <Days l={Loading} disabled={Loading ? true : false} a={ArrayDaysNew} sa={setArrayDaysNew} index={index} Day={d}>{d}</Days>)}
                </Screen2DaysContainer>
                <Screen2CancelSaveContainer>
                <Cancel onClick={Close}>Cancelar</Cancel>
                <SaveButton onClick={SaveNewHabit}>{Loading ? <Circles width={"20px"} color='white'/> : <p>Salvar</p>}</SaveButton>
                </Screen2CancelSaveContainer>
            </Screen2HabitosCreate>

            <Habito ArrayHabits={ArrayHabits} setArray={setArray} f={setFine} new={AddMore} setNew={setMore} ha={Miau}></Habito>

             {Fine ? <Screen2HabitosNotFound>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito<br/> para começar a trackear!
             </Screen2HabitosNotFound> : ""}
         </Screen2Container>



         <Screen2Footer>
         <Link to={"/Habitos"}>
                <Screen2Habitos>Hábitos</Screen2Habitos>
            </Link>
            <Link to={"/Hoje"}>
                <Blue>
                <Screen2Hoje>Hoje</Screen2Hoje>
                </Blue>
            </Link>
            <Link to={"/Historico"}>
                 <Screen2Historico>Histórico</Screen2Historico>
            </Link>
        </Screen2Footer>
        
        </>
    )

}

const Screen2Container = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column; 
    margin-top:70px;
 

`



const Screen2HabitosTituloDiv = styled.div`

width: 85%;
height:65px;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:40px;

`

const Screen2HabitosTitulo = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #52B6FF;

`

const Screen2HabitosIconAddHabito = styled.div`

    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    cursor: pointer;

p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
}


`

const Screen2HabitosCreate =styled.div`

    width: 340px;
    height: 180px;
    background: #121414;
    border-radius: 5px;
    display:${props => props.visible ? "block" : "none"};
    margin-bottom:25px;

`
const Screen2HabitosInput = styled.input`

    width: 315px;
    height: 45px;
    left: 36px;
    top: 165px;
    background: #2e3333;
    border: 1px solid #a2a8aa;
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #D5D5D5;

&::placeholder{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #a2a8aa;
    }

    &:disabled{
        background: #F2F2F2;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    }

`

const Screen2DaysContainer = styled.div`

    margin:10px;
    height:35px;
    width:230px;
    display:flex;
`


const Screen2CancelSaveContainer = styled.div`

width:200px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
margin-left:140px;

`



const Cancel = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    cursor: pointer;

`

const SaveButton = styled.div`

    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:10px;
    cursor: pointer;
    
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}

&:disabled{
        background: #52B6FF;
        opacity: 0.7;
        border-radius: 4.63636px;
    }
    
    `







const Screen2HabitosNotFound = styled.p`

    padding:20px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top:30px;
    margin-left:5px;
`

// CSS GERAL

const Screen2Header = styled.header`

    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display:flex;
    justify-content:space-between;
    z-index:1;
    position:fixed;

`

const Screen2Logo = styled.h1`

    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    padding:10px;
    margin-left:17px;

`

const Screen2UserPhoto = styled.img`

    margin-top:7px;
    width: 51px;
    height: 51px;
    left: 306px;
    top: 9px;
    border-radius: 98.5px;
    margin-right:25px;
    border:solid #D5D5D5;
`

const GlobalStyle = createGlobalStyle`
    body {
        background: #1F2223;
  }
  a{
    text-decoration:none;
  }
`




const Screen2Footer = styled.footer`

    width: 100%;
    height: 70px;
    bottom:0;
    background: #126BA5;
    z-index:1;
    position:fixed;
    display:flex;
    justify-content:space-around;
    align-items:center;

`

const Screen2Habitos = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFF;

`


const Screen2Hoje = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #000000;

`



const Screen2Historico = styled.h1`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFF;

`

const Blue = styled.div`

    width: 91px;
    height: 91px;
    background: #DBDBDB;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:70px;
    margin-bottom:50px;

`