import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/views/home/Home';
import Signing from './components/views/signing/Signing';


const RoutesNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signing" element={<Signing/>} />
     </Routes> 
    </BrowserRouter>
  )
}

export default RoutesNavigation;