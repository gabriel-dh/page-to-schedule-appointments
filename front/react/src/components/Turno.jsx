import React from 'react';

const Turno = ({ id, date, time, userId, status }) => {
  return (
    <div className="turno">
      <h2>Turno</h2>
      <p>ID: {id}</p>
      <p>Fecha: {date}</p>
      <p>Hora: {time}</p>
      <p>Usuario ID: {userId}</p>
      <p>Estado: {status}</p>
    </div>
  );
}

export default Turno;