import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prueba from './assets/Prueba'
import Bio from './Bio'
import Person from './Person'
import SaludososPersonalizado from './SaludosPersonalizado'
import UserCard from './UserCard'
import MovieCard from './MovieCard'
import Contador from './Contador'
import CambiadorTexto from './Cambiadortexto'
import MostrarOcultar from './MostrarOcultar'
import ListTask from './ListTask'
import Regist from './Regist'
import ContacForm from './ContacForm'



export default function App() {
  const [numbers, setNumber] = useState();

  const addContac = (id) => {
    setNumber([...numbers,{id:id, name:nombre, phone:phone}]);
  };

  const deleteContac = (id) =>{
    setNumber(numbers.filter((number)=> number.id !== id));
  };

  return (
    <>
      <ContacForm/>
    </>
  )
}


