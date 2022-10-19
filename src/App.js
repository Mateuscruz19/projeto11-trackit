import React from 'react';
// import styled from 'styled-components';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

export default function App(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Cadastro' element={<Register/>}/>
                <Route path='/teste' element={<Home/>}/>
                </Routes> 
        </BrowserRouter>         
        </>
    )
}
