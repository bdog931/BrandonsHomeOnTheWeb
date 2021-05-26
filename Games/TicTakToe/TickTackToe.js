let beenPressed = false;

document.getElementById("1stButton").addEventListener("click", function(){
    if(beenPressed === true){
        beenPressed = false;
    }
    else{
        beenPressed = true;
    }
    doWhatisRequired();
})

function doWhatisRequired(){
    if(beenPressed === true){
        document.getElementById("1stButton").innerHTML = "I've been pressed";
    }
    if(beenPressed === false){
        document.getElementById("1stButton").innerHTML = "I've been reset";
    }
}

let numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.map(x => {
    if(x % 3 === 0){
        return 0;
    }
    if(x % 3 === 1){
        return 1;
    }
    if(x % 3 === 2){
        return(2);
    }
    else{
        return(9);
    }
}));

myJSButton = document.createElement("button");

document.body.appendChild(myJSButton);





