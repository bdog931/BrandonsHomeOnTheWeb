let width = 8;
let height = 8;


//Creating 2D Array
let rows = new Array(height);
for(let i=0; i<height; i++){
    rows[i] = new Array(width);
}

//Initializing 2D Array
for(let i=0; i<height; i++){
    for(let j=0; j<width; j++){
        console.log((i * 8) + j + 1);
        rows[i][j] = (i * 8) + j + 1;
        let newPiece = document.createElement('div');
        if((i + j) % 2 === 0){
            newPiece.className = "white-tile";
            newPiece.id = (i * 8) + j + 1;
        }
        if((i + j) % 2 === 1){
            newPiece.className = "black-tile";
            newPiece.id = (i * 8) + j + 1;
        }
        document.getElementById("board-container").appendChild(newPiece);
    }
}

//Putting Chips on relevant tiles
let setupGame = () => {
    for(let i=0; i<width; i++){
        for(let j=0; j<height; j++){
            if(i <= 2){
                if((i + j) % 2 === 1){
                    let newChip = document.createElement('div');
                    newChip.className = "golden-piece";
                    document.getElementById((i * 8) + j + 1).appendChild(newChip);
                }
            }
            if(i >= 5){
                if((i + j) % 2 === 1){
                    let newChip = document.createElement('div');
                    newChip.className = "purple-piece";
                    document.getElementById((i * 8) + j + 1).appendChild(newChip);
                }
            }
        }
    }
}

//Set up game
document.getElementById("playGame").addEventListener("click", setupGame);
