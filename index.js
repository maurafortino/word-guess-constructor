var Word = require("./word");
var inquirer = require("inquirer");

var randomWordArray = [
    "sweet creature",
    "all too well",
    "beige",
    "truth hurts",
    "dog years",
    "back in my body",
    "wildflowers",
    "storms",
    "leather and lace",
    "after the storm",
    "perfect places",
    "liability",
    "supercut",
    "defying gravity"
];

var randomWordIndex = Math.floor(Math.random() * randomWordArray.length);
var randomWord = new Word(randomWordArray[randomWordIndex]);
var remainingGuesses = randomWord.word.length + 5;
console.log("Guesses Allowed: " + remainingGuesses);
randomWord.displayWord();

function promptUser() {
    if (remainingGuesses > 0) {
        inquirer.prompt([
            {
                name: "userGuess",
                message: "Guess a letter"
            }
        ]).then(function (response) {
            randomWord.checkCharacter(response.userGuess);
            remainingGuesses --;
            console.log("remaining guesses: " + remainingGuesses);
            promptUser();
        });
    }else{
        console.log("no more guesses left. The word was: " + randomWord.word);
    };
};

promptUser();
