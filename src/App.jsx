import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* la navbar queda afuera del <Routes> porque queremos que se vea SIEMPRE en todas las páginas */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* tengo q poner acá la ruta del carrito */}
      </Routes>

      <footer style={{ backgroundColor: '#111', color: 'white', textAlign: 'center', padding: '20px', marginTop: '50px' }}>
        <p>Hoop Sneakers © 2024 - Todos los derechos reservados.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
