import React from 'react';
import Cart from '../components/Cart'; 

const CartPage = ({ cartItems, onRemoveFromCart, onCheckout }) => {
  return (
    <div style={{ padding: '2rem' }}>
      <Cart 
        cartItems={cartItems} 
        onRemoveFromCart={onRemoveFromCart}
        onCheckout={onCheckout}
      />
    </div>
  );
};

export default CartPage;