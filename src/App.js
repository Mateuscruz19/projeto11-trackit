import React from 'react';
// import styled from 'styled-components';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useContext } from 'react';
import AuthProvider from './context.js/auth';
import Habitos from './Habitos';

export default function App(){



    
    return (
        <>
        <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Cadastro' element={<Register/>}/>
                <Route path='/Habitos' element={<Habitos/>}/>
                <Route path='/historico'/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
        </>
    )
}
