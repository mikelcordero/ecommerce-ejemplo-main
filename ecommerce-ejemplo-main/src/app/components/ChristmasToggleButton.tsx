// ChristmasToggleButton.tsx
'use client';

import React from 'react';
import { useChristmas } from '../context/ChristmasContext'; // Accedemos al contexto

const ChristmasToggleButton: React.FC = () => {
  const { toggleChristmas, isChristmas } = useChristmas(); // Obtenemos el estado del modo navideño

  return (
    <div>
      <button
        onClick={toggleChristmas}
        style={{
          position: 'fixed',
          bottom: '90px', // Ajustamos la distancia de separación del botón flotante
          right: '20px',
          backgroundColor: '#ff0080',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '1.5rem',
          zIndex: 1010, // Aseguramos que el botón navideño esté encima del botón flotante
        }}
      >
        🎄
      </button>

      {isChristmas && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            fontSize: '1.5rem',
            color: '#ff0080',
            zIndex: 999,
          }}
        >
          ¡Feliz Navidad! 🎅🎄
        </div>
      )}
    </div>
  );
};

export default ChristmasToggleButton;
