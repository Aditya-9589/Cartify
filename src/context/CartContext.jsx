import React from 'react'
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, selectedSize) => {
        const existingItem = cartItems.find(
            (item) => item.id === product.id && item.size === selectedSize
        );

        if (existingItem) {
            setCartItems((prev) => 
                prev.map((item) => 
                    item.id === product.id && item.size === selectedSize
                ? { ...item, quantity: item.quantity + 1 }
                : item
                )
            );
        }   else {
            setCartItems((prev) => [
                ...prev,
                {...product, size: selectedSize, quantity: 1},
            ]);
        }
    };

    const removeFromCart = (id, size) => {
        setCartItems((prev) => 
            prev.filter((item) => !(item.id === id && item.size === size))
        );
    };

    const updateQuantity = (id, size, amount) => {
        setCartItems((prev) => 
            prev.map((item) => 
                item.id === id && item.size === size
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
