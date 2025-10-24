import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const navbarStyles = {
  padding: '1rem',
  backgroundColor: '#25282a', 
  borderBottom: '2px solid #3a3d40',
  textAlign: 'center',
};

const getLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? '#00aaff' : '#e0e0e0',
    textDecoration: 'none',
    margin: '0 1rem',
    fontWeight: '600',
    fontSize: '1.1rem',
    borderBottom: isActive ? '2px solid #00aaff' : 'none',
    paddingBottom: '4px'
  };
};

const Nav = () => {
  
  const { cart } = useCart(); 

  return (
    <nav style={navbarStyles}>
      <NavLink to="/" style={getLinkStyle}>Inicio</NavLink>
      <NavLink to="/juegos" style={getLinkStyle}>Juegos</NavLink>
      <NavLink to="/carrito" style={getLinkStyle}>
        Carrito ({cart.length}) 
      </NavLink>
    </nav>
  );
};

export default Nav;