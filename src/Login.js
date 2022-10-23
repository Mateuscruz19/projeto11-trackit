import React from 'react';
import styled from 'styled-components';
import Logo from './assets/img/logo.png'
import { Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner'
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context.js/auth';
import { createGlobalStyle } from 'styled-components'


export default function Login(){

    const [Loading, setLoading] = useState(false)
    const [Email, setEmail] = useState("")
    const [Senha, setSenha] = useState("")

    const { setUser } = useContext(AuthContext);
    const { User } = useContext(AuthContext);

    let navigate = useNavigate();


    useEffect(() => {
        const nomeUsuario = localStorage.getItem("Usuario");
        const dadosDeserializados = JSON.parse(nomeUsuario);
        console.log(dadosDeserializados)
    
        if(dadosDeserializados !== null){
            setUser(dadosDeserializados)
            navigate("/Hoje")
        }

    },[])



    function LoginAply(event){
        event.preventDefault();
        setLoading(true)

        const body = {
            email: Email,
            password: Senha
        }


        if(Email === "" && Senha === ""){
            alert("Vamos la,voce nao esta nen tentando! Coloque algo nas barras :D")
            setLoading(false)
        }else{

            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)

            promise.then((res) => {
                setLoading(false)
                setUser(res.data)
                const dadosSerializados = JSON.stringify(res.data);
                localStorage.setItem("Usuario", dadosSerializados);
                navigate("/Hoje")
             })

             promise.catch((err) => {
                alert('Usuário e/ou senha inválidos!')
                console.log(err.response)
                setLoading(false)
             })
        }

    }

    return (
        <>
            <Screen1Login>
                <GlobalStyle></GlobalStyle>
                <Screen1Logo src={Logo} alt="Logo em formato de seta indo para cima" />
                <Screen1Email disabled={Loading ? true : false} placeholder='Email' onChange={(e) => setEmail(e.target.value)}></Screen1Email>
                <Screen1Pass type="password" disabled={Loading ? true : false} placeholder='Senha' onChange={(p) => setSenha(p.target.value)}></Screen1Pass>
                <Screen1Button disabled={Loading ? true : false} onClick={LoginAply}>{Loading ? <Circles width={"30px"} color='white'/> : "Salvar"}</Screen1Button>
                <Link to="/Cadastro" disabled={Loading ? true : false}>
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

const GlobalStyle = createGlobalStyle`
body {
    background: #1F2223;
}
a{
text-decoration:none;
}
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
    background: #2e3333;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    // Placeholder text-css
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #D5D5D5;

    &:disabled{
        background: #F2F2F2;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    }


`

const Screen1Pass = styled.input`

    margin-top:10px;
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    left: 36px;
    top: 279px;
    background: #2e3333;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    // Placeholder text-css
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #D5D5D5;

    &:disabled{
        background: #F2F2F2;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

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