const possiblePieces  = ["t", "i", "s", "l"]; //array with the possible piece shapes

let tStart = ["1d", "2c", "2d", "3d"];
let iStart = ["1d", "2d", "3d", "4d"];
let lStart = ["1c", "2c", "3c", "3d"];
let sStart = ["1c", "2c", "2d", "3d"];
let pieceCurrentPosition = [];
let newPosition = [];
let currentPiece = pieceSelect(possiblePieces); //starting shape selection
startPieceDisplay(currentPiece);   //startin shape display


//event listener to detect which arrow key is pressed
document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
        pieceRotationClock();
    }
    if(e.key === 'ArrowDown') {
        pieceRotationCounter();
    }
    if(e.key === 'ArrowLeft') {
        pieceMoveLeft(pieceCurrentPosition);
        console.log(newPosition);
        console.log(pieceCurrentPosition);
        deLightPiece(pieceCurrentPosition, newPosition);
    }
    if (e.key === 'ArrowRight') {
        pieceMoveRight();
    }
    if (e.key === ' '){
        pieceDropDown();
    }    
})

//function to display the first piece once randomly selected
function startPieceDisplay(shape) {
    switch (shape) {
        case "t":
            pieceCurrentPosition = tStart;
            highlightPiece(tStart);
            break;
        case "i":
            pieceCurrentPosition = iStart;
            highlightPiece(iStart);
            break;
        case "l":
            pieceCurrentPosition = lStart;
            highlightPiece(lStart);
            break;
        case "s":
            pieceCurrentPosition = sStart;
            highlightPiece(sStart);
            break;            
    }
}

//funcion to change the color of a cell to highlight the piece shape
function highlightCell(id) {
    document.getElementById(id).style.background = "chartreuse";
}

//function to restore the color of a cell
function delightCell(id) {
    document.getElementById(id).style.background = "cornflowerblue";
}

// function to highlite the piece
function highlightPiece(pieceStart){
    for (let i = 0; i < pieceStart.length; i++) {
        highlightCell(pieceStart[i]);
    }
}
//function to restore cells to normal color after a piece has been moved
function deLightPiece(pieceStart, pieceEnd) {
    let restoredCells = [];
    for (let i=0; i<pieceStart.length; i++) {
        if (!pieceEnd.inlcudes(String(pieceStart[i]))) {
            console.log(pieceStart[i]);
            console.log(pieceEnd[i]);
            restoredCells.push(pieceStart[i]); 
        }
    for (let x = 0; x<restoredCells.length; x++)
        delightCell(restoredCells[x]);
    }
}

//function to randomly pick a shape from the array
function pieceSelect(arr){
    let index;
    index = Math.floor(Math.random() * arr.length);
    return arr[index]
}

function pieceRotationClock() {

}

function pieceRotationCounter(){

}
function pieceMoveLeft(piece){
    let currentCharArray = [];
    let currentRowArray= [];
    let newPiecePos = [];
    let newCharArray = [];    
    for (let i = 0; i < piece.length; i++) {  

        currentRowArray.push(piece[i].charAt(0));
        currentCharArray.push(piece[i].charAt(1));
        console.log(currentCharArray);
        }

    if (!currentCharArray.includes("a")) {        
        for (let x = 0; x < currentCharArray.length; x++){
            switch (currentCharArray[x]) {
                case "b":
                    newCharArray.push("a");
                    break;
                case "c":
                    newCharArray.push("b");
                    break;
                case "d":
                    newCharArray.push("c");
                    break;
                case "e":
                    newCharArray.push("d");
                    break;
                case "f":
                    newCharArray.push("e");
            }        
        }        
    }
    for (let j = 0; j < currentRowArray.length; j++) {
        newPiecePos.push(currentRowArray[j]+newCharArray[j]);
        
    } 
    highlightPiece(newPiecePos);       
    newPosition = newPiecePos;
    }

function pieceMoveRight(){

}
function pieceDropDown() {

}

function pieceGravity(){

}