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

function App() {
  return (
    <>
      <Prueba />
      <h1>Hola mundo</h1>
      <p>Buenos</p>
      <Bio/>
      <Person/>
      <SaludososPersonalizado/>
      <UserCard  name= "Mario" age= {28} city="Londres"/>
      <UserCard  name= "Lola" age= {76} city="Madird"/>
      <MovieCard title = "Magos" direcctor = "Luis" year = {2001} />
      <Contador/>
      <CambiadorTexto/>
      <MostrarOcultar/>
    </>
  )
}
export default App

