import { LOGIN_USER,LOGOUT_USER, SET_USER_APPOINTMENTS } from './types';

import { combineReducers } from 'redux';

// Reducer para el usuario
const userReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER: // Ajustar el caso para LOGIN_USER
      return action.payload;
    default:
      return state;
  }
};

// Reducer para las citas del usuario
const userAppointmentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_APPOINTMENT':
      return [...state, action.payload];
    case 'REMOVE_APPOINTMENT':
      return state.filter(appointment => appointment.id !== action.payload);
    case SET_USER_APPOINTMENTS: // Agrega un caso para manejar la acción SET_USER_APPOINTMENTS
      return action.payload;
    default:
      return state;
  }
};

// Reducer para la autenticación del usuario
const authReducer = (state = { isAuthenticated: false, user: null }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

// Combinar todos los reducers
const rootReducer = combineReducers({
  user: userReducer,
  userAppointments: userAppointmentsReducer,
  auth: authReducer,
  // Otros reducers aquí...
});

export default rootReducer;
