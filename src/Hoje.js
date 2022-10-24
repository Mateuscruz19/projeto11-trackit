import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState, useEffect,useContext } from 'react';
import { AuthContext } from './context.js/auth';
import Check from "./Check";
import dayjs from "dayjs";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Hoje(){
    
    const { User } = useContext(AuthContext);
    const { P } = useContext(AuthContext);
    const [Have, setHave] = useState(false)
    const [Total, setTotal] = useState(undefined)
    const [Feitas, setFeitas] = useState(0)


     let portugueseDays = ["Domingo", "Segunda", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]

     const now = dayjs()
     const Dia = dayjs().format("DD/MM")
     const Format = `${portugueseDays[now.$W]}, ${Dia}`


    return(
        <>
 <GlobalStyle/>
        <Screen2Header>
          <Screen2Logo>TrackIt</Screen2Logo>
          <Screen2UserPhoto data-identifier="avatar" src={User.image}></Screen2UserPhoto>
        </Screen2Header>

            <Title>{Format}</Title>
            {Have && Total !== 0 ? <Porcent>{Total}% dos hábitos concluídos</Porcent> : <NotFound>Nenhum hábito concluído ainda</NotFound>}

            <Check f={setFeitas} ff={Feitas} tt={Total} t={setTotal} h={setHave}></Check>
  
             <Screen2Footer>
         <Link to={"/Habitos"}>
                <Screen2Habitos data-identifier="habit-page-action">Hábitos</Screen2Habitos>
            </Link>
            <Link to={"/Hoje"}>
                <Blue>
                    <CircularProgressbar value={P} maxValue={100} text="Hoje"></CircularProgressbar>
                </Blue>
            </Link>
            <Link to={"/Historico"}>
                 <Screen2Historico data-identifier="historic-page-action">Histórico</Screen2Historico>
            </Link>
        </Screen2Footer>
        </>
    )
}

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


const Title = styled.p`

    left: 17px;
    top: 98px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-top:90px;
    padding:20px;

`

const NotFound = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    margin-left:20px;
    
    `


const Porcent = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-left:20px;
    color: #8FC549;

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

    &{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFF;
    }

`