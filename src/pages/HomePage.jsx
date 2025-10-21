import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const homeStyles = {
  textAlign: 'center',
  padding: '2rem 0'
};

const HomePage = () => {
  
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}juegos.json`)
      .then(response => response.json())
      .then(data => {
        setGames(data.results.slice(0, 5)); 
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando juegos para el carrusel:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={homeStyles}>
      <h1>Bienvenido a 🎮 GameStore</h1>
      <p style={{ fontSize: '1.2rem', color: '#b0b0b0', marginBottom: '2rem' }}>
        Tu tienda N°1 para comprar videojuegos.
      </p>
      <h1>Juegos Destacados</h1>
      {loading ? (
        <p>Cargando juegos destacados...</p>
      ) : (
        <Carousel 
          autoPlay={true}      
          infiniteLoop={true}  
          showThumbs={false}   
          showStatus={false}   
          dynamicHeight={false}  
        >
          {games.map(game => (
            <div key={game.id} style={{ height: '800px', color: 'white' }}>
              <img 
                src={game.background_image} 
                alt={game.name} 
                style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
              />
              <p className="legend" style={{ fontSize: '1.2rem', opacity: 0.8 }}>
                {game.name}
              </p>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default HomePage;