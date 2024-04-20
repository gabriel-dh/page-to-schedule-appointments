import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Importa configureStore desde Redux Toolkit
import rootReducer from './helpers/reducers';
import App from './App.jsx';
import './index.css';

// Crea el store de Redux con configureStore de Redux Toolkit
const store = configureStore({
  reducer: rootReducer, // Pasar el rootReducer como argumento
  // Otras configuraciones opcionales aquí, como middleware, enhancers, etc.
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
