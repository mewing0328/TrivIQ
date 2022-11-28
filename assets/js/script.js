//List of elements in html redefined for js
var startButton = document.querySelector(".start-button");
var card = document.getElementById("card");
var list = document.querySelector(".list");
var question = document.querySelector("question");
var choice = document.querySelector("choice");
var optionA = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var timerEl = document.querySelector(".timer-count");
var highS = document.querySelector(".highScoresStorage");
var currentScore = document.querySelector("#currentScore");
var score = 0;


// ---- ARRAY "questions" ----
var questions = [
    {   
        question : "Placeholder #1",
        answers: {
            optionA : "Wrong!",
            optionB : "Wrong!",
            optionC : "Correct!",
            optionD : "Wrong!",
        },
            correct : "C"
    },
    { 
        question : "Placeholder #2",
        answers: {
            optionA : "Correct!",
            optionB : "Wrong!",
            optionC : "Wrong!",
            optionD : "Wrong!",
        },
            correct : "A"
    },
    { 
        question : "Placeholder #3",
        answers: {
            optionA : "Wrong!",
            optionB : "Wrong!",
            optionC : "Wrong!",
            optionD : "Correct!",
        },
            correct : "D"
    },
    { 
        question : "Placeholder #4",
        answers: {
            optionA : "Correct!",
            optionB : "Wrong!",
            optionC : "Wrong!",
            optionD : "Wrong!",
        },
            correct : "A"
    },
    { 
        question : "Placeholder #5",
        answers: {
            optionA : "Wrong!",
            optionB : "Correct!",
            optionC : "Wrong!",
            optionD : "Wrong!",
        },
            correct : "B"
    }];

// ---- END OF THE ARRAY "questions"



// ---- CARD FUNCTION WITH QUESTIONS ----


// ---- END CARD FUNCTION WITH QUESTIONS ----




// ---- TIMER FUNCTION----- 
    // ACCEPTANCE CRITERIA: "THEN a timer starts and I am presented with a question"
    // Shows the timer countdown on the top right which starts when Start Quiz button is pressed
    var secondsLeft = 10

    function setTime(){
        //Sets interval in variable
      var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time Remaining: " + secondsLeft;
        //add a conditional that if I answer a question wrong, the timer subtracts time

        if(secondsLeft ===0) {
            clearInterval(timerInterval);
            sendMessage();
        }

      }, 1000);
    }

    function sendMessage(){
        timerEl.textContent = "Time is done. Your score is: " + score;
        //add content here that asks for the person's initials

        //add content here that shows the high scores from init & adds the current score too

        //add a reset button option

    }


// ---- END TIMER FUNCTION ----- 



// ---- ADD TO SCORE FUNCTION ----
// Look at Activity 11,12 Event Listener

function setCurrentScoreText() {
    currentScore.textContent = score;
}

    //Event listener to add points for correct answers

    // TO DO: create a function for the event listener here where IF correct (true), then score++; setCurrentScoreText();

// END ADD TO SCORE FUNCTION -----
    




// ---- EVENT LISTENER: START QUIZ
    startButton.addEventListener("click", () => {
    //hide the start button when clicked
    startButton.disabled = true;
    startButton.style.display="none";
    //show the card of questions
    card.style.display="block";
    setTime();
    });
    
// ---- END OF EVENT LISTENER: START QUIZ
