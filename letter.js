var Letter = function(character){
    this.letter = character;
    this.guessed = false;

    this.displayLetter = function(){
        if(this.letter === " "){
            this.guessed = true;
            return " ";
        };

        if(this.guessed){
            return this.letter;
        }else{
            return "_ ";
        };
    };

    this.checkUserGuess = function(userGuess){
        if(userGuess === this.letter){
            if(this.guessed){
                return "this has already been guessed. please try again"
            }else{
                this.guessed = true;
  
            };
        };
        this.displayLetter(); 
    };
};

module.exports = Letter;