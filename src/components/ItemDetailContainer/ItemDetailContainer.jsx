import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameDetails = () => {
      setLoading(true);
      setError(null);
      
      fetch('/juegos.json') 
        .then(response => response.json())
        .then(data => {
          const foundGame = data.results.find(p => p.id == gameId);
          if (foundGame) {
            setGame(foundGame);
          } else {
            setError('Juego no encontrado');
          }
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    };
    fetchGameDetails();
  }, [gameId]); 

  
  if (loading) return <p style={{ textAlign: 'center', padding: '2rem' }}>Cargando detalles...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center', padding: '2rem' }}>Error: {error}</p>;
  if (!game) return null; 

  return (
    <ItemDetail item={game} />
  );
};

export default ItemDetailContainer;