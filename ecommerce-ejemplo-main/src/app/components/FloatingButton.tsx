'use client';

import React, { useState } from 'react';

const FloatingButton: React.FC = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);

  const handleToggleTour = () => setIsTourOpen(!isTourOpen);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={handleToggleTour}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#ff0080', // Fondo color original
          color: 'black', // Texto siempre negro
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '1.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'background-color 0.3s ease', // Fondo cambia con transición
        }}
        onMouseEnter={(e) => {
          // Fondo oscuro al pasar el mouse
          e.currentTarget.style.backgroundColor = '#333'; // Cambio al pasar el mouse
        }}
        onMouseLeave={(e) => {
          // Fondo original al dejar de pasar el mouse
          e.currentTarget.style.backgroundColor = '#ff0080';
        }}
      >
        🛒
      </button>

      {/* Tour interactivo */}
      {isTourOpen && (
        <div
          style={{
            position: 'fixed',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            width: '80%',
            maxWidth: '500px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 1001,
            textAlign: 'center',
          }}
        >
          <h2 style={{ color: '#ff0080', fontSize: '1.5rem', marginBottom: '10px' }}>
            ¡Bienvenido a TuTienda!
          </h2>
          <p
            style={{
              marginBottom: '20px',
              fontSize: '1rem',
              color: 'black', // Aseguramos que el texto sea negro
            }}
          >
            Explora nuestra tienda, agrega productos al carrito y descubre todas las funcionalidades. 
            Dandole al botón Shop Now podrás ver su carrito.
          </p>
          <button
            onClick={handleToggleTour}
            style={{
              backgroundColor: '#ff0080',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingButton;
