var choices = document.querySelector(".choices");
var highS = document.querySelector(".highscores");
//var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var choices = document.querySelector(".choices");

var userChoice = "";
var highCounter = 0;
// var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInuserChoice = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

/* !!!!!!!!!!!!!!!!! Make the init remeber high scores 
// The init function is called when the page loads 
function init() {
  getWins();
}

//These functions are used by init
function getWins() {
    //Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    //If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      highCounter = 0;
    } else {
      //If a value is retrieved from client storage set the highCounter to that value
      highCounter = storedWins;
    }
    //Render win count to page
    highS.textContent = highCounter;
  }

  */

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  choices.display = inline;
  renderBlanks()
  startTimer()
}


// !!!!!!! When start is clicked, the ul of options section appears


// The winGame function is called when the win condition is met
function winGame() {
  choices.textContent = "YOU WON!!!🏆 ";
  highCounter++
  startButton.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  choices.textContent = "GAME OVER";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  userChoice = words[Math.floor(Math.random() * words.length)];
  lettersInuserChoice = userChoice.split("");
  numBlanks = lettersInuserChoice.length;
  blanksLetters = []
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  choices.textContent = blanksLetters.join(" ")
}

//Updates win count on screen and sets win count to client storage
function setWins() {
  highS.textContent = highCounter;
  localStorage.setItem("winCount", highCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}



function getlosses() {
  var storedLosses = localStorage.getItem("loseCount");
  if (storedLosses === null) {
    loseCounter = 0;
  } else {
    loseCounter = storedLosses;
  }
  lose.textContent = loseCounter;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (userChoice === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
  }
}

//Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (userChoice[i] === letter) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (userChoice[j] === letter) {
        blanksLetters[j] = letter;
      }
    }
    choices.textContent = blanksLetters.join(" ");
  }
}

//Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  //If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }
  //Convert all keys to lower case
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  //Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    var letterGuessed = event.key;
    checkLetters(letterGuessed)
    checkWin();
  }
});

//Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

//Calls init() so that it fires when page opened
init();

//Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  //Resets win and loss counts
  highCounter = 0;
  loseCounter = 0;
  //Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
//Attaches event listener to button
resetButton.addEventListener("click", resetGame);
