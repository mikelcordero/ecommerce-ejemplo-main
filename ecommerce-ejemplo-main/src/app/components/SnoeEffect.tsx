/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import { useChristmas } from '../context/ChristmasContext'; // Usamos el contexto para verificar si el modo navideño está activado

const SnowEffect: React.FC = () => {
  const [flakes, setFlakes] = useState<any[]>([]);
  const { isChristmas } = useChristmas(); // Verificamos si el modo navideño está activado

  useEffect(() => {
    if (!isChristmas) return;

    const interval = setInterval(() => {
      // Creamos una nueva partícula de nieve
      setFlakes((prevFlakes) => [
        ...prevFlakes,
        {
          id: Math.random(), // Aseguramos que cada partícula tenga un id único
          left: Math.random() * 100, // Posición aleatoria
          animationDuration: Math.random() * 5 + 3, // Duración aleatoria para las partículas
          size: Math.random() * 5 + 2, // Tamaño aleatorio
        },
      ]);
    }, 200); // Cada 200ms agregamos una partícula

    return () => clearInterval(interval); // Limpiamos el intervalo cuando el componente se desmonte
  }, [isChristmas]);

  return (
    <>
      {isChristmas && (
        <div className="snow-container">
          {flakes.map((flake) => (
            <div
              key={flake.id}
              className="snowflake"
              style={{
                left: `${flake.left}%`,
                width: `${flake.size}px`,
                height: `${flake.size}px`,
                animationDuration: `${flake.animationDuration}s`,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SnowEffect;
