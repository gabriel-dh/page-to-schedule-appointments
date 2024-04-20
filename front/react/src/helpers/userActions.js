import { LOGIN_USER, SET_USER_APPOINTMENTS } from './types';

// Acción para realizar el login del usuario y guardar la información en el store
export const loginUser = (userData) => {
  return {
    type: LOGIN_USER, // Tipo de la acción
    payload: userData // Datos del usuario para actualizar el estado
  };
};

// Definir el tipo de acción para establecer los turnos del usuario


// Acción para establecer los turnos del usuario en el store
export const setUserAppointments = (appointments) => {
  return {
    type: SET_USER_APPOINTMENTS, // Tipo de la acción
    payload: appointments // Turnos del usuario para actualizar el estado
  };
};