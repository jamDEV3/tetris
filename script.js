const possiblePieces  = ["t", "i", "s", "l"]; //array with the possible piece shapes
let currentPiece = pieceSelect(possiblePieces); //starting shape selection
startPiece(currentPiece);   //startin shape display


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
        pieceMoveLeft();
    }
    if (e.key === 'ArrowRight') {
        pieceMoveRight();
    }
    if (e.key === ' '){
        pieceDropDown();
    }
    
})


//function to display the first piece once randomly detected
function startPiece(shape) {
    switch (shape) {
        case "t":
            highlightCell("1d");
            highlightCell("2c");
            highlightCell("2d");
            highlightCell("3d");
            break;
        case "i":
            highlightCell("1d");
            highlightCell("4d");
            highlightCell("2d");
            highlightCell("3d");
            break;
        case "l":
            highlightCell("1c");
            highlightCell("2c");
            highlightCell("3c");
            highlightCell("3d");
            break;
        case "s":
            highlightCell("1c");
            highlightCell("2c");
            highlightCell("2d");
            highlightCell("3d");
            break;            
    }
}

//funcion to change the color of a cell to highlight the piece shape
function highlightCell(id) {
    document.getElementById(id).style.background = "chartreuse";
}
//function to randomly pick aa shape from the array
function pieceSelect(arr){
    let index;
    index = Math.floor(Math.random() * arr.length);
    return arr[index]
}

function pieceRotationClock() {

}

function pieceRotationCounter(){

}
function pieceMoveLeft(){

}
function pieceMoveRight(){

}
function pieceDropDown() {

}

function pieceGravity(){

}