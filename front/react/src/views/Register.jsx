import React, { useState } from 'react';
import axios from 'axios';
import '../styles/registerForm.css'; // Importa el archivo de estilos

const Register = () => {
  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthdate: '',
    nDni: '',
    username: '',
    password: ''
  });

  // Estado local para almacenar el mensaje de éxito o error
  const [message, setMessage] = useState('');

  // Función para manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realizar la petición POST al servidor
      const response = await axios.post('http://localhost:3000/users', formData);
      setMessage('¡Registro exitoso!'); // Mensaje de éxito
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage('¡Oops! Ha ocurrido un error.'); // Mensaje de error
    }
  };

  return (
    <div className="register-form">
      <h1 className='title'>Registro</h1>
      {message && <p className="message">{message}</p>} {/* Mostrar mensaje de éxito o error */}
      <form onSubmit={handleSubmit} className='form'>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nDni">Número de DNI:</label>
          <input
            type="text"
            id="nDni"
            name="nDni"
            value={formData.nDni}
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit" className="submit-btn">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
