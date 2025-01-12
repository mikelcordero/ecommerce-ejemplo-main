'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';
import CartModal from './CartModal';
import { useChristmas } from '../context/ChristmasContext';

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isChristmas, toggleChristmas } = useChristmas();

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <header className={`header ${isChristmas ? 'christmas-mode' : ''}`}>
      <ThemeToggleButton />
      <button
        onClick={toggleChristmas}
        style={{
          backgroundColor: isChristmas ? '#004d00' : '#ff0080',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginLeft: '10px',
        }}
      >
        {isChristmas ? 'Salir de Modo Navideño' : 'Activar Modo Navideño 🎄'}
      </button>
      <div className="header-overlay"></div>
      <div className="header-content">
        <h1 className="header-title">
          <span className="highlight">Tu</span>Tienda
        </h1>
        <p className="header-subtitle">Your destination for amazing deals</p>
        <div className="header-buttons">
          <button className="header-button" onClick={handleOpenCart}>
            Shop Now
          </button>
          <button className="header-button-secondary">Learn More</button>
        </div>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
    </header>
  );
};

export default Header;
