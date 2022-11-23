//List of elements in html redefined for js
var startButton = document.querySelector(".start-button");
var card = document.getElementById("card");
var questions = document.querySelector(".questions");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var timerElement = document.querySelector(".timer-count");
var highS = document.querySelector(".highScoresStorage");

//The questions are set up as an array
var questions =[
    {   question : "Placeholder #1",
            optionA : "Wrong!",
            optionB : "Wrong!",
            optionC : "Correct!",
            optionD : "Wrong!",
            correct : "C"
    },{ question : "Placeholder #2",
            optionA : "Correct!",
            optionB : "Wrong!",
            optionC : "Wrong!",
            optionD : "Wrong!",
            correct : "A"
    },{ question : "Placeholder #3",
            optionA : "Wrong!",
            optionB : "Wrong!",
            optionC : "Wrong!",
            optionD : "Correct!",
            correct : "D"
    },{ question : "Placeholder #4",
            optionA : "Correct!",
            optionB : "Wrong!",
            optionC : "Wrong!",
            optionD : "Wrong!",
            correct : "A"
    },{ question : "Placeholder #5",
            optionA : "Wrong!",
            optionB : "Correct!",
            optionC : "Wrong!",
            optionD : "Wrong!",
            correct : "B"
    }];

//Variables for the index of the first question and the last question
var firstQIndex = 0;
var lastQIndex = questions.length -1;

function startQuiz(){
    timerElement = 75;
    viewQuiz()
    startTimer()
}

function viewQuiz(){
    var quizDisplayed = questions[firstQIndex];
    questions.innerHTML = "<h3>"+quizDisplayed.question+"</p>"
    optionA.innerHTML = quizDisplayed.optionA;
    optionB.innerHTML = quizDisplayed.optionB;
    optionC.innerHTML = quizDisplayed.optionC;
    optionD.innerHTML = quizDisplayed.optionD;
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerElement--;
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





//Attach event listener to document to listen for key event of the Start button
startButton.addEventListener("click", () => {
    //hide the start button when clicked
    startButton.disabled = true;
    startButton.style.display="none";
    //show the card of questions
    card.style.display="block";
});


