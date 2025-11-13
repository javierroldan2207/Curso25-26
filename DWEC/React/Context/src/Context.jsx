import React, { useContext } from 'react';
import UserContext from './UserContext';

function Content() {
  const { setUsuario } = useContext(UserContext);

  const cambiarUsuario = () => {
    const nuevoNombre = prompt('Introduce un nuevo nombre:');
    if (nuevoNombre) setUsuario(nuevoNombre);
  };

  return (
    <main>
      <button onClick={cambiarUsuario}>Cambiar nombre de usuario</button>
    </main>
  );
}

export default Content;
