var bodyEl = document.querySelector("body");
var h1El = document.querySelector("#question");
var startQuizEl = document.querySelector("#StartQuiz");
var startText = document.getElementById("beginning-text");

var questions = [
    "Why does JavaScript and Java have a similar name?",
    "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    "____ JavaScript is also called client-side JavaScript.",
    "____ JavaScript is also called server-side JavaScript.",
    "What are variables used for in JavaScript Programs?",
    "____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    "What should appear at the very end of your JavaScript?"
];




var questionsh1El = function() {
    h1El.textContent = questions[Math.floor(Math.random() * questions.length)];
    if (h1El !== "Coding Quiz Challenge") {
        startText.remove();
    }
}

// startQuizEl.addEventListener("click", questionsh1El); 
startQuizEl.addEventListener("click", function nextQuestion() {
    questionsh1El();
});