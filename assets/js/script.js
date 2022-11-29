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
var resetBtnEl = document.querySelector(".resetButton");

var score = 0;

// ---- ARRAY "cards" ----
var cards = [
    {   
        questionEl : "INDEX 0: I am...",
        choiceAEl : "Happy",
        choiceBEl : "Sad",
        choiceCEl : "Stressed",
        choiceDEl : "Tired",       
        answer : "Sad", 
    },
    {   
        questionEl : "INDEX 1: I would like to eat...",
        choiceAEl : "beef",
        choiceBEl : "pork",
        choiceCEl : "salad",
        choiceDEl : "chicken",       
        answer : "beef", 
    },
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
        answer : "c", 
    },
]   
// ---- END OF THE ARRAY "cards"


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


// ---- TIMER FUNCTION----- 
// ACCEPTANCE CRITERIA: "THEN a timer starts and I am presented with a question"
// Shows the timer countdown on the top right which starts when Start Quiz button is pressed
var secondsLeft = 20;

function setTime(){
    //Sets interval in variable
    var timerInterval = setInterval(function(){
    secondsLeft--;
    timerEl.textContent = "Time Remaining: " + secondsLeft;

    //TO DO: add a conditional that if I answer a question wrong, the timer subtracts time

    if(secondsLeft === 0 || cards.length === 0) {
        clearInterval(timerInterval);
        endQuiz();
    }
    }, 1000);
};

function sendMessage(){
    timerEl.textContent = "Time is done. Your score is: " + score;
    //add content here that asks for the person's initials

    //add content here that shows the high scores from init & adds the current score too

    //add a reset button option
    //
}


// ---- END TIMER FUNCTION ----- 






// NEXT QUESTION EVENT LISTENER -> When end user clicks on a question choice, the app moves to the next question
function clickNext () {
    choicesEl.forEach(function (choiceIndex) {
        choiceIndex.addEventListener("click", () => {
            nextQuestion();
            console.log(choiceIndex); 
        });
    });
};



// Function that is triggered when the clickNext event happens
function nextQuestion(){
    //functions to replace the innerText in html with the array elements in js
    function showQuestion (question){questionEl.innerText = question.questionEl;}
    function showChoiceA (A){choiceAEl.innerText = A.choiceAEl;}
    function showChoiceB (B){choiceBEl.innerText = B.choiceBEl;}
    function showChoiceC (C){choiceCEl.innerText = C.choiceCEl;}
    function showChoiceD (D){choiceDEl.innerText = D.choiceDEl;}

    //randomize the index number
    var i = Math.floor(Math.random() * (cards.length -1));
    showQuestion(cards[i]);
    showChoiceA(cards[i]);
    showChoiceB(cards[i]);
    showChoiceC(cards[i]);
    showChoiceD(cards[i]);

    //remove the i number used and create a new array
    cards.splice(i, 1);
    
    //if the array length is at 0, end the quiz
    if (cards.length === 0){
        endQuiz();
    }
}

function endQuiz (){
//hide the cards section & show the highScore 
cardEl.style.display="none";    
highScoresEl.style.display="block";
sendMessage();
}



console.log(cards);

clickNext();
startQuiz();