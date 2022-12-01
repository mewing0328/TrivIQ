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
var pickedEl = document.querySelector("#picked");

var theScore = 0;
var userChoice = "";
var secondsLeft = 5;

//TO DO: add a reset button option

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
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
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
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
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
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
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
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
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
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
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
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
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
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
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
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
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
    {   
        questionEl : "INDEX 2: Question 3",
        choiceAEl : "a",
        choiceBEl : "b",
        choiceCEl : "c",
        choiceDEl : "d",       
        answer : "A", 
    },
];

console.log(userChoice);

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

// ---- END OF THE ARRAY "cards"

// ---- START QUIZ FUNCTION----- 
// ACCEPTANCE CRITERIA: WHEN I click the start button THEN a timer starts and I am presented with a question
function startQuiz (){
    //Event Listener: when start button clicked -> initiate these below
    startBtnEl.addEventListener("click", function(event) {
        event.preventDefault();
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
// ---- END START QUIZ FUNCTION----- 

// ---- TIMER FUNCTION----- 
// ACCEPTANCE CRITERIA: "THEN a timer starts and I am presented with a question"
function setTime(){
    //Sets interval in variable
    var timerInterval = setInterval(function(){
    secondsLeft--;
    timerEl.textContent = "Time Remaining: " + secondsLeft;
    currentScoreEl.textContent = "Your current score is " + theScore;
    
    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
    }
    }
    , 1000);
};
// ---- END TIMER FUNCTION ----- 


// NEXT QUESTION EVENT LISTENER -> When end user clicks on a question choice, the app moves to the next question
//ACCEPTANCE CRITERIA: WHEN I answer a question THEN I am presented with another question
function clickNext () {
    choicesEl.forEach(function (choiceIndex) {
        choiceIndex.addEventListener("click", () => {
            nextQuestion();
        });
    });
};


//ACCEPTANCE CRITERIA: WHEN all questions are answered or the timer reaches 0 THEN the game is over
function nextQuestion(){
        var i = Math.floor(Math.random() * (cards.length));
        var correctAnswer = cards[i].answer;
       
    if(secondsLeft <= 0 || cards.length === 0) {
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


//ACCEPTANCE CRITERIA: WHEN I answer a question incorrectly THEN time is subtracted from the clock
    function checkAnswer(){
        if (userChoice === correctAnswer) {
            theScore++;
        } else {
            if(userChoice === ""){ //makes sure to not remove time when the code first runs since userChoice will be "" so it will !=== correctAnswer
              return checkAnswer;  
            }else{
              secondsLeft = secondsLeft - 5;
            };    
        };
    };

    console.log(userChoice);
    console.log(correctAnswer);

    //End the game once there is only 1 item left in the cards array. 
        //If I wait until 0 items are in the array, the loop breaks and does not log the answer of the last random question
    if(secondsLeft <= 0 || cards.length === 10) {
        checkAnswer();
        endQuiz();
    }else{
        checkAnswer();
        spliceIndex();
    };
    
    //Splice (remove) the i number used and create a new array
    function spliceIndex (){
        cards.splice(i, 1);
    };
};

function endQuiz (){
    //hide the cards section & show the highScore 
    cardEl.style.display="none";    
    currentScoreEl.style.display="none";  
    highScoresEl.style.display="block";
    timerEl.style.display = "none";
    console.log(theScore);
    sendMessage();
};

function sendMessage(){
    setTheScore();
    function setTheScore() {
        localStorage.setItem("theScore", theScore);
    }

    greetingEl.textContent = "Your time is done. Your score is: " + theScore + " points!";

    userInitialsEl.addEventListener("click", () => {

        saveInitials();
        function saveInitials(){
            var listEl = document.createElement("li");
            listEl.innerText = "This is an initial";
            document.body.appendChild(listEl);
        };
    });

    function getTheScore() {
        var storedScore = localStorage.getItem("theScore");
        if (storedScore === null) {
            theScore = 0;
        } else {
            theScore = storedScore;
        } 
    };
};

clickNext();
startQuiz();