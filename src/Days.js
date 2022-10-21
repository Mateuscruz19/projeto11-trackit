import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function Days(props){

    const [Clicou, setClicou] = useState(false)

    function ClickDay(dia){
        console.log(props.index)

        if(Clicou === false){
            setClicou(true)
            props.sa([...props.a,props.index])
            console.log(props.a)
        }else if(Clicou === true){
            setClicou(false)
            var index = props.a.indexOf(props.index); // Let's say it's Bob.
            props.a.splice(index,1);
            console.log(props.a)
        }
    }

    return(
        <DayButton click={Clicou} onClick={() => ClickDay(props.Day)} >{props.Day}</DayButton>
    )
}

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