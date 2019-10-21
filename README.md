# word-guess-constructor

## Overview

This is a word guess game built on javascript object constructors. 

* The first constructor is the Letter constructor - this takes in a character and uses it to return either the actual character or an underscore(_).

* The second construtor relies on the Letter constructor - this is the Word Constructor. This takes in a word, splits the word so that each letter is made into a new Letter object and displays underscores based on the length of the word. Then it checks to see if the user guess is in word and uses the Letter construtor to display either the value or the underscore. 

* The third contructor relies on the Word constructor and inquirer. A random word is generated from the array of songs and that word is used to create the new Word constructor. Inquirer prompts the user to guess a letter - if they get it right the letter will appear; if they get it wrong - no letter will appear. The amount of chances the user has depends on the length of the word + 5 extra guesses. 

### Dependencies
* Inquirer NPM