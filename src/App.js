import React from 'react';
// import styled from 'styled-components';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Cadastro' element={<Register/>}/>
                </Routes> 
        </BrowserRouter>         
        </>
    )
}
