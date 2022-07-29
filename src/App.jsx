import { useState } from "react"
import { Tablero } from "./components/Tablero"

function App() {

  const [turno, setTurno]=useState('x')

  const handleToggleTurno = () =>{
    if( turno === 'x' ){
      setTurno('o')
    }else{
      setTurno('x');
    }
  }

  return (
    <div className="container">
      <h1>Tic Tac Too</h1>
      <h2>Es turno de <span>{turno}</span></h2>
      <Tablero turno={turno} toggleTurno={handleToggleTurno}/>
    </div>
  )
}

export default App
