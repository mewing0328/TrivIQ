var questionEl = document.querySelector("#question");
var choiceAEl = document.querySelector("#A");
var choiceBEl = document.querySelector("#B");
var choiceCEl = document.querySelector("#C");
var choiceDEl = document.querySelector("#D");
var responseEl = document.querySelector("#response");
var startBtnEl = document.querySelector(".start-button");
var saveBtnEl = document.querySelector(".saveButton");
var tryAgainBtnEl = document.querySelector(".tryAgainButton");
var tryAgainBtn2El = document.querySelector(".tryAgainButton2");
var nextBtnEl = document.querySelector(".nextButton");
var introCardEl = document.querySelector("#introCard");
var cardEl = document.querySelector("#card");
var cardEndQuizEl = document.querySelector("#cardEndQuiz");
var cardHighScoresEl = document.querySelector("#cardHighScores");
var greetingEl = document.querySelector("#greeting");
var instructEl = document.querySelector("#instruct");
var timerEl = document.querySelector(".timer-count");
var currentScoreEl = document.querySelector("#currentScore");
var highScoresListEl = document.querySelector(".highScoresList");
var clearHighScoresEl = document.querySelector(".clearHighScores");
var viewAllHSEl = document.querySelector(".viewAllHighScores");
var myFormEl = document.querySelector("#myForm");
var userInitialsEl = document.querySelector("#userInitials");
var userInputEl = document.querySelector("#userInput");
var pickedEl = document.querySelector("#picked");
var theScore = 0;
var userChoice = "";
var secondsLeft = 120;

// ---- ARRAY "cards" ---- shows all the questions and answers. Please see README for source of the questions
var cards = [
    {questionEl : "What president was a licensed bartender?",
        choiceAEl : "A) Bill Clinton",
        choiceBEl : "B) George Washington",
        choiceCEl : "C) Abraham Lincoln",
        choiceDEl : "D) Donald Trump",   
        answer : "C", 
    },{questionEl : "How many folds are in a chef's hat?",
        choiceAEl : "A) 100",
        choiceBEl : "B) 200",
        choiceCEl : "C) 50",
        choiceDEl : "D) 150",       
        answer : "A", 
    },{questionEl : "Which city is the movie 101 Dalmatians set in?",
        choiceAEl : "A) New York",
        choiceBEl : "B) Munich",
        choiceCEl : "C) Paris",
        choiceDEl : "D) London",       
        answer : "D", 
    },{questionEl : "When was the first iPod released?",
        choiceAEl : "A) 1999",
        choiceBEl : "B) 2001",
        choiceCEl : "C) 2010",
        choiceDEl : "D) 1996",       
        answer : "B", 
    },{questionEl : "Where is the world's largest Starbucks?",
        choiceAEl : "A) Chicago",
        choiceBEl : "B) New York",
        choiceCEl : "C) Beijing",
        choiceDEl : "D) Tokyo",       
        answer : "A", 
    },{questionEl : "How many colors are in a rainbow?",
        choiceAEl : "A) 5",
        choiceBEl : "B) 10",
        choiceCEl : "C) 8",
        choiceDEl : "D) 7",       
        answer : "D", 
    },{questionEl : "What year was the first Barbie doll released?",
        choiceAEl : "A) 1965",
        choiceBEl : "B) 1959",
        choiceCEl : "C) 1998",
        choiceDEl : "D) 1977",       
        answer : "B", 
    },{questionEl : "In football, how many points does a touchdown have?",
        choiceAEl : "A) 3",
        choiceBEl : "B) 7",
        choiceCEl : "C) 6",
        choiceDEl : "D) 5",       
        answer : "C", 
    },{questionEl : "What U.S. state grows coffee beans?",
        choiceAEl : "A) Hawaii",
        choiceBEl : "B) California",
        choiceCEl : "C) Florida",
        choiceDEl : "D) Virginia",       
        answer : "A", 
    },{questionEl : "How many floors does the Eiffel Tower have?",
        choiceAEl : "A) Twelve",
        choiceBEl : "B) Nine",
        choiceCEl : "C) Six",
        choiceDEl : "D) Three",       
        answer : "D", 
    },
];
// ---- END OF THE ARRAY "cards"

// ACCEPTANCE CRITERIA: WHEN I click the start button THEN a timer starts and I am presented with a question
startQuiz();
function startQuiz (){
    //Click event listener: disable the start button, hide introCard, show the questions card, timer on, show next question
    startBtnEl.addEventListener("click", function(event) {
        event.preventDefault();
        startBtnEl.disabled = true;
        startBtnEl.style.display="none";
        introCardEl.style.display="none";
        cardEl.style.display="block";

        //function for timer to automatically start when event listener above is clicked
        setTime();
        function setTime(){
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

        nextQuestion();
        };
    });
};

// FUNCTION nextQuestion satisfies these 
// ACCEPTANCE CRITERIA: WHEN I answer a question THEN I am presented with another question 
// && WHEN all questions are answered or the timer reaches 0 THEN the game is over
// && WHEN I answer a question incorrectly THEN time is subtracted from the clock
function nextQuestion(){
    if(secondsLeft <= 0 || cards.length === 0) {
        endQuiz();
    } else {
        //current question from array is i. I am using cards.length-1 for i since my conditionals are looking for (cards.length === 0) in order to endQuiz
        var i = (cards.length - 1);
        console.log(i);
        var correctAnswer = cards[i].answer;

        //call functions to replace the innerText in html with the array elements in js dependent on i
        showQuestion(cards[i]);
        showChoiceA(cards[i]);
        showChoiceB(cards[i]);
        showChoiceC(cards[i]);
        showChoiceD(cards[i]);
        function showQuestion (question){questionEl.innerText = question.questionEl;}
        function showChoiceA (A){choiceAEl.innerText = A.choiceAEl;}
        function showChoiceB (B){choiceBEl.innerText = B.choiceBEl;}
        function showChoiceC (C){choiceCEl.innerText = C.choiceCEl;}
        function showChoiceD (D){choiceDEl.innerText = D.choiceDEl;}

        //provide a value for variable userChoice after event listener
        choiceAEl.onclick = function (){
            userChoice = "A";
            checkAnswer();
        };
        choiceBEl.onclick = function (){
            userChoice = "B";
            checkAnswer();
        };
        choiceCEl.onclick = function (){
            userChoice = "C";
            checkAnswer();
        };
        choiceDEl.onclick = function (){
            userChoice = "D";
            checkAnswer();
        };

        //check if the userChoice matches the current correctAnswer dependent on i
        //show if they are correct or incorrect, show next button, disable choices when userChoice is defined
        function checkAnswer(){   
            //if correct, add a point to the score  
            if (userChoice === correctAnswer) {
                theScore++;
                responseEl.style.display="block";
                responseEl.textContent = "Correct!"
                responseEl.style.color = "rgb(24, 151, 56)";
                nextBtnEl.style.display="block";
                disableChoices();
            //if incorrect, remove time from timer 
            } else{
                secondsLeft = secondsLeft - 5;
                responseEl.style.display="block";
                responseEl.textContent = "Wrong! Correct answer is " + correctAnswer + "!";
                responseEl.style.color = "rgb(185, 88, 88)";
                nextBtnEl.style.display="block";
                disableChoices();
            };    
            //function to disable choices when userChoice is defined; prevents answer changing
            function disableChoices(){
                choiceAEl.disabled = true;
                choiceBEl.disabled = true;
                choiceCEl.disabled = true;
                choiceDEl.disabled = true;
            }
        };

        //Event listener to show the next question
        nextBtnEl.addEventListener("click", function(event) {
            event.preventDefault();
            responseEl.style.display="none";
            nextBtnEl.style.display="none";

            //if there is no time or the array is 0 in length, end quiz
            if(secondsLeft <= 0 || cards.length === 0) {
                endQuiz();
            //if there still is time and questions, splice (remove) the i number used and create a new array
            }else{
                cards.splice(i, 1);
                console.log(cards);
                //activate the choices buttons again
                choiceAEl.disabled = false;
                choiceBEl.disabled = false;
                choiceCEl.disabled = false;
                choiceDEl.disabled = false;
                nextQuestion();
            };
        });
    };
};

//ACCEPTANCE CRITERIA: WHEN the game is over THEN I can save my initials and my score
function endQuiz (){
    //hide the question card, remove the timer, hide current score, show endQuiz card, provide instructions 
    timerEl.remove();
    cardEl.style.display="none";    
    currentScoreEl.style.display="none";  
    cardEndQuizEl.style.display="flex";
    timerEl.style.display = "none";
    greetingEl.textContent = "THE END. Your score is " + theScore + " points!";
    instructEl.textContent= "Please save your initials. Then more options will appear.";
};

//Event listener button: store player data in local storage
saveBtnEl.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    storePlayerData();

    //describes how to set the date in local storage
    function storePlayerData (){

        //For the initials, trim white space and change to uppercase
        var inputInitials = userInputEl.value.trim();
        var theInitials = inputInitials.toUpperCase();
        var playerInfo = {
            score: theScore.valueOf(),
            initials: theInitials,
        };
        var letters = /^[A-Za-z]+$/;

        //define what initials are acceptable; needs to be only 2 letters
        if (theInitials.length === 2 && theInitials.match(letters)){
            
            //grab the data for the current date
            var date = new Date();

            //save the key as a unique initial by adding the date and score. Reduces any duplicate initials overriding data
            localStorage.setItem(("Player " + theInitials + " earned a score of " + theScore + " on " + date), JSON.stringify(playerInfo));
            alert("Your score has been saved! \n Click on 'View All Scores button' to see past scores.")
            
            //After player enters their score, they cannot resubmit - prevents multiple sets in local storage
            saveBtnEl.disabled = true;
            viewAllHSEl.style.display="flex";
            tryAgainBtnEl.style.display="block";
            saveBtnEl.style.display="none";
        }else{
            //Error alert if initials entered is !==2 characters or !=== a letter
            alert("Initials need to be letters and has to be 2 letters.");
        };
    };
});

//Event listener button: view stored keys in local storage
viewAllHSEl.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    cardHighScoresEl.style.display="flex";
    cardEndQuizEl.style.display="none";

    //A loop to get local storage keys: get key, create an li element in html, provide context, and append to list
    getPlayerData();
    function getPlayerData (){
        //Get all players data
        for (var i = 0; i <localStorage.length; i++){
            var key = localStorage.key(i);            
            var list = document.createElement("li");
            var textForList = document.createTextNode(key);
            list.appendChild(textForList);
            highScoresListEl.appendChild(list);
        };
    };
});

//Event listener button: clears the local storage data 
clearHighScoresEl.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    localStorage.clear();
    highScoresListEl.style.display="none";
    clearHighScoresEl.style.display="none";
    cardEndQuizEl.style.display="none";
});

//Event listener button: reloads the page 
tryAgainBtnEl.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    cardEndQuizEl.style.display="none";
    location.reload();
});

//Event listener button: reloads the page 
tryAgainBtn2El.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    cardEndQuizEl.style.display="none";
    location.reload();
});