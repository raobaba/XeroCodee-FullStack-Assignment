import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../components/Home';
import SignIn from '../pages/SignIn';

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>} />
    </Routes>
  )
}

export default Routing