import React from 'react';
import Navbar from './Navbar'; // Importa el componente Navbar

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Renderiza el componente Navbar */}
      <h1>Bienvenido a la página de inicio</h1>
      <p>Esta es la página de inicio de nuestra aplicación.</p>
    </div>
  );
}

export default Home;
