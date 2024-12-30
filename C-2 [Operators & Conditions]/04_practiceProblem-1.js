let gameNumber = 99;

let guessNumber = Number(prompt("Guess a number: "));

while(gameNumber !== guessNumber){
    document.write("No! Not correct<br>");
    guessNumber = Number(prompt("Guess the number: "));
}

document.write("Won!");