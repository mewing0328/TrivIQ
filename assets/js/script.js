var startBtnEl = document.querySelector(".start-button");
var cardEl = document.querySelector("#card");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelectorAll(".choice");
var choiceAEl = document.querySelector("#A");
var choiceBEl = document.querySelector("#B");
var choiceCEl = document.querySelector("#C");
var choiceDEl = document.querySelector("#D");
var nextBtnEl = document.querySelector("nextBtn");
var highScoresEl = document.querySelector("#highScores")
var timerEl = document.querySelector(".timer-count");
var currentScoreEl = document.querySelector("#currentScore");
var resetBtnEl = document.querySelector(".resetButton");
var greetingEl = document.querySelector("#greeting");
var myFormEl = document.querySelector("#myForm");
var userInitialsEl = document.querySelector("#userInitials");
var responseEl = document.querySelector("#response");
var person1El = document.querySelector("#person1");
var viewHighScoreEl = document.querySelector(".highScoreButton");
var pickedEl = document.querySelector("#picked");

var theScore = 0;

var userChoice = "";

// ---- ARRAY "cards" ----
var cards = [
    {   
        questionEl : "INDEX 0: I am...",
        choiceAEl : "Happy",
        choiceBEl : "Sad",
        choiceCEl : "Stressed",
        choiceDEl : "Tired",   
        answer : "A", 
    },
    {   
        questionEl : "INDEX 1: I would like to eat...",
        choiceAEl : "beef",
        choiceBEl : "pork",
        choiceCEl : "salad",
        choiceDEl : "chicken",       
        answer : "A", 
    },
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
        answer : "A", 
    },
]   
// ---- END OF THE ARRAY "cards"


function init() {
    addToScore();
}

// START BUTTON -> Starts the quiz
function startQuiz (){
    //Event Listener: when start button clicked -> initiate these below
    startBtnEl.addEventListener("click", () => {
        //hide the start button when clicked
        startBtnEl.disabled = true;
        startBtnEl.style.display="none";

        //show the card of cards
        cardEl.style.display="block";

        //run these functions
        nextQuestion(); // SOLVE REMOVE SPLICE IN THIS INSTANCE
        setTime();
        });
}

/*
console.log(choiceIndex.dataState); 

function testUserChoice () {
    if (userChoice === )
}; */

// ---- TIMER FUNCTION----- 
// ACCEPTANCE CRITERIA: "THEN a timer starts and I am presented with a question"
// Shows the timer countdown on the top right which starts when Start Quiz button is pressed

var secondsLeft = 50;

function setTime(){
    //Sets interval in variable
    var timerInterval = setInterval(function(){
    secondsLeft--;
    timerEl.textContent = "Time Remaining: " + secondsLeft;
    currentScoreEl.textContent = "Your current score is " + theScore;
    
    //TO DO: add a conditional that if I answer a question wrong, the timer subtracts time

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        endQuiz();
    }
    }

    , 1000);
};

// ---- END TIMER FUNCTION ----- 


// ---- SCORE ADD, SET, and GET ----




function addToScore () {

    setTheScore();
}

function setTheScore() {
    localStorage.setItem("theScore", theScore);
}

function getTheScore() {
    var storedScore = localStorage.getItem("theScore");
    if (storedScore === null) {
        theScore = 0;
    } else {
        theScore = storedScore;
    } 
    
    showPerson1();
    //TO DO: show the name in the 
    
}

function showPerson1 (one) {person1El.innertext = one.person1El;}


// ---- END OF SCORE ADD, SET, and GET ----

    //add a reset button option


// NEXT QUESTION EVENT LISTENER -> When end user clicks on a question choice, the app moves to the next question
function clickNext () {
    choicesEl.forEach(function (choiceIndex) {
        choiceIndex.addEventListener("click", () => {
            nextQuestion();
        });
    });
};


choiceAEl.onclick = function (){
    userChoice = "A";
};
choiceBEl.onclick = function (){
    userChoice = "B";
};
choiceCEl.onclick = function (){
    userChoice = "C";
};
choiceDEl.onclick = function (){
    userChoice = "D";
};



// Function that is triggered when the clickNext event happens
function nextQuestion(){
   
    if(cards.length === 0){
        endQuiz();
    }else{
        var i = Math.floor(Math.random() * (cards.length));
        var correctAnswer = cards[i].answer;
    };

    if(secondsLeft === 0 || cards.length === 0) {
        endQuiz();
    }else{
        showQuestion(cards[i]);
        showChoiceA(cards[i]);
        showChoiceB(cards[i]);
        showChoiceC(cards[i]);
        showChoiceD(cards[i]);
    };


        //functions to replace the innerText in html with the array elements in js
    function showQuestion (question){questionEl.innerText = question.questionEl;}
    function showChoiceA (A){choiceAEl.innerText = A.choiceAEl;}
    function showChoiceB (B){choiceBEl.innerText = B.choiceBEl;}
    function showChoiceC (C){choiceCEl.innerText = C.choiceCEl;}
    function showChoiceD (D){choiceDEl.innerText = D.choiceDEl;}

    checkAnswer(); 

    function checkAnswer(){
        if (userChoice === correctAnswer) {
            theScore++;
        } else {
            secondsLeft = secondsLeft - 5;
        };
    };

    if(secondsLeft === 0 || cards.length === 0) {
        endQuiz();
    }else{
        spliceIndex();
    };
    

    function spliceIndex (){
        cards.splice(i, 1);
    };

    //remove the i number used and create a new array

    //if the array length is at 0, end the quiz
  
}


function endQuiz (){
//hide the cards section & show the highScore 
cardEl.style.display="none";    
viewHighScoreEl.style.display="none";  
currentScoreEl.style.display="none";  
highScoresEl.style.display="block";
timerEl.style.display = "none";

sendMessage();
};

function sendMessage(){
    greetingEl.textContent = "Your time is done. Your score is: " + theScore;
    myFormEl.addEventListener("submit", function(event) {
        event.preventDefault();
    });
    //add content here that asks for the person's initials
            // object.addEventListener("input", myScript);

    /*

}*/
}

console.log(cards);

init ();
clickNext();
startQuiz();