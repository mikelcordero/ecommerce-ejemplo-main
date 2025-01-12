/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '../types';
import { useCart } from "@/app/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const truncatedDescription =
    product.description.length > 50
      ? product.description.substring(0, 50) + '...'
      : product.description;

  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita que el clic en el botón redirija a la página del producto
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <Link href={`/products/${product.id}`} passHref>
      <div
        style={{
          padding: '20px',
          border: '2px solid #ff0080', // Rosa principal
          borderRadius: '10px',
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'scale(1.05)';
          target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'scale(1)';
          target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
        />
        <h3 style={{ marginBottom: '5px' }}>{product.title}</h3>
        <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>${product.price}</p>
        <p
          style={{
            fontSize: '0.9rem',
            color: '#666',
            marginBottom: '10px',
          }}
        >
          {truncatedDescription}
        </p>
        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: '#ff0080', // Rosa principal
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = '#ff66a0'; // Rosa más claro
            target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = '#ff0080'; // Vuelve al rosa principal
            target.style.transform = 'scale(1)';
          }}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
