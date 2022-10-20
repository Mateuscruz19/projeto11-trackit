import React from 'react';
import styled from 'styled-components';
import Logo from './assets/img/logo.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Circles } from 'react-loader-spinner'

export default function Register(){

    let navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")
    const [Nome, setNome] = useState("")
    const [Foto, setFoto] = useState("")
    const [Confirm, setConfirm] = useState(false)
    const [Loading, setLoading] = useState(false)

    function Registrar(event){
        event.preventDefault();
    
        const obj = {
            email: Email,
            name: Nome,
            image: Foto,
            password: Senha
        }

        setLoading(true)

        console.log(obj)

            if(Email == "" && Senha == "" && Nome == "" && Foto == ""){
                alert("Nao deixe nenhum campo vazio! :D")
                setLoading(false)
            }else{
                
                const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`,obj)

                 promise.then((res) => {
                    setLoading(false)
                     alert("Registrado com sucesso,faça login!")
                      navigate("/")
                 })

                 promise.catch((err) => {
                    alert("Erro")
                    console.log(err.response)
                    setLoading(false)
                 })
            }

    }

    return (
        <>
            <Screen1Register>
                <Screen1Logo src={Logo} alt="Logo em formato de seta indo para cima" />
                <Screen1Email disabled={Loading ? true : false} placeholder='Email' onChange={(E) => setEmail(E.target.value)}></Screen1Email>
                <Screen1Pass disabled={Loading ? true : false} placeholder='Senha' onChange={(S) => setSenha(S.target.value)}></Screen1Pass>
                <Screen1Name disabled={Loading ? true : false} placeholder='Nome' onChange={(N) => setNome(N.target.value)}></Screen1Name>
                <Screen1Photo disabled={Loading ? true : false} placeholder='Foto' onChange={(F) => setFoto(F.target.value)}></Screen1Photo>
                    <Screen1Button onClick={Registrar}>{Loading ? <Circles width={"30px"} color='white'/> : "Cadastrar"}</Screen1Button>
                    <Link to={"/"}>
                        <Scren1Create>Já tem uma conta? Faça login!</Scren1Create>
                    </Link>
                    
            </Screen1Register>
        </>
    )
}

const Screen1Register = styled.div`

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

    &:disabled{
        background: #F2F2F2;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    &::placeholder{
        font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
/* identical to box height */


color: #AFAFAF;
    }
    }
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

    &:disabled{
        background: #F2F2F2;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    &::placeholder{
        font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #AFAFAF;
    }
    }


`

const Screen1Name = styled.input`
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

    &:disabled{
        background: #F2F2F2;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    &::placeholder{
        font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
/* identical to box height */


color: #AFAFAF;
    }
    }
    `

const Screen1Photo = styled.input`
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

    &:disabled{
        background: #F2F2F2;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    &::placeholder{
        font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #AFAFAF;
    }
    }
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
    align-items:center;
    justify-content:center;

    // Placeholder text-css
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    &:disabled{
        background: #52B6FF;
        opacity: 0.7;
        border-radius: 4.63636px;
    }

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