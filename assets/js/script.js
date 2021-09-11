var bodyEl = document.querySelector("body");
var h1El = document.querySelector("#question");
var startQuizEl = document.querySelector("#StartQuiz");

var questions = ["Question 1", "Question 2", "Question 3"];


var questionsh1El = function() {
    h1El.textContent = questions[Math.floor(Math.random() * questions.length)];
}

// startQuizEl.addEventListener("click", questionsh1El); 
startQuizEl.addEventListener("click", function nextQuestion() {
    questionsh1El();
});