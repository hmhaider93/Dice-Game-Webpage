//document.querySelector("h1").innerHTML = "Hello World"

function getRandomDice(){
    var randomNumber = Math.floor(Math.random() * 6) +1;  
    //document.querySelector("h1").innerHTML = imageName;
    return randomNumber;
}

function getDiceImage(number){
    var imageName = "images/dice" + number + ".png";
    return imageName;
}

var dice1Number = getRandomDice();
var dice2Number = getRandomDice();
document.querySelector(".img1").setAttribute("src",getDiceImage(dice1Number));
document.querySelector(".img2").setAttribute("src",getDiceImage(dice2Number));

if(dice1Number > dice2Number){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}else if (dice1Number < dice2Number){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}else{
    document.querySelector("h1").innerHTML = "Its a draw😩";
}