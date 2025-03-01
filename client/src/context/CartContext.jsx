import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item._id === product._id && item.selectedSize === product.selectedSize
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (_id, selectedSize) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item._id === _id && item.selectedSize === selectedSize))
    );
  };

  // Update quantity in cart
  const updateQuantity = (_id, selectedSize, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === _id && item.selectedSize === selectedSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
