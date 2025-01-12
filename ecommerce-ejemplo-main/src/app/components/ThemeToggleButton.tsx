'use client';

import { useState, useEffect } from 'react';

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar y aplicar el tema almacenado
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, []);

  // Alternar el tema
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Aplicar cambios en el DOM
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {isDarkMode ? '☀️ Tema Claro' : '🌙 Tema Oscuro'}
    </button>
  );
};

export default ThemeToggleButton;
