'use client';

import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { Product, CartItem } from '../types';

// Definimos las acciones del carrito
type Action =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; id: number };

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.product.id === action.product.id);
      if (existingItem) {
        return {
          cart: state.cart.map(item =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { product: action.product, quantity: 1 }] };
    }
    case 'REMOVE_FROM_CART': {
      return { cart: state.cart.filter(item => item.product.id !== action.id) };
    }
    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<Action>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
