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

    // Thinking about using setInterval with the pieceGravity() function to update it, currently just using this condition as a placeholder
    if(e.key === 'ArrowDown') {
        pieceGravity(pieceCurrentPosition);
        deLightPiece(pieceCurrentPosition, newPosition);
        pieceCurrentPosition = newPosition;
    }
    if(e.key === 'ArrowLeft') {
        pieceMoveLeft(pieceCurrentPosition);
        deLightPiece(pieceCurrentPosition, newPosition);
        pieceCurrentPosition = newPosition;
    }
    if (e.key === 'ArrowRight') {
        pieceMoveRight(pieceCurrentPosition);
        deLightPiece(pieceCurrentPosition, newPosition);
        pieceCurrentPosition = newPosition;
    }
    if (e.key === ' '){
        pieceDropDown();
    }    

    console.log(pieceCurrentPosition);
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
        notIncludes = !pieceEnd.includes(pieceStart[i]);
        if (notIncludes == true) {
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
        // console.log(currentCharArray);
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

function pieceMoveRight(piece){

    let currentCharArray = [];
    let currentRowArray= [];
    let newPiecePos = [];
    let newCharArray = [];    
    for (let i = 0; i < piece.length; i++) {  

        currentRowArray.push(piece[i].charAt(0));
        currentCharArray.push(piece[i].charAt(1));
        // console.log(currentCharArray);
        }

    if (!currentCharArray.includes("f")) {        
        for (let x = 0; x < currentCharArray.length; x++){
            switch (currentCharArray[x]) {
                case "a":
                    newCharArray.push("b");
                    break;
                case "b":
                    newCharArray.push("c");
                    break;
                case "c":
                    newCharArray.push("d");
                    break;
                case "d":
                    newCharArray.push("e");
                    break;
                case "e":
                    newCharArray.push("f");
            }        
        }        
    }
    for (let j = 0; j < currentRowArray.length; j++) {
        newPiecePos.push(currentRowArray[j]+newCharArray[j]);
        
    } 
    highlightPiece(newPiecePos);    
    newPosition = newPiecePos;

}
function pieceDropDown() {

}

function pieceGravity(piece){

    let currentCharArray = [];
    let currentRowArray= [];
    let newPiecePos = [];
    let newRowArray = [];    
    for (let i = 0; i < piece.length; i++) {  

        // Note: Piece can only drop to 9 without problems, need to find how to add two characters for 10+ row position
        currentRowArray.push(piece[i].charAt(0));
        currentCharArray.push(piece[i].charAt(1));
        console.log(currentRowArray);
        }

    if (!currentRowArray.includes("12")) {        
        for (let x = 0; x < currentRowArray.length; x++){
            switch (currentRowArray[x]) {
                case "1":
                    newRowArray.push("2");
                    break;
                case "2":
                    newRowArray.push("3");
                    break;
                case "3":
                    newRowArray.push("4");
                    break;
                case "4":
                    newRowArray.push("5");
                    break;
                case "5":
                    newRowArray.push("6");
                    break;
                case "6":
                    newRowArray.push("7");
                    break;
                case "7":
                    newRowArray.push("8");
                    break;
                case "8":
                    newRowArray.push("9");
                    break;
                case "9":
                    newRowArray.push("10");
                    break;
                case "10":
                    newRowArray.push("11");
                    break;
                case "11":
                    newRowArray.push("12");
                    break;
                
            }        
        }        
    }
    for (let j = 0; j < currentCharArray.length; j++) {
        newPiecePos.push(newRowArray[j]+currentCharArray[j]);
        
    }

    highlightPiece(newPiecePos);    
    newPosition = newPiecePos;

}