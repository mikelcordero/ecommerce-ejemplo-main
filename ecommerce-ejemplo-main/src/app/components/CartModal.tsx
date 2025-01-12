/* eslint-disable @next/next/no-img-element */
'use client';

import React from "react";
import { useCart } from '@/app/context/CartContext';

const CartModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();
  const { cart } = state;

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', id: productId });
  };

  const totalPrice = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  if (!isOpen) return null; // Si el carrito no está abierto, no se renderiza

  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '9999',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          width: '80%',
          maxWidth: '600px',  // Ajustado para que no sea tan grande
          height: '80%',      // Ajustado para darle altura con posibilidad de scroll
          maxHeight: '600px', // Tamaño máximo del modal
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflowY: 'auto',  // Permite el desplazamiento si el contenido es grande
        }}
        onClick={(e) => e.stopPropagation()} // Evita que el click cierre el modal
      >
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#ff0080' }}>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <div key={item.product.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <div style={{ maxWidth: '200px' }}>
                  <h3 style={{ fontSize: '1rem', margin: 0 }}>{item.product.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#666', margin: '5px 0' }}>
                    {item.product.description.length > 50
                      ? item.product.description.substring(0, 50) + '...'
                      : item.product.description}
                  </p>
                  <p style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.product.id)}
                style={{
                  backgroundColor: '#ff0080',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  alignSelf: 'center',
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <h3 style={{ fontSize: '1.2rem' }}>Total: ${totalPrice.toFixed(2)}</h3>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#ff0080',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
