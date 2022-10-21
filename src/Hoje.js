import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export default function Hoje(){
    
    return(
        <>


             <Screen2Footer>
         <Link to={"/Habitos"}>
                <Screen2Habitos>Hábitos</Screen2Habitos>
            </Link>
            <Link to={"/Hoje"}>
                 <Screen2Hoje>Hoje</Screen2Hoje>
            </Link>
            <Link to={"/Historico"}>
                 <Screen2Historico>Histórico</Screen2Historico>
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
    color: #52B6FF;

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