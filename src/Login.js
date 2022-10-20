import React from 'react';
import styled from 'styled-components';
import Logo from './assets/img/logo.png'
import { Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner'
import { useState, useEffect } from 'react';

export default function Login(){

    const [Loading, setLoading] = useState(false)


    return (
        <>
            <Screen1Login>
                <Screen1Logo src={Logo} alt="Logo em formato de seta indo para cima" />
                <Screen1Email placeholder='Email'></Screen1Email>
                <Screen1Pass placeholder='Senha'></Screen1Pass>
                <Screen1Button>{Loading ? <Circles width={"30px"} color='white'/> : "Salvar"}</Screen1Button>
                <Link to="/Cadastro">
                    <Scren1Create>Não tem uma conta? Cadastre-se!</Scren1Create>
                </Link>
            </Screen1Login>
        </>
    )
}

const Screen1Login = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-top:100px;

`

const Screen1Logo = styled.img`
    width: 180px;
    height: 178.38px;
`
const Screen1Email = styled.input`

    margin-top:30px;
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 279px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    // Placeholder text-css
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #EFEFEF;


`

const Screen1Pass = styled.input`

    margin-top:10px;
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 279px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    // Placeholder text-css
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;


`

const Screen1Button = styled.button`

    margin-top:10px;    
    width: 303px;
    height: 45px;
    left: 36px;
    top: 381px;
    outline:none;
    border:none;
    background: #52B6FF;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;

    // Placeholder text-css
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #EFEFEF;

`

const Scren1Create = styled.h1`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    color: #52B6FF;
    cursor: pointer;
    margin-top:20px;

&:hover{
    text-decoration-line: underline;
}

`