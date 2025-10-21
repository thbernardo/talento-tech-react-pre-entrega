import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import CartPage from './pages/CartPage';
import GameDetailPage from './pages/GameDetailPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css'; 

function App() {
  
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [notification, setNotification] = useState(null);
  
  const notificationTimeoutRef = useRef(null);
  const navigate = useNavigate(); 

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

  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const removeFromCart = (itemIndex) => {
    setCart(prevCart => 
      prevCart.filter((_, index) => index !== itemIndex)
    );
  };
  const handleCheckout = () => {
    setCart([]); 
    alert('¡Gracias por tu compra!');
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
    alert('¡Sesión iniciada! Ahora podés ver el carrito.');
    navigate('/carrito'); 
  };


  return (
    <div className="app-container">
      <Navbar />

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
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/juegos" 
            element={<GamesPage onAddToCart={addToCart} />} 
          />
          <Route path="/juegos/:gameId" element={<GameDetailPage />} />
          <Route 
            path="/login" 
            element={<LoginPage onLogin={handleLogin} />} 
          />
          <Route 
            path="/carrito" 
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <CartPage 
                  cartItems={cart} 
                  onRemoveFromCart={removeFromCart}
                  onCheckout={handleCheckout}
                />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;