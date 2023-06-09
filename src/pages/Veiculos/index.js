import React, { useState } from 'react';
import './style.css';


function ListaCarros({ onAddCar }) {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const car = { marca, modelo, ano };

    try {
      const response = await fetch('/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      });

      const createdCar = await response.json();

      console.log(createdCar); // Opcional: imprime o carro criado no console

      onAddCar(createdCar);
      setMarca('');
      setModelo('');
      setAno('');
    } catch (error) {
      console.error(error); // Opcional: imprime o erro no console
    }
  };

  return (
    <div className="container">
      <h1>Registro de Veiculo:</h1>
      <h2>Registre o seu veiculo em nosso sistema e saiba tudo sobre ele!</h2>

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