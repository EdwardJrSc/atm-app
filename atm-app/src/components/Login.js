import React from 'react';
import '../styles/Login.css'

function Login (props) {
  // Como hacer un formulario en React.
  return (
    <div className='contenedor-login'>
      <div className='contendor-titulo' >
        <h1>Ingresar a No Name</h1>
      </div>
      <div className='contenedor-username'>
        <input className='txt-user' type="text" id="user-login" />
      </div>
      <div className='contenedor-password'>
        <input className='txt-password' type="password" id="pass-login" />
      </div>
      <input className='btn-login' type="button" value="Ingresar" />
    </div>
  );
}

export default Login;