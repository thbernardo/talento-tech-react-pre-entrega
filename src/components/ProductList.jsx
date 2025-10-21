
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart }) => {
  return (

    <div className="product-list">
      
      <h2>Juegos Disponibles</h2>

      <div className="items-container">
        {products.map(game => (
          <ProductItem key={game.id} product={game} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;