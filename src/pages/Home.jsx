import { ProductGrid } from '../components/ProductGrid';

export const Home = () => {
  return (
    <>
      <div style={{
        width: '100%', height: '400px', 
        backgroundImage: 'url(https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1200&auto=format&fit=crop)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
      }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', textTransform: 'uppercase' }}>Pisá Fuerte.</h2>
      </div>
      <main>
        <ProductGrid />
      </main>
    </>
  );
};