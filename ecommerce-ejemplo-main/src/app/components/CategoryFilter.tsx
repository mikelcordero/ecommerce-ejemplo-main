import React from 'react';
import { Product } from '../types';

const CategoryFilter: React.FC<{
  products: Product[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}> = ({ products, selectedCategory, onCategoryChange }) => {
  // Obtener las categorías únicas de los productos
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="category-filter">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="category-select"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
