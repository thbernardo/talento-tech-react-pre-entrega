import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// --- Imports actualizados a la nueva estructura ---
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css'; 

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = () => {
    setIsLoggedIn(true);
    alert('¡Sesión iniciada! Ahora podés ver el carrito.');
    navigate('/carrito'); 
  };
  

  return (
    <div className="app-container">
      <Nav />
      

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route 
            path="/juegos" 
            element={<ItemListContainer />} 
          />
          
          <Route path="/juegos/:gameId" element={<ItemDetailContainer />} />
          
          <Route 
            path="/login" 
            element={<LoginPage onLogin={handleLogin} />} 
          />
          
          <Route 
            path="/carrito" 
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <CartPage /> 
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;