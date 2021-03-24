//HTML Elements
const titleDiv = document.querySelector('.title');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.cell');

//Variables
let gameLive = true;
let xNext = true;
let winner = null;

const checkGameStatus = () => {
    const tl = cellDivs[0].classList[2];
    const tm = cellDivs[1].classList[2];
    const tr = cellDivs[2].classList[2];
    const ml = cellDivs[3].classList[2];
    const mm = cellDivs[4].classList[2];
    const mr = cellDivs[5].classList[2];
    const bl = cellDivs[6].classList[2];
    const bm = cellDivs[7].classList[2];
    const br = cellDivs[8].classList[2];

    if(tl && tl===tm && tl===tr){
        gameLive = false;
        winner = tl;
        titleDiv.innerHTML = `${tl} has won!` 
    } else if(ml && ml===mm && ml===mr) {
        gameLive = false
        winner = ml;
        titleDiv.innerHTML = `${ml} has won!`
    } else if(bl && bl===bm && bl===br) {
        gameLive = false
        winner = bl;
        titleDiv.innerHTML = `${bl} has won!`
    } else if(tl && tl===ml && tl===bl) {
        gameLive = false
        winner = tl;
        titleDiv.innerHTML = `${tl} has won!`
    } else if(tm && tm===mm && tm===bm) {
        gameLive = false
        winner = tm;
        titleDiv.innerHTML = `${tm} has won!`
    } else if(tr && tr===mr && tr===br) {
        gameLive = false
        winner = tr;
        titleDiv.innerHTML = `${tr} has won!`
    } else if(tl && tl===mm && tl===br) {
        gameLive = false
        winner = tl;
        titleDiv.innerHTML = `${tl} has won!`
    } else if(tr && tr===mm && tr===bl) {
        gameLive = false
        winner = tr;
        titleDiv.innerHTML = `${tr} has won!`
    } else if (tl && tm && tr && ml && mm && mr && bl && bm && br) {
        gameLive = false;
        titleDiv.innerHTML = 'Game is tied!';
    } else {
        xNext = !xNext
    }
}

//Listeners
resetDiv.addEventListener('click', (e) => {
    window.location.reload();   
})

for(const cell of cellDivs) {
    cell.addEventListener('click', (e) => {
        const loc = e.target.classList[1];
        const classList = e.target.classList;

        if(!gameLive ||classList[2]==='x' || classList[2]==='o') {
            return;
        }

        if(xNext === true) {
            classList.add('x');    
            checkGameStatus();
        } else if(xNext===false) {
            classList.add('o');
            checkGameStatus();
        }
    })
}