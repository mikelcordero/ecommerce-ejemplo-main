'use client';

import React, { useState, useEffect } from 'react';
import { Product } from './types';
import ProductCard from './components/ProductCard'; // Ajusta la ruta según la ubicación de ProductCard
import CategoryFilter from './components/CategoryFilter'; // Ajusta la ruta según la ubicación de CategoryFilter

const PRODUCTS_PER_PAGE = 10; // Número de productos por página

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Obtener productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error cargando productos:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filtrar productos por categoría
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll al inicio
    }
  };

  return (
    <div className="home-page">
      <h1>Welcome to ShopSphere</h1>

      {/* Filtro de categorías */}
      <CategoryFilter
        products={products}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Lista de productos en grid */}
      <div
        className="product-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Configura 4-5 columnas
          gap: '20px', // Espaciado entre productos
          padding: '20px',
        }}
      >
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      {/* Controles de paginación */}
      <div className="pagination" style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: '10px 20px',
            margin: '0 5px',
            backgroundColor: '#ff0080',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            opacity: currentPage === 1 ? 0.5 : 1,
          }}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: '10px 20px',
            margin: '0 5px',
            backgroundColor: '#ff0080',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            opacity: currentPage === totalPages ? 0.5 : 1,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
