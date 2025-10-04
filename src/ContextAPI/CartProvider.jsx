import { createContext, useState, useComtext, useEffect } from 'react';
// Create a context
const CartContext = createContext()


export function CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

// Add to cart 
const addToCart = (product) => {
    setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === product.id);
        if (existingItem) {
// If item already exists, increase quantity
        return prevCart.map((item) =>
            item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
    }
// Add new item with quantity 1
return [...prevCart, { ...product, quantity: 1 }];
    });
};

// remove item from the cart
const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
};

// update function
const updateCartItem = (productId, action) => {
    setCart((prevCart) =>
    prevCart.map((item) =>
        item.id === productId 
        ? {
            ...item,
            quantity:
                action === "increase"
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 1), // Prevent going below 1
            }
        : item
    )
    );
};

return (
    <CartContext.Provider
    value={{ cart, addToCart, removeFromCart, updateCartItem }}
    >
    {children}
    </CartContext.Provider>
    );
}

// Custom hook for using cart context
export function useCart() {
return useContext(CartContext);
}   