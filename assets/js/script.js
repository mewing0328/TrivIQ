var startBtnEl = document.querySelector(".start-button");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelectorAll(".choice");
var choiceAEl = document.querySelector("#A");
var choiceBEl = document.querySelector("#B");
var choiceCEl = document.querySelector("#C");
var choiceDEl = document.querySelector("#D");
var nextBtnEl = document.querySelector("nextBtn");

var cardEl = document.querySelector("#card");
var cardEndQuizEl = document.querySelector("#cardEndQuiz");
var cardHighScoresEl = document.querySelector("#cardHighScores");

var highScoresListEl = document.querySelector(".highScoresList");
var timerEl = document.querySelector(".timer-count");
var currentScoreEl = document.querySelector("#currentScore");
var saveBtnEl = document.querySelector(".saveButton");
var tryAgainBtnEl = document.querySelector(".tryAgainButton");
var tryAgainBtn2El = document.querySelector(".tryAgainButton2");

var clearHighScoresEl = document.querySelector(".clearHighScores");
var viewAllHSEl = document.querySelector(".viewAllHighScores");
var greetingEl = document.querySelector("#greeting");
var instructEl = document.querySelector("#instruct");

var myFormEl = document.querySelector("#myForm");
var userInitialsEl = document.querySelector("#userInitials");
var userInputEl = document.querySelector("#userInput");
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
startQuiz();
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
clickNext();
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
    cardEndQuizEl.style.display="block";
    timerEl.style.display = "none";
    person1El.style.display="none";
    greetingEl.textContent = "Your time is done.  Your score is: " + theScore + " points!";
    instructEl.textContent= "Please save your initials. Then you will have more options appear.";
};


saveBtnEl.addEventListener("click", function (event){
    event.preventDefault();
    storePlayerData();
   // getPlayerData();

    function storePlayerData (){
        var inputInitials = userInputEl.value.trim();
        var theInitials = inputInitials.toUpperCase();

        var playerInfo = {
            score: theScore.valueOf(),
            initials: theInitials,
        };
        var letters = /^[A-Za-z]+$/;


        if (theInitials.length === 2 && theInitials.match(letters)){
            // function getRandomInt(max){
            //     return JSON.stringify(Math.floor(Math.random()*max));
            // }
            var date = new Date().toJSON().slice(0,10);
            var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();    
            JSON.stringify(time);

            localStorage.setItem(("On " + date + " at " + time + ", Player " + theInitials + " earned a score of " + theScore), JSON.stringify(playerInfo));
            person1El.style.display="block";
            person1El.textContent=theInitials.value;
            alert("Your score has been saved! \n Click on 'View All High Scores button' to see how you compare with other players.")
            // After player enters their score, they cannot resubmit - prevents multiple sets in local storage
            saveBtnEl.disabled = true;
            viewAllHSEl.style.display="block";
            tryAgainBtnEl.style.display="block";
        }else{
            alert("Initials need to be letters and has to be 2 letters");
        };






        // the key is the name you designated in the "string" below so to add multiple arrays, change the name of the key
        // make sure to look up how to alert the new user when an initial has been already stored in local storage

        //random number generated to give players so if the same initials are used, it won't override any object existing in local Storage already

    };
});


viewAllHSEl.addEventListener("click", function (event){
    event.preventDefault();
    cardHighScoresEl.style.display="block";
    cardEndQuizEl.style.display="none";

    getPlayerData();
    function getPlayerData (){
        //Get all players data
        for (var i = 0; i <localStorage.length; i++){
            var key = localStorage.key(i);

            var value = JSON.parse(localStorage.getItem(key));

            console.log(key + ", Value: " + value);
            
            var list = document.createElement("li");
            var textForList = document.createTextNode(key);
            list.appendChild(textForList);
            highScoresListEl.appendChild(list);
        };
    };
});




clearHighScoresEl.addEventListener("click", function (event){
    event.preventDefault();
    localStorage.clear();
    highScoresListEl.style.display="none";
});

tryAgainBtnEl.addEventListener("click", function (event){
    event.preventDefault();
    location.reload();
});

tryAgainBtn2El.addEventListener("click", function (event){
    event.preventDefault();
    location.reload();
});