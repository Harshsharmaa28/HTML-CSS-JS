let curp = document.querySelector('.player-info');
let boxes = document.querySelectorAll('.box');
let newgamebtn = document.querySelector('.newg');

let curplayer;
const winningPostions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let gamegrid;
function initgame() {
    curplayer = 'X';
    gamegrid = ['', '', '', '', '', '', '', '', ''];
    boxes.forEach((box, index) => {
        box.innerText = "";
        box.style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
    });
    newgamebtn.classList.remove("active");
    curp.innerText = `Current Player-${curplayer.toUpperCase()}`;
       
}
//swtch player
function swapTurn() {
    if (curplayer === 'X') {
        curplayer = 'O';
    }
    else {
        curplayer = 'X';
    }
    curp.innerText = `Current Player-${curplayer.toUpperCase()}`;
}
//event listerner
function handleClick(index) {
    //for only empty cells
    if (gamegrid[index] === '') {
        gamegrid[index] = curplayer;
        boxes[index].style.pointerEvents = 'none';
        boxes[index].innerHTML = curplayer.toUpperCase();
        swapTurn();
        checkgameover();
    }
}
//check game over
function checkgameover() {
    let result = '';
    winningPostions.forEach((position) => {
        if (
            gamegrid[position[0]] !== '' &&
            gamegrid[position[0]] === gamegrid[position[1]] &&
            gamegrid[position[0]] === gamegrid[position[2]]
          ) {
            boxes.forEach((box) => {
                box.style.pointerEvents = 'none';
            });
            if (gamegrid[position[0]]=== 'X') result = `'X'`;
            else result = `'Y'`;
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });
    //we have winner
if (result != '') {
    curp.innerText = `Winner Player -${result}`;
    newgamebtn.classList.add('active');
}
let boardfilled = true;
gamegrid.forEach((box) => {
    if (box === "") boardfilled = false;
});
//game tied
if (boardfilled) {
    curp.innerText = `Game Tied !`;
    newgamebtn.classList.add('active');
    return;
}
}
//adding event listner
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
});
initgame();
newgamebtn.addEventListener('click', initgame);