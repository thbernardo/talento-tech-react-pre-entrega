import React from 'react';
import { useCart } from '../../context/CartContext'; 

const buttonStyles = {
  padding: '10px 20px',
  fontSize: '1rem',
  fontWeight: '600',
  backgroundColor: '#00aaff',
  color: '#111',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '1rem'
};

const removeButtonStyles = {
  backgroundColor: '#ff4d4d',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  padding: '4px 8px',
  cursor: 'pointer',
  fontSize: '0.8rem',
  marginLeft: '10px'
};
const Cart = () => {
  
  const { cart, removeFromCart, handleCheckout } = useCart();
  
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <div className="cart">
      <h2>🛒Carrito🛒</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li 
              key={index} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                margin: '5px 0',
                padding: '8px 0',
                borderBottom: '1px solid var(--border-color)' 
              }}
            >
              <img 
                src={item.background_image} 
                alt={item.name}
                style={{
                  width: '60px',
                  height: '40px',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginRight: '10px'
                }}
              />
              <span style={{ flexGrow: 1, fontSize: '0.9rem' }}>
                {item.name} - ${item.price}
              </span>
              <button 
                style={removeButtonStyles} 
                onClick={() => removeFromCart(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      
      <p><strong>Total de Items: {cart.length}</strong></p>
      <p><strong>Precio Total: ${total}</strong></p>
      
      <button 
        style={buttonStyles}
        onClick={handleCheckout} 
        disabled={cart.length === 0} 
      >
        Comprar Ahora
      </button>
    </div>
  );
};

export default Cart;