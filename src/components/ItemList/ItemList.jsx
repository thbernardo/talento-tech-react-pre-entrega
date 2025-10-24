import Item from '../Item/Item'; 

const ItemList = ({ products }) => {
  return (
    <div className="items-container">
      {products.map(game => (
        <Item key={game.id} product={game} />
      ))}
    </div>
  );
};

export default ItemList;