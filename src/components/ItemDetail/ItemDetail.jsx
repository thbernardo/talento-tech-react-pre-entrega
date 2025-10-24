import React from 'react';

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
  infoItem: {},
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
const ItemDetail = ({ item }) => {
  return (
    <div style={detailStyles.container}>
      <h1>{item.name}</h1>
      
      <img 
        src={item.background_image} 
        alt={item.name} 
        style={detailStyles.image} 
      />
      
      <p style={detailStyles.price}>${item.price}</p>
      <p style={detailStyles.rating}>Rating: {item.rating} ★</p>

      <p style={detailStyles.description}>
        {item.description_short}
      </p>

      <div style={detailStyles.infoGrid}>
        
        <div style={detailStyles.infoItem}>
          <h4 style={detailStyles.infoTitle}>Desarrolladores</h4>
          <p style={detailStyles.infoText}>{item.developers.join(', ')}</p>
        </div>
        
        <div style={detailStyles.infoItem}>
          <h4 style={detailStyles.infoTitle}>Publishers</h4>
          <p style={detailStyles.infoText}>{item.publishers.join(', ')}</p>
        </div>

        <div style={detailStyles.infoItem}>
          <h4 style={detailStyles.infoTitle}>Fecha de Salida</h4>
          <p style={detailStyles.infoText}>{item.released}</p>
        </div>

        <div style={detailStyles.infoItem}>
          <h4 style={detailStyles.infoTitle}>Plataformas</h4>
          <p style_={{ ...detailStyles.infoText, fontSize: '0.9rem' }}>
            {item.platforms.join(', ')}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ItemDetail;