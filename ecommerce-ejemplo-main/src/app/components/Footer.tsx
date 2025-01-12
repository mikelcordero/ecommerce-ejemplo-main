/* eslint-disable @next/next/no-html-link-for-pages */
// src/app/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '40px 20px',
        marginTop: '40px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#ff0080' }}>
        TuTienda
      </div>

      {/* Links */}
      <div
        style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <a
          href="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          Home
        </a>
    
        
        <a
          href="/about"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          About Us
        </a>
        <a
          href="/contact"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1rem',
          }}
        >
          Contact
        </a>
      </div>

      {/* Contact Info */}
      <div style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#bbb' }}>
        <p>123 Calle Falsa, Ciudad, País</p>
        <p>Email: contacto@tutienda.com</p>
        <p>Teléfono: +123 456 789</p>
      </div>

      {/* Social Media Icons */}
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }}
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }}
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff', fontSize: '1.5rem', textDecoration: 'none' }}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: '0.8rem', color: '#888' }}>
        © {new Date().getFullYear()} TuTienda. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
