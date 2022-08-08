import React from 'react';
import '../styles/Login.css'

function Login (props) {

  return (
    <div className='contenedor-login'>
      <div className='contendor-titulo' >
        <h1>Ingresar a No Name</h1>
      </div>
      <div className='contenedor-username'>
        <input className='txt-user' type="text" name="" id="" />
      </div>
      <div className='contenedor-password'>
        <input className='txt-password' type="password" name="" id="" />
      </div>
      <input className='btn-login' type="button" value="Ingresar" />
    </div>
  );
}

export default Login;