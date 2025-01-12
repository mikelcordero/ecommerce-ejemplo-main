// src/app/context/ChristmasContext.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ChristmasContextType {
  isChristmas: boolean;
  toggleChristmas: () => void;
}

const ChristmasContext = createContext<ChristmasContextType | undefined>(undefined);

export const ChristmasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isChristmas, setIsChristmas] = useState(false);

  const toggleChristmas = () => {
    setIsChristmas((prev) => !prev); // Alterna entre true y false
  };

  return (
    <ChristmasContext.Provider value={{ isChristmas, toggleChristmas }}>
      {children}
    </ChristmasContext.Provider>
  );
};

export const useChristmas = (): ChristmasContextType => {
  const context = useContext(ChristmasContext);
  if (!context) {
    throw new Error('useChristmas must be used within a ChristmasProvider');
  }
  return context;
};
