import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserAppointments } from '../helpers/userActions'; // Importa la acción setUserAppointments

const MisTurnos = () => {
  const user = useSelector(state => state.user);
  const userAppointments = useSelector(state => state.userAppointments);
  const dispatch = useDispatch(); // Obtiene el dispatcher
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAppointments = async () => {
      try {
        // Si no hay un usuario logueado, redirige a la página principal
        if (!user) {
          console.log("Usuario no logueado:", user);
          navigate('/');
        } else {
          // Obtiene todos los turnos del backend
          const response = await axios.get('http://localhost:3000/appointments');
          // Filtra los turnos para obtener solo los del usuario actual
          const userAppointmentsFiltered = response.data.filter(turn => turn.userId === user.id);
          // Guarda los turnos filtrados en el estado global
          dispatch(setUserAppointments(userAppointmentsFiltered));
          console.log("Turnos del usuario:", userAppointmentsFiltered);
        }
      } catch (error) {
        console.error('Error al obtener los turnos:', error);
      }
    };

    fetchUserAppointments();
  }, [user, dispatch, navigate]);

  return (
    <div>
      <h1>Mis Turnos</h1>
      <ul>
        {userAppointments.map((turn, index) => (
          <li key={index}>
            ID: {turn.id}, Date: {turn.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

//export default MisTurnos;


// Importa las dependencias necesarias
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Importa useDispatch para despachar acciones
import axios from 'axios';
import { loginUser } from '../helpers/userActions'; // Importa la acción loginUser
import Navbar from '../components/Navbar';
const Login = () => {
  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Estado local para almacenar el mensaje de error
  const [message, setMessage] = useState('');

  // Acceso al dispatcher
  const dispatch = useDispatch();

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
      // Realizar la petición POST al servidor para el login
      const response = await axios.post('http://localhost:3000/login', formData);
      // Despacha la acción loginUser con la información del usuario
      dispatch(loginUser(response.data));
      setMessage('¡Inicio de sesión exitoso!'); // Mensaje de éxito
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage('¡Oops! Ha ocurrido un error.'); // Mensaje de error
    }
  };

  return (
    <div>
 <Navbar/>

      <h1>Iniciar Sesión</h1>
      {message && <p>{message}</p>} {/* Mostrar mensaje de éxito o error */}
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

//export default Login;
