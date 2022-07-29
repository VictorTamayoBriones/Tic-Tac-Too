import { useState } from "react";
import { verifyWinner } from "../../verifyWinnner";
import { Casilla, TableroContainer } from "./style";

export const Tablero = ({turno, toggleTurno}) =>{

    const [tablero, setTablero]=useState(['', '','', '', '','', '', '',''])
    
    const handleMark = (i) => {
        if( tablero[i] === '' ){
            const tableroTemp = [...tablero];
            tableroTemp[i] = turno;
            setTablero(tableroTemp);

            setTimeout(()=>{
                verifyWinner(tableroTemp);
            }, 80)

            toggleTurno();
        }else{
            alert('Tramposo');
        }
        
    }

    return(
        <TableroContainer>
            {
                tablero.map((casilla, i)=>(
                    <Casilla key={i} id={`casilla${i}`} onClick={ ()=>handleMark(i) } >{casilla}</Casilla>
                ))
            }
        </TableroContainer>
    )
}