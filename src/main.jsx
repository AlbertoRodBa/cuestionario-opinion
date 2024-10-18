import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Importar estilos globales

// Crear el root en el elemento con id 'root' que está en public/index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
