import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/crearTurno.css'; // Importa el archivo de estilos

const CrearTurno = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTurno = {
        date: formData.date,
        time: formData.time,
        userId: user.id,
        status: 'active'
      };
      const response = await axios.post('http://localhost:3000/appointments', newTurno);
      console.log('Turno creado:', response.data);
      navigate('/turn');
    } catch (error) {
      console.error('Error al crear el turno:', error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="crear-turno-container">
      <h1>Crear Turno</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Crear Turno</button>
      </form>
    </div>
  );
};

export default CrearTurno;
