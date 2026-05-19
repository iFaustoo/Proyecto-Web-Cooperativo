import './Auth.css';

export const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>INICIAR SESIÓN</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Correo electrónico" className="auth-input" />
          <input type="password" placeholder="Contraseña" className="auth-input" />
          <button type="submit" className="auth-btn">INGRESAR</button>
        </form>
        <p style={{ marginTop: '15px', fontSize: '0.9rem' }}>
          ¿No tenés cuenta? <a href="/register" style={{ color: '#ff4500', fontWeight: 'bold' }}>Registrate acá</a>
        </p>
      </div>
    </div>
  );
};