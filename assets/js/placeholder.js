//List of elements in html redefined for js
var startButton = document.querySelector(".start-button");
var card = document.getElementById("card");
var list = document.querySelector(".list");
var questionEl = document.getElementById("question");
var choice = document.querySelector("choice");
var optionAEl = document.getElementById("A");
var optionB = document.getElementById("B");
var optionC = document.getElementById("C");
var optionD = document.getElementById("D");
var timerEl = document.querySelector(".timer-count");
var highS = document.querySelector(".highScoresStorage");
var currentScore = document.getElementById("currentScore");
var responseEl = document.getElementById("response");

var currentQuestion = {}
var acceptingAnswers = true
var score = 0;
var questionCounter = 0
var availableQuestions = []

/*var userChoice = true;
var checkAnswer = "";*/

// ---- ARRAY "questions" ----
var questions = [
    {   
        question : "I am...",
           choiceA: "Happy",
           choiceB: "Sad",
           choiceC: "Stressed",
           choiceD: "Tired",       
           answer: B, 
    }
]   
// ---- END OF THE ARRAY "questions"

var scorePoints = 100
var maxQ = 4


// ---- CARD FUNCTION WITH QUESTIONS ----

//Function prevents default for the buttons. Call this function for any buttons
function showResponse(event) {
    event.preventDefault();
    //Add a conditional that if userChoice === the option which is correct, then true. Else, then false
    
    
   /* for (let i = 0; i < questions.answers.length; i++){
        if (userChoice === optionA) {
    }
    

    } */
    var responseText = "Testing this out";
    responseEl.textContent = responseText; 
}

function nextQuestion () {
    resetState()
    showQuestion(questions[0])
}

function showQuestion (question) {
    questionEl.innerText = question.question;
}

function resetState () {

}

function selectAnswer(e) {

}



//Test function showResponse with an event listener
//Event Listener: When optionA element is clicked, initiate the showResponse event
//IMPORTANT: Make sure to use stopPropagation (activity 17) 
    //so clicking on the other options doesn't cause a cascading event. Each click is SOLO event.
    //these are SIBLINGS so no need for stop Propagation
optionAEl.addEventListener("click", showResponse)
optionB.addEventListener("click", showResponse)
optionC.addEventListener("click", showResponse)
optionD.addEventListener("click", showResponse)

// ---- END CARD FUNCTION WITH QUESTIONS ----



var userScore = {
    user: userInitialsEl.value.trim,
    score: theScore.valueOf,
  };
  
  localStorage.setItem("userScore", JSON.stringify(userScore));
  renderMessage();
  
  });
  


  function renderMessage() {
    var lastScore = JSON.parse(localStorage.getItem("userScore"));
   
    };




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
        //
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
    nextQuestion();
    });
    
// ---- END OF EVENT LISTENER: START QUIZ


var userScore = {
    user: userInitialsEl.value.trim,
    score: theScore.valueOf,
  };
  
  localStorage.setItem("userScore", JSON.stringify(userScore));
  renderMessage();
  
  });
  


  function renderMessage() {
    var lastScore = JSON.parse(localStorage.getItem("userScore"));
   
    };