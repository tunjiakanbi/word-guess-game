var arrayOfWords = ["atmosphere", "saturn", "cryptic", "taxonomy", "zebra", "design", "planning", "sovereign", "fantastic", "principles", "advanced", "interactive", "development", "responsive", "communications", "portfolio"];
var lifes = 10;
var userGuesses = [];
var rightGuesses = [];
var wrongGuesses = [];
var wins = 0;
var losses = 0;
function getWord() {
    var x = Math.floor((Math.random() * (arrayOfWords.length - 1)));
    return arrayOfWords[x];
}
var wordToGuess = getWord();
var lettersToGuess = wordToGuess.split("");

// document.getElementById("demo").innerHTML = wordToGuess;
var correctGuessedLetters = [];

for (var i = 0; i < lettersToGuess.length; i++) {

    correctGuessedLetters.push("_");
    document.getElementById("demo2").innerHTML = correctGuessedLetters;
}


console.log("This is what our correctGuessedLetters array looks like: " + correctGuessedLetters);
document.onkeyup = function (event) {
    var userInput = event.key;
    var inArray = $.inArray(userInput, lettersToGuess);
    console.log("It'll be -1 if letter not found, or else key in lettersToGuess: " + inArray);
    if (inArray >= 0) {
        console.log("Found a valid letter...");
        for (var j = 0; j < lettersToGuess.length; j++){
            if(lettersToGuess[j] == userInput){
                console.log("Found a valid letter!");
                rightGuesses.push(userInput);
                correctGuessedLetters[j] = userInput;
                wins++;
                console.log(wins);
            }
        }
        document.getElementById("demo2").innerHTML = correctGuessedLetters;
    }
    else {
        console.log("Did not Find a valid letter!");
        wrongGuesses.push(userInput);
        losses = lifes--;
        console.log(losses);
    }
    console.log("These are the right guesses: " + rightGuesses);
    console.log("These are the wrong guesses: " + wrongGuesses);
    console.log("These are their guesses, if correct: " + correctGuessedLetters);

    if (rightGuesses.length == lettersToGuess.length) {
        alert("You won.");
    }

}