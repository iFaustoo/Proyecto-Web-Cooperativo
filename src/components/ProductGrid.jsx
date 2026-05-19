//VAMO A MAPEAR LA BDD CON ESTE, ES NUESTRA GRILLA

import { productos } from '../data/productos';
import './ProductGrid.css';

export const ProductGrid = () => {
  return (
    <section className="productos-section">
      <h2 className="titulo-seccion">Nuevos Ingresos</h2>
      
      <div className="grilla">
        {productos.map((zapa) => (
          <div key={zapa.id} className="tarjeta-producto">
            <div className="imagen-container">
              <img src={zapa.imagen} alt={zapa.modelo} />
              <span className="badge">{zapa.categoria}</span>
            </div>
            <div className="info-producto">
              <p className="marca">{zapa.marca}</p>
              <h3>{zapa.modelo}</h3>
              <p className="precio">${zapa.precio.toLocaleString()}</p>
              <button className="btn-agregar">Agregar al Carrito</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};