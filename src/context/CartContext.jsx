import React, { useState, useContext, createContext, useRef, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);
  const notificationTimeoutRef = useRef(null);

  const addToCart = (game) => {
    setCart(prevCart => [...prevCart, game]);

    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }
    setNotification({ 
      name: game.name, 
      image: game.background_image 
    });
    notificationTimeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  
  const closeNotification = () => {
    if (notificationTimeoutRef.current) {
      clearTimeout(notificationTimeoutRef.current);
    }
    setNotification(null);
  };

  const removeFromCart = (itemIndex) => {
    setCart(prevCart => 
      prevCart.filter((_, index) => index !== itemIndex)
    );
  };

  const handleCheckout = () => {
    setCart([]); 
    alert('¡Gracias por tu compra!');
  };

  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const value = {
    cart,
    notification,
    addToCart,
    removeFromCart,
    handleCheckout,
    closeNotification
  };

return (
    <CartContext.Provider value={value}>
      {notification && (
        <div className="cart-notification">
          <img 
            src={notification.image} 
            alt={notification.name} 
            className="notification-image"
          />
          <div className="notification-content">
            <strong>¡Agregado!</strong>
            <p>{notification.name}</p>
          </div>
          <button onClick={closeNotification} className="notification-close">
            X
          </button>
          <div className="notification-progress"></div>
        </div>
      )}
      {children}
    </CartContext.Provider>
  );
};