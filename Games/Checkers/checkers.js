

const width = 8;
const height = 8;

let board = new Array(width);

for(let i=0;i<width; i++){
    board[i] = new Array(height);
}

for(let i=0; i<width; i++){
    for(let j=0; j<height; j++){
        board[i][j] = i + j;
        let gridBackdrop = document.createElement("td");
        let gridPiece = document.createElement("DIV");
        if((i + j) % 2 == 0){
           gridPiece.className = "dark-stones"; 
        }
        if((i + j) % 2 == 1){
            gridPiece.className = "lighter-stones";
        }
        console.log(i + j + ", ");
    }
}

document.getElementById("clickMe").addEventListener("click", function(){
    document.getElementById("clickMe").innerHTML = "I've been clicked";
})


