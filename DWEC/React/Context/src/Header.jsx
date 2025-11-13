import React, { useContext } from 'react';
import UserContext from './UserContext';

function Header() {
  const { usuario } = useContext(UserContext);

  return (
    <header>
      <h1>Bienvenido, {usuario}!</h1>
    </header>
  );
}

export default Header;
