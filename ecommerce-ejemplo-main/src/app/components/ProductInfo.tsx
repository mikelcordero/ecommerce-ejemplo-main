'use client';

import { Product } from "@/app/interfaces/product.interface";
import RatingComponent from "../components/rating";
import useFetch from "@/app/hooks/useFetch";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function ProductInfo() {
  const productId = usePathname().split('/').at(-1);
  const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${productId}`);
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    if (data) {
      dispatch({ type: 'ADD_TO_CART', product: data });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { title, description, price, rating, image } = data as unknown as Product;

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          width: '350px',
          height: '450px',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Image
          src={image}
          width={350}
          height={450}
          alt={title}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
      <div style={{ maxWidth: '400px' }}>
        <h1 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '10px' }}>{title}</h1>
        <RatingComponent rating={rating} />
        <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.5' }}>{description}</p>
        <h2 style={{ fontSize: '1.5rem', color: '#ff0080', marginBottom: '20px' }}>${price}</h2>
        <button
          onClick={handleAddToCart}
          style={{
            backgroundColor: '#ff0080', // Rosa principal
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
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
    </div>
  );
}
