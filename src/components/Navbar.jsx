import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header className="header-completo">
      <div className="cinta-top">
        <div className="cinta-left">
          {/* acá cambio el span por un link hacia /login */}
          <Link to="/login" className="icon-text">👤 Iniciar Sesión / Registrarse</Link>
          <span className="icon-text">🛒 Mi Carrito (0)</span>
        </div>
        <div className="cinta-right">
          <span>🔥 Envío gratis superando los $50.000</span>
        </div>
      </div>

      <nav className="nav-principal">
        <div className="logo">
          {/* este logo nos tendría q llevar al inicio */}
          <Link to="/">
            <h1>HOOP<span>STORE</span></h1>
          </Link>
        </div>
        
        <ul className="categorias">
          <li><Link to="/">Hombre</Link></li>
          <li><Link to="/">Mujer</Link></li>
          <li><Link to="/">Niños</Link></li>
        </ul>

        <div className="buscador">
          <input type="text" placeholder="Buscar zapatillas..." />
          <button>🔍</button>
        </div>
      </nav>
    </header>
  );
};