import { Link } from 'react-router-dom';

const navbarStyles = {
  padding: '1rem',
  backgroundColor: '#25282a', 
  borderBottom: '2px solid #3a3d40',
  textAlign: 'center',
};

const linkStyles = {
  color: '#e0e0e0', 
  textDecoration: 'none',
  margin: '0 1rem',
  fontWeight: '600',
  fontSize: '1.1rem',
};

const Navbar = () => {
  return (
    <nav style={navbarStyles}>
      <Link to="/" style={linkStyles}>Inicio</Link>
      <Link to="/juegos" style={linkStyles}>Juegos</Link>
      <Link to="/carrito" style={linkStyles}>Carrito</Link>
    </nav>
  );
};

export default Navbar;