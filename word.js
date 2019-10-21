var Letter = require("./letter.js");

var Word = function(word){
    this.word = word;
    this.splitArray = this.word.split("");
    this.letterArray = [];
    for(var i = 0; i < this.splitArray.length; i++){
        this.letterArray.push(new Letter(this.word[i]));
    };
    this.displayWord = function(){
        var tempArr = [];
        for(var i = 0; i < this.letterArray.length; i++){
            tempArr.push(this.letterArray[i].displayLetter());
        }
        console.log(tempArr.join(""));
    };

    this.checkCharacter = function(character){
        for(var i = 0; i < this.letterArray.length; i++){
            this.letterArray[i].checkUserGuess(character);
        };
        this.displayWord();
    };
};

module.exports = Word;





