import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';


export default function Days(props){

    const [Clicou, setClicou] = useState(false)
    const [Day, setDay] = useState("")

    function ClickDay(dia){
        console.log(props.index)
        setDay(dia)

            if(Clicou === false){
                setClicou(true)
                // props.c()
                props.sa([...props.a,props.index])
                console.log(props.a)
            }else if(Clicou === true){
                setClicou(false)
                var index = props.a.indexOf(props.index);
                props.a.splice(index,1);
                console.log(props.a)
            }
     
    }

    return(
        <DayButton click={props.a.includes(props.index)} onClick={() => ClickDay(props.Day)} >{props.Day}</DayButton>
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
    background-color: ${props => props.click ? "#a2a8aa" : "#121414"};
    color: ${props => props.click ? "#121414" : "#939c9e"};
    display:flex;
    align-items:center;
    justify-content:center;

`