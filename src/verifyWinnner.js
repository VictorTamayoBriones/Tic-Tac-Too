export const verifyWinner=(tablero)=>{

    if( tablero[0] != '' ){

        if( tablero[0] === tablero[1] && tablero[0] === tablero[2] ){
            alert(`Ganaron las ${tablero[0]}`);
            location.reload();
            return true;
        }

        if( tablero[0] === tablero[3] && tablero[0] === tablero[6] ){
            alert(`Ganaron las ${tablero[0]}`);
            location.reload();
            return true
        }

        if( tablero[0] === tablero[4] && tablero[0] === tablero[8] ){
            alert(`Ganaron las ${tablero[0]}`);
            location.reload();
            return true
        }

    }


    if( tablero[1] != ''){

        if( tablero[1] === tablero[4] && tablero[1] === tablero[7] ){
            alert(`Ganaron las ${tablero[1]}`);
            location.reload();
            return true
        }

    }


    if( tablero[2] != '' ){

        if( tablero[2] === tablero[5] && tablero[2] === tablero[8] ){
            alert(`Ganaron las ${tablero[2]}`);
            location.reload();
            return true
        }

    }


    if( tablero[3] != ''){

        if( tablero[3] === tablero[4] && tablero[3] === tablero[5] ){
            alert(`Ganaron las ${tablero[3]}`);
            location.reload();
            return true;
        }

    }


    if( tablero[6] != '' ){

        if( tablero[6] === tablero[7] && tablero[6] === tablero[8] ){
            alert(`Ganaron las ${tablero[6]}`);
            location.reload();
            return true;
        }

        if( tablero[6] === tablero[4] && tablero[6] === tablero[2]){
            alert(`Ganaron las ${tablero[6]}`);
            location.reload();
            return true
        }

    }

}