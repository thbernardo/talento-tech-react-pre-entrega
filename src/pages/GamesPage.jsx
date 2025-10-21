import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList'; 

const GamesPage = ({ onAddToCart }) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = () => {
      setLoading(true);
      setError(null);   
      
      fetch(`${import.meta.env.BASE_URL}juegos.json`)
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo cargar el archivo juegos.json');
          }
          return response.json();
        })
        .then(data => {
          setProducts(data.results);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    };

    fetchGames();
  }, []);


  return (
    <div className="product-list">
      
      {loading && <p>Cargando juegos...</p>}
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && (
        <ProductList products={products} onAddToCart={onAddToCart} />
      )}
    </div>
  );
};

export default GamesPage;