import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home.tsx';
import SignUp from '../pages/SignUp.tsx';
import SignIn from '../pages/SignIn.tsx';


const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
     </Routes>
  );
};

export default Routing;
