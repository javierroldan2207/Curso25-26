import React, { useContext } from 'react';
import UserContext from './UserContext';

function Footer() {
  const { usuario } = useContext(UserContext);

  return (
    <footer>
      <p>Usuario actual: {usuario}</p>
    </footer>
  );
}

export default Footer;
