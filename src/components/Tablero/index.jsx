import { Casilla, TableroContainer } from "./style";

export const Tablero = ({turno}) =>{

    const tablero = ['x', 'o','x', 'o', 'x','x', 'o', 'o','x'];

    return(
        <TableroContainer>
            {
                tablero.map((casilla, i)=>(
                    <Casilla key={i}>{casilla}</Casilla>
                ))
            }
        </TableroContainer>
    )
}