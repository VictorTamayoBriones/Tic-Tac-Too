import { showCasillasWin } from "./showCasillaWin";

export const verifyWinner=(tablero)=>{

    if( tablero[0] != '' ){

        if( tablero[0] === tablero[1] && tablero[0] === tablero[2] ){
            showCasillasWin(0, 1, 2);
            setTimeout(() => {
                alert(`Ganaron las ${tablero[0]}`);
                location.reload();
            }, 300);
            return true;
        }

        if( tablero[0] === tablero[3] && tablero[0] === tablero[6] ){
            showCasillasWin(0, 3, 6);
            setTimeout(() => {
                alert(`Ganaron las ${tablero[0]}`);
                location.reload();
            }, 300);
            return true
        }

        if( tablero[0] === tablero[4] && tablero[0] === tablero[8] ){
            showCasillasWin(0, 4, 8);
            setTimeout(() => {
                alert(`Ganaron las ${tablero[0]}`);
                location.reload();
            }, 300);
            return true
        }

    }


    if( tablero[1] != ''){

        if( tablero[1] === tablero[4] && tablero[1] === tablero[7] ){
            showCasillasWin(1, 4, 7);
            setTimeout(()=>{
                alert(`Ganaron las ${tablero[1]}`);
                location.reload();
            }, 300)
            return true
        }

    }


    if( tablero[2] != '' ){

        if( tablero[2] === tablero[5] && tablero[2] === tablero[8] ){
            showCasillasWin(2, 5, 8);
            setTimeout(()=>{
                alert(`Ganaron las ${tablero[2]}`);
                location.reload();
            }, 300)
            return true
        }

    }


    if( tablero[3] != ''){

        if( tablero[3] === tablero[4] && tablero[3] === tablero[5] ){
            showCasillasWin(3, 4, 5);
            setTimeout(()=>{
                alert(`Ganaron las ${tablero[3]}`);
                location.reload();
            }, 300)
            return true;
        }

    }


    if( tablero[6] != '' ){

        if( tablero[6] === tablero[7] && tablero[6] === tablero[8] ){
            showCasillasWin(6, 7, 8);
            setTimeout(()=>{
                alert(`Ganaron las ${tablero[6]}`);
                location.reload();
            }, 300)
            return true;
        }

        if( tablero[6] === tablero[4] && tablero[6] === tablero[2]){
            showCasillasWin(6, 4, 2);
            setTimeout(()=>{
                alert(`Ganaron las ${tablero[6]}`);
                location.reload();
            }, 300)
            return true
        }

    }

}