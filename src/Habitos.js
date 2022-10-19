import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';


export default function Habitos(){

    const days = ["D","S","T","Q","Q","S","S"]
    const daysClicked = []
    const [DayPress, setDayPress] = useState(false)
    const [ShowNewhabit, setNewHabit] = useState(false)


    function DayClick(){

        
    }

    function AddHabit(){
        if(ShowNewhabit === false){
            return setNewHabit(true)
        }else{
           return setNewHabit(false)
        }

    }

    return(
        <>
        <Screen2Conteiner>

            <Screen2HabitosTituloDiv>
                <Screen2HabitosTitulo>Meus Habitos</Screen2HabitosTitulo>
                <Screen2HabitosIconAddHabito onClick={AddHabit}><p>+</p></Screen2HabitosIconAddHabito>
            </Screen2HabitosTituloDiv>

            <Screen2HabitosCreate visible={ShowNewhabit} >
                <Screen2HabitosInput placeholder='nome do hábito'></Screen2HabitosInput>
                <Screen2DaysContainer>
                    {days.map((d) => <DayButton>{d}</DayButton>)}
                </Screen2DaysContainer>
                <Screen2CancelSaveContainer>
                <Cancel>Cancelar</Cancel>
                <SaveButton><p>Salvar</p></SaveButton>
                </Screen2CancelSaveContainer>
            </Screen2HabitosCreate>




             <Screen2HabitosNotFound>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito<br/> para começar a trackear!
             </Screen2HabitosNotFound>
         </Screen2Conteiner>
        </>
    )

}

const Screen2Conteiner = styled.div`

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
    color: #126BA5;

`

const Screen2HabitosIconAddHabito = styled.div`

    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;

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
}


`

const Screen2HabitosCreate =styled.div`

    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display:${props => props.visible ? "block" : "none"};

`
const Screen2HabitosInput = styled.input`

    width: 303px;
    height: 45px;
    left: 36px;
    top: 165px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
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
    color: #666666;

&::placeholder{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    }
`

const Screen2DaysContainer = styled.div`

    margin:10px;
    height:35px;
    width:230px;
    display:flex;
`

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
    color: #DBDBDB;
    display:flex;
    align-items:center;
    justify-content:center;

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
    
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}
    
    `







const Screen2HabitosNotFound = styled.p`

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top:30px;
    margin-left:5px;
`
