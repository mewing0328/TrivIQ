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
var score = 0;



// //This function initiates when the Start button is clicked. The internal functions are shown below it
// function startQuiz(){
//     timerEl = 75;
//     renderQuestion();
// }

//The questions are set up as an array
//string array is called list
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


    // Shows the timer countdown on the top right which starts when Start Quiz button is pressed
    var secondsLeft = 75

    function setTime(){
        //Sets interval in variable
      var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time Remaining: " + secondsLeft;

        if(secondsLeft ===0) {
            clearInterval(timerInterval);
            sendMessage();
        }

      }, 1000);
    }

    function sendMessage(){
        timerEl.textContent = "Time is done. Your score is: " + score;
        //add content here that asks for the person's initials

        //add content here that shows the high scores from init

        //add a reset button option
    }

    //CALL setTime function
    setTime();

    
    //Attach event listener to document to listen for key event of the Start button
    startButton.addEventListener("click", () => {
    //hide the start button when clicked
    startButton.disabled = true;
    startButton.style.display="none";
    //show the card of questions
    card.style.display="block";
    });

