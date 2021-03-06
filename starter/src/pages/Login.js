import React, { useContext } from 'react';

import { Context } from '../Context/AuthContext';

export default function Login() {
  const { authenticate, handleLogin } = useContext(Context);
  return (
    <button type="button" onClick={handleLogin}>
      Entrar
    </button>
  );
}
