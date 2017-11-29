//Available choices
var letterChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//score
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//computer randomly chooses a letter

var computerGuess = letterChoices [Math.floor(Math.random()*letterChoices.length)];

//guesses left function

var updateGuessesLeft = function() {
	document.querySelector('#guessLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

//letter to guess function

var updateletterToGuess = function(){
	this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

var updateGuessesSoFar = function(){
	document.querySelector('#let').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
};

//reset

var reset = function(){
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateletterToGuess();
	updateGuessesSoFar();
	updateGuessesLeft();

};

updateGuessesLeft();
updateletterToGuess();

//user input key

document.onkeyup = function(event) {
	guessesLeft--;
	var userGuess = event.key; 
	
	guessedLetters.push(userGuess);
	updateGuessesLeft();
	updateGuessesSoFar();

		if (guessesLeft > 0){
			if (userGuess === letterToGuess){
				wins++;
				document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
				alert("Wow, you really are a Psychic");
				reset();
			}
		} else if (guessesLeft == 0){
			losses++;
			document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
			alert("Buhhh.... you are not a Psychic");

			reset();
		}
}