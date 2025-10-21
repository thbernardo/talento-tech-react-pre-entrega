import { Link } from 'react-router-dom';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <Link to={`/juegos/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="product-item">
        <img 
          src={product.background_image} 
          alt={product.name} 
          style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '4px' }} 
        />
        <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
        
        <button onClick={(e) => {
          e.preventDefault(); 
          onAddToCart(product);
        }}>
          Añadir al Carrito
        </button>
      </div>
    </Link>
  );
};

export default ProductItem;