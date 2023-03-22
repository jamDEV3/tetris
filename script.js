const possiblePieces  = ["t", "i", "s", "l"];
startPiece("s")

function startPiece(shape) {
    switch (shape) {
        case "t":
            highlightCell("d1d");
            highlightCell("d2c");
            highlightCell("d2d");
            highlightCell("d3d");
            break;
        case "i":
            highlightCell("d1d");
            highlightCell("d4d");
            highlightCell("d2d");
            highlightCell("d3d");
            break;
        case "l":
            highlightCell("d1c");
            highlightCell("d2c");
            highlightCell("d3c");
            highlightCell("d3d");
            break;
        case "s":
            highlightCell("d1c");
            highlightCell("d2c");
            highlightCell("d2d");
            highlightCell("d3d");
            break;
            
    }

}

function highlightCell(id) {
    document.getElementById(id).style.background = "chartreuse";
}



