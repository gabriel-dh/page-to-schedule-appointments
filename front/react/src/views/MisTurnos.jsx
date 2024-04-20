import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserAppointments } from '../helpers/userActions'; // Importa la acción setUserAppointments
import '../styles/misTurnos.css'; // Importa el archivo de estilos

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

  const handleCancelAppointment = async (appointmentId) => {
    try {
      // Realiza la solicitud al backend para cancelar el turno por su ID
      await axios.put(`http://localhost:3000/appointments/${appointmentId}/cancel`, { canceled: true });
      // Actualiza los datos de turnos en el frontend para reflejar el cambio
      const updatedAppointments = userAppointments.map(turn =>
        turn.id === appointmentId ? { ...turn, canceled: true } : turn
      );
      dispatch(setUserAppointments(updatedAppointments));
      console.log("Turno cancelado:", appointmentId);
    } catch (error) {
      console.error('Error al cancelar el turno:', error);
    }
  };

  return (
    <div className="mis-turnos-container">
      <h1>Mis Turnos</h1>
      {userAppointments.length > 0 ? (
        <ul>
          {userAppointments.map((turn, index) => (
            <li key={index} className="turno-item">
              <span>ID: {turn.id}</span>
              <span>Date: {turn.date}</span>
              <span>Time: {turn.time}</span>
              <span>Status: {turn.status}</span>
              {!turn.canceled && (
                <button onClick={() => handleCancelAppointment(turn.id)}>Cancelar Turno</button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay turnos agendados para este usuario.</p>
      )}
    </div>
  );
};

export default MisTurnos;
