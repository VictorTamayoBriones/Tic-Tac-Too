export const showCasillasWin = (a, b ,c) =>{
    const winner_a = document.querySelector(`#casilla${a}`)
    winner_a.classList.add('win');

    const winner_b = document.querySelector(`#casilla${b}`)
    winner_b.classList.add('win');

    const winner_c = document.querySelector(`#casilla${c}`)
    winner_c.classList.add('win');
}