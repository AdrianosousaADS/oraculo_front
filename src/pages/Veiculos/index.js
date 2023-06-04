import React, { useState } from 'react';
import './style.css';
function ListaCarros({ onAddCar }) {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const car = { marca, modelo, ano };
      onAddCar(car);
      setMarca('');
      setModelo('');
      setAno('');
    };
  
    return (
      <div className="container">
        <h1>Registe o seu veiculo :</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Marca:
            <input
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
          </label>
          <br />
          <label>
            Modelo:
            <input
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />
          </label>
          <br />
          <label>
            Ano:
            <input
              type="text"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Adicionar Carro</button>
        </form>
      </div>
    );
  }
  
  export default ListaCarros;