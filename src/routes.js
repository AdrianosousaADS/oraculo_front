import React, { useState } from 'react';
import {BrowserRouter,
Routes,
Route

} from 'react-router-dom';
import Home from './pages/Home';
import Veiculos from './pages/Veiculos';
import SobreNos from './pages/SobreNos';
import Login from './pages/Login';
import Header from './componentes/header';


function RouterApp() {
  
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veiculos" element={<Veiculos />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default RouterApp;
