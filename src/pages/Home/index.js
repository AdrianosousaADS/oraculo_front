import React from 'react';
import './Home.css';
import automotivo from './img/automotiva.jpg'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Oráculo Automotivo</h1>
      <p>Encontre respostas para suas perguntas sobre automóveis.</p>
      <img src={automotivo} alt="Minha Imagem" />
    </div>
  );
}

export default Home;