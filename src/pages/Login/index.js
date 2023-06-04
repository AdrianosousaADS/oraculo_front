import React, { useState } from 'react';
import styles from'./Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loginError, setLoginError] = useState('');
  const [cadastro, setCadastro] = useState(false);
  const [name, setName] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      if (data.success) {
        // Login válido
        console.log(data.user.name);
      } else {
        // Login inválido
        setLoginError(data.message);
      }
    } catch (error) {
      console.error('Ocorreu um erro ao fazer login:', error);
    }
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handledataNascimentoChange = (event) => {
    setDataNascimento(event.target.value);
  };

  

  const handleCadastro = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, senha, dataNascimento }),
      });

      const data = await response.json();
      if (data.success) {
        // Login válido
        console.log(data.user.name);
      } else {
        // Login inválido
        setLoginError(data.message);
      }
    } catch (error) {
      console.error('Ocorreu um erro ao se cadastrar:', error);
    }
  };

  const toggleCadastro = () => {
    setCadastro(!cadastro);
  };

  return (
    <div className={styles.container}>
    {loginError && <p className={styles.error}>{loginError}</p>}
    <h2>Login</h2>
    {loginError && <p>{loginError}</p>}
    {!cadastro ? (
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="senha"
            value={senha}
            onChange={handleSenhaChange}
            required
          />
        </div>
        <button type="submit">Entrar</button>
        <h1 style={{ fontSize: '1.5rem' }}>Ainda não possui uma conta?</h1>
        <p onClick={toggleCadastro} className={styles.link}>Clique aqui para se cadastrar.</p>
      </form>
    ) : (
      <form onSubmit={handleCadastro}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="senha"
            value={senha}
            onChange={handleSenhaChange}
            required
          />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={handledataNascimentoChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
        <h1 style={{ fontSize: '1.5rem' }}>Já possui uma conta? </h1>
        <p onClick={toggleCadastro} className={styles.link}>Clique aqui para fazer login.</p>
      </form>
    )}
  </div>
);
};
export default Login;

