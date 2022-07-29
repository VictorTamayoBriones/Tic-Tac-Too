import { useState } from "react";
import { verifyWinner } from "../../verifyWinnner";
import { Casilla, TableroContainer } from "./style";

export const Tablero = ({turno, toggleTurno}) =>{

    const [tablero, setTablero]=useState(['', '','', '', '','', '', '',''])
 
    const handleMark = (i) => {
        const tableroTemp = [...tablero];
        tableroTemp[i] = turno;
        setTablero(tableroTemp);
        verifyWinner(tableroTemp);
        toggleTurno();
    }

    return(
        <TableroContainer>
            {
                tablero.map((casilla, i)=>(
                    <Casilla key={i} onClick={ ()=>handleMark(i) } >{casilla}</Casilla>
                ))
            }
        </TableroContainer>
    )
}