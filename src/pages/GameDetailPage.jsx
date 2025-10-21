import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const detailStyles = {
  container: { 
    padding: '2rem', 
    color: '#e0e0e0',
    maxWidth: '900px', 
    margin: '0 auto' 
  },
  image: { 
    width: '100%', 
    borderRadius: '8px' 
  },
  price: { 
    fontSize: '1.8rem', 
    fontWeight: 'bold', 
    color: 'var(--color-accent)'
  },
  rating: { 
    fontSize: '1.2rem',
    marginBottom: '1.5rem' 
  },
  description: {
    fontSize: '1.1rem',
    color: '#b0b0b0',
    lineHeight: '1.6',
    marginBottom: '2rem' 
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem', 
    backgroundColor: 'var(--bg-card)',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    padding: '1.5rem',
    textAlign: 'center'
  },
  infoItem: {
  },
  infoTitle: {
    margin: '0 0 0.5rem 0',
    color: 'var(--color-accent)',
    fontSize: '1rem',
    textTransform: 'uppercase'
  },
  infoText: {
    margin: 0,
    fontSize: '1.1rem'
  }
};

const GameDetailPage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameDetails = () => {
      setLoading(true);
      setError(null);
      
      fetch(`${import.meta.env.BASE_URL}juegos.json`)
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
    <div style={detailStyles.container}>
      <h1>{game.name}</h1>
      
      <img 
        src={game.background_image} 
        alt={game.name} 
        style={detailStyles.image} 
      />
      
      <p style={detailStyles.price}>Precio: ${game.price}</p>
      <p style={detailStyles.rating}>Rating: {game.rating} ★</p>

      <p style={detailStyles.description}>
        {game.description_short}
      </p>
      <div style={detailStyles.infoGrid}>
        
        <div style={detailStyles.infoItem}>
          <h4 style={detailStyles.infoTitle}>Desarrolladores</h4>
          <p style={detailStyles.infoText}>{game.developers.join(', ')}</p>
        </div>
        
        <div style={detailStyles.infoItem}>
          <h4 style={detailStyles.infoTitle}>Publishers</h4>
          <p style={detailStyles.infoText}>{game.publishers.join(', ')}</p>
        </div>

        <div style={detailStyles.infoItem}>
          <h4 style={detailStyles.infoTitle}>Fecha de Salida</h4>
          <p style={detailStyles.infoText}>{game.released}</p>
        </div>

        <div style={detailStyles.infoItem}>
          <h4 style={detailStyles.infoTitle}>Plataformas</h4>
          <p style_={{ ...detailStyles.infoText, fontSize: '0.9rem' }}>
            {game.platforms.join(', ')}
          </p>
        </div>

      </div>
    </div>
  );
};

export default GameDetailPage;