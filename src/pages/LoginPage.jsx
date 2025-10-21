import React from 'react';
const LoginPage = ({ onLogin }) => {

  const pageStyles = {
    padding: '2rem',
    textAlign: 'center'
  };

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#00aaff',
    color: '#111',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div style={pageStyles}>
      <h2>Iniciar Sesión</h2>
      <p style={{ color: '#b0b0b0' }}>
        Necesitás iniciar sesión para ver tu carrito.
      </p>
      <p>(Esto es una simulación, solo hacé clic en el botón)</p>
      <button style={buttonStyles} onClick={onLogin}>
        Simular Inicio de Sesión
      </button>
    </div>
  );
};

export default LoginPage;