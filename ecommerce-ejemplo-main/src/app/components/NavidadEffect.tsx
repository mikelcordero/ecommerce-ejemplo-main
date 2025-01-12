// src/app/components/NavidadEffect.tsx
'use client';

import React from 'react';
import { useChristmas } from '../context/ChristmasContext';

const NavidadEffect: React.FC = () => {
  const { isChristmas } = useChristmas();

  if (!isChristmas) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '2rem',
        color: 'white',
        backgroundColor: '#ff0080',
        padding: '20px',
        borderRadius: '10px',
        zIndex: 1000,
      }}
    >
      🎄 ¡Feliz Navidad! 🎅
    </div>
  );
};

export default NavidadEffect;
