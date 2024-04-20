import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'; // Importa el archivo de estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="navbar-link">Registro</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">Iniciar sesión</Link>
        </li>
        <li className="navbar-item">
          <Link to="/turn" className="navbar-link">Turnos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/newturn" className="navbar-link">Nuevo turno</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
