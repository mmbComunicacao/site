import { useState } from 'react';
import './style.css';


export function LoginPage() {
  const [isActive, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(current => !isActive);
  };

  return (
    <div>
      <div className="container">
        <div className="left">Left</div>

        <div className="right">
          <h1>Login</h1>
          <div className="formInput">
            <label className={isActive ? "active" : "null"} htmlFor="email">E-mail</label>
            <input onChange={ToggleClass} type="email" id='email' placeholder='E-mail' />
          </div>
          <div className="formInput">
            <label className={isActive ? "active" : "null"} htmlFor="password">Senha</label>
            <input onChange={ToggleClass} type="password" id='password' placeholder='Senha' />
          </div>
          <div className="checkArea">
            <div>
              <input className="checkbox" type="checkbox" placeholder='Lembrar-me' />
              <label htmlFor="checkbox">Lembrar-me</label>
            </div>
            <p>Esqueceu a senha?</p>
          </div>
          <div className="button">
            <a href="#" className='login-button'>Login</a>
          </div>
          <div className="divisor">
            <hr /> ou <hr />
          </div>
          <div className="googleLogin">
            Login com o Google
          </div>
          <p>Ainda não é registrado? <span>Cadastre-se aqui</span></p>
        </div>
      </div>
    </div>
  )
}