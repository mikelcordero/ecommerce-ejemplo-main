'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="border px-4 py-2 rounded bg-gray-800 text-white"
    >
      {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
}
