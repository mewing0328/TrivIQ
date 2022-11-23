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
var timerElement = document.querySelector(".timer-count");
var highS = document.querySelector(".highScoresStorage");
var score = 0;



//This function initiates when the Start button is clicked. The internal functions are shown below it
function startQuiz(){
    timerElement = 75;
    renderQuestion();
}

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




    
    //Attach event listener to document to listen for key event of the Start button
    startButton.addEventListener("click", () => {
    //hide the start button when clicked
    startButton.disabled = true;
    startButton.style.display="none";
    //show the card of questions
    card.style.display="block";
    });

