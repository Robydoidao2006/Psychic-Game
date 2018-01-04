 
    
    //choices to pick
    var letters = ["q", "w", "e","r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m" ];

    // display times you won or loss
    var winC = 0;
    var lossC = 0;

    //display the number of chances left 
    var guessesLeft = 10;

    // holds what the user guessed
    var userGuessed = [];
  
    //this will randomly select 1 out of the 26 letters
    var letterToGuess = letters[Math.floor(Math.random() * letters.length)];

    //display whats left to guess 
    var updateGuessesLeft = function() {
      document.querySelector("#guesses-left").innerHTML = guessesLeft;
    };
    /////////////////// come back to this /////////////////////
    var updateLetterToGuess = function() {
      document.querySelector("#letterToGuess").innerHTML = letterToGuess;
    };
    //displays/holds the  userGuessed letters 
    var updateGuessesSoFar = function() {
      document.querySelector("#guesses-so-far").innerHTML = userGuessed.join(", ");
    };

    // this calls the reset function
    function reset() {
      
      guessesLeft = 10
      userGuessed = [];
      //updates the function.
      updateLetterToGuess();
      updateGuessesLeft();
      letterToGuess = letters[Math.floor(Math.random() * letters.length)];

    };

    
      // This will capture the keypress function
      document.onkeydown = function(event) {
      // this will reduce the guesses by 1
      var letter = event.key; 
      // this will ensure that the user is only able to use letters.
      if(event.keyCode >= 65 && event.keyCode <= 90) {
      // this makes the game work even if CAPS are on
      var letter = event.key.toLowerCase();
      // removes -1 from the total guessleft
      guessesLeft--;

      // this sends the info to guessleft and guesssofar
      userGuessed.push(letter);
      updateGuessesLeft();
      updateGuessesSoFar();


      // if there is a match...
      if (letter == letterToGuess) {

        // then it will add +1 to winC.
        winC++;
        document.querySelector("#winC").innerHTML = winC;
        alert("you really are a Psychic");
        // Then we'll reset the game, but not the score
        reset();
      }

      // if we ran out of guesses...
      else if (guessesLeft == 0) {

        // Then it will add +1 to lossC.
        lossC++;
        document.querySelector("#lossC").innerHTML = lossC;
        alert("you are not a phychic");

        // and then the game will reset, but the score stays the same.
        reset();
      }
    }
    
    };






