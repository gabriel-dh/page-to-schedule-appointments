import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route
import Register from './views/Register.jsx'; // Importa tu componente Register
import Login from './views/Login.jsx'; // Importa tu componente Login
import Home from './components/home.jsx'; // Supongamos que tienes un componente para la página principal
import MisTurnos from './views/MisTurnos.jsx';
import CrearTurno from './views/crearTurno.jsx';

const App = () => {
  return (
    <div>
      <Routes> {/* Define tus rutas dentro de Routes */}
        <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}
        <Route path="/register" element={<Register />} /> {/* Ruta para el registro */}
        <Route path="/login" element={<Login />} /> {/* Ruta para el login */}
        <Route path="/turn" element={<MisTurnos />} /> {/* Ruta para el login */}
        <Route path="/newturn" element={<CrearTurno />} /> {/* Ruta para el login */}
      </Routes>
    </div>
  );
}

export default App;
