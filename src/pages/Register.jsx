import './Auth.css';

export const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>CREAR CUENTA</h2>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Nombre completo" className="auth-input" />
          <input type="email" placeholder="Correo electrónico" className="auth-input" />
          <input type="password" placeholder="Contraseña" className="auth-input" />
          <button type="submit" className="auth-btn">REGISTRARME</button>
        </form>
      </div>
    </div>
  );
};