import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { AuthContext } from './context.js/auth';
import { useState, useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Historico(){

    const { User } = useContext(AuthContext);

    return(
        <>
        <GlobalStyle/>
        <Screen2Header>
          <Screen2Logo>TrackIt</Screen2Logo>
          <Screen2UserPhoto src={User.image}></Screen2UserPhoto>
        </Screen2Header>

        <Screen2Title>Historico</Screen2Title>
        <Screen2Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Screen2Text>

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

const Screen2Title = styled.p`

    width: 100px;
    height: 29px;
    left: 17px;
    top: 98px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-top:100px;
    padding:25px;
`

const Screen2Text = styled.p`

    width: 338px;
    height: 74px;
    left: 15px;
    top: 144px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding:25px;
    margin-top:-30px;
    
    `

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

    padding:10px;
    width: 51px;
    height: 51px;
    left: 306px;
    top: 9px;
    border-radius: 98.5px;
    margin-right:17px;
    
`

const GlobalStyle = createGlobalStyle`
    body {
        background: #E5E5E5;
  }
  a{
    text-decoration:none;
  }
`




const Screen2Footer = styled.footer`

    width: 100%;
    height: 70px;
    bottom:0;
    background: #FFFFFF;
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
    color: #52B6FF;

`


const Screen2Hoje = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFF;

`

const Screen2Historico = styled.h1`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;

`

const Blue = styled.div`

    width: 91px;
    height: 91px;
    background: #52B6FF;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:70px;
    margin-bottom:50px;

`