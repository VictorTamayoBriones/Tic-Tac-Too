import { useState } from "react"
import { Tablero } from "./components/Tablero"

function App() {

  const [turno, setTurno]=useState('x')

  return (
    <div className="container">
      <h1>Tic Tac Too</h1>
      <h3>Es turno de {turno}</h3>
      <Tablero turno={turno} />
    </div>
  )
}

export default App
