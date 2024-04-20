import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginUser } from '../helpers/userActions';
import Navbar from '../components/Navbar';
import '../styles/loginForms.css'; // Importa el archivo de estilos

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      dispatch(loginUser(response.data));
      setMessage('¡Inicio de sesión exitoso!');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage('¡Oops! Ha ocurrido un error.');
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <h1>Iniciar Sesión</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
