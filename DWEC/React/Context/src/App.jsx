import React, { useState } from 'react';
import UserContext from './UserContext';
import Header from './Header';
import Context from './Context';
import Footer from './Footer';

function App() {
  const [usuario, setUsuario] = useState('Javier'); // Estado compartido

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      <div>
        <Header />
        <Context />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
