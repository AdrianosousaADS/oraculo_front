import React, { useState } from 'react';
import styles from './Login.module.css';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [cadastro, setCadastro] = useState(false);
  const [name, setName] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cadastroRealizado, setCadastroRealizado] = useState(false);
  const [loginRealizado, setLoginRealizado] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        // Login válido
        setLoginRealizado(true);
        console.log(data.user.name);
        alert('Login realizado com sucesso!');
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
      const response = await fetch('http://localhost:3333/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, dataNascimento }),
      });

      const data = await response.json();
      if (data.success) {
        // Cadastro válido
        setCadastroRealizado(true);
        console.log(data.user.name);
        alert('Cadastro realizado com sucesso!');
      } else {
        // Cadastro inválido
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
      <h1> Login/Cadastro</h1>
      <h2>
        Por favor crie sua conta ou se ja tem faça o login abaixo !
      </h2>
      {loginError && <p className={styles.error}>{loginError}</p>}
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
              value={password}
              onChange={handlePasswordChange}
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
              value={password}
              onChange={handlePasswordChange}
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

