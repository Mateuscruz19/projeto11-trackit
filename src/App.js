import React from 'react';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context.js/auth';
import Habitos from './Habitos';
import Historico from './Historico';
import Hoje from './Hoje';

export default function App(){



    
    return (
        <>
        <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Cadastro' element={<Register/>}/>
                <Route path='/Habitos' element={<Habitos/>}/>
                <Route path='/Historico' element={<Historico/>}/>
                <Route path='/Hoje' element={<Hoje/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
        </>
    )
}
