var startBtnEl = document.querySelector(".start-button");
var cardEl = document.querySelector("#card");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelectorAll(".choice");
var choiceAEl = document.querySelector("#A");
var choiceBEl = document.querySelector("#B");
var choiceCEl = document.querySelector("#C");
var choiceDEl = document.querySelector("#D");
var nextBtnEl = document.querySelector("nextBtn");



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
        setTime();
        });
}


function setTime(){
}

console.log(choicesEl);



var indexCounter = 0;


function clickNext () {
    choiceAEl.addEventListener("click", () => {
        nextQuestion();
    });
   
}


function nextQuestion(){
    function showQuestion (question){
        questionEl.innerText = question.questionEl;
    }
    function showChoiceA (A){
        choiceAEl.innerText = A.choiceAEl;
    }
    function showChoiceB (B){
        choiceBEl.innerText = B.choiceBEl;
    }
    function showChoiceC (C){
        choiceCEl.innerText = C.choiceCEl;
    }
    function showChoiceD (D){
        choiceDEl.innerText = D.choiceDEl;
    }
    var i = Math.floor(Math.random() * (cards.length -1));
    showQuestion(cards[i]);
    showChoiceA(cards[i]);
    showChoiceB(cards[i]);
    showChoiceC(cards[i]);
    showChoiceD(cards[i]);
    cards.splice(i, 1);
    console.log(i);
    console.log(cards);
}

console.log(cards);

clickNext();

startQuiz();