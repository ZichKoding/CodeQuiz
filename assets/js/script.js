// existing vairables
var bodyEl = document.querySelector("body");
var h1El = document.querySelector("#question");
var startQuizEl = document.querySelector("#start-answer-btn");
var startText = document.getElementById("beginning-text");
var startAnswerBtn = document.getElementById("start-answer-btn");
var btnContainer = document.getElementById("btn-container");
var timeEl = document.querySelector(".time");
// storing how the user did 
var correctAnswers = 0;
var inCorrectAnswers = 0;


// objects for questions and answers
var questions = [
    ("Why does JavaScript and Java have a similar name?"),
    ("When a user views a page containing a JavaScript program, which machine actually executes the script?"),
    ("____ JavaScript is also called client-side JavaScript."),
    ("____ JavaScript is also called server-side JavaScript."),
    ("What are variables used for in JavaScript Programs?"),
    ("____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation."),
    ("What should appear at the very end of your JavaScript?")
];
var answers = [
    {
        "A": "The answer is A",
        "B": "The answer is B",
        "C": "The answer is C",
        "D": "The answer is D",
    },
    {
        "A": "The answer is A",
        "B": "The answer is B",
        "C": "The answer is C",
        "D": "The answer is D",
    },
    {
        "A": "The answer is A",
        "B": "The answer is B",
        "C": "The answer is C",
        "D": "The answer is D",
    },
    {
        "A": "The answer is A",
        "B": "The answer is B",
        "C": "The answer is C",
        "D": "The answer is D",
    },
    {
        "A": "The answer is A",
        "B": "The answer is B",
        "C": "The answer is C",
        "D": "The answer is D",
    },
    {
        "A": "The answer is A",
        "B": "The answer is B",
        "C": "The answer is C",
        "D": "The answer is D",
    },
    {
        "A": "The answer is A",
        "B": "The answer is B",
        "C": "The answer is C",
        "D": "The answer is D",
    }
]

// Selecting a question and dynamically create the buttons
var q = 0;
function selectQsandAs() {
    // var q = Math.floor(Math.random() * questions.length);
    // console.log(questions[q]);
    h1El.textContent = questions[q];


    for (let i = 0; i < 4; i++) {
        var answerBtns = document.createElement("button");
        answerBtns.id = "answer-" + i;
        var x = "";
        if (i === 0) {
            x = "A";
        }
        else if (i === 1) {
            x = "B";
        }
        else if (i === 2) {
            x = "C";
        }
        else if (i === 3) {
            x = "D";
        }

        answerBtns.textContent = answers[i][x];
        if (q <= 0) {
            btnContainer.appendChild(answerBtns);
            startAnswerBtn.remove();
        }
    }
    q++;
};


// removing start button with multiple choice buttons
function questionsh1El() {
    startText.remove();
    selectQsandAs();
};

// determining if the user clicks a correct or incorrect answer
function correctIncAns() {
    // creates a timecounter
    var timeCount = setInterval(() => {
        if (parseInt(timeEl.textContent) > 0) {
            timeEl.textContent--;
        }
        else {
            displayScore();
        }
    }, 1000);
    // multiple choice button variables
    var firstAnswer = document.getElementById("answer-0");
    var secondAnswer = document.getElementById("answer-1");
    var thirdAnswer = document.getElementById("answer-2");
    var fourthAnswer = document.getElementById("answer-3");
    
    // variables for after quiz has finished
    var mainContainer = document.getElementById("main-container");
    var correctOrIncEl = document.createElement("h3");

    
    // display score after list of questions run out 
    function displayScore() {
        var totalAnswered = correctAnswers + inCorrectAnswers;
        if (totalAnswered >= questions.length || parseInt(timeEl.textContent) <= 0) {
            clearInterval(timeCount);
            h1El.textContent = "You scored " + correctAnswers + " out of " + questions.length;
            firstAnswer.remove();
            secondAnswer.remove();
            thirdAnswer.remove();
            fourthAnswer.remove();
            correctOrIncEl.remove();
            inputInitials();
        }
        if (timeEl.textContent <= 0) {
            timeEl.textContent = 0;
        }

    }

    // user submits initials
    function inputInitials() {
        // variables for user to input their initials
        var userInitialsInput = document.createElement("input");
        var submitInitials = document.createElement("button");

        userInitialsInput.id = "user-input";
        userInitialsInput.placeholder = "Enter your initials here";
        submitInitials.id = "start-answer-btn";
        submitInitials.textContent = "Submit";
        submitInitials.type = "submit";

        btnContainer.appendChild(userInitialsInput);
        btnContainer.appendChild(submitInitials);

        // on submit store the users initials and score in percentage
        submitInitials.addEventListener("click", function() {
            localStorage.setItem(userInitialsInput.value, JSON.stringify(Math.round((correctAnswers/questions.length) * 100)) );
            userInitialsInput.value = "";
        });
    };

    function correcth3() {
        correctOrIncEl.id = "correct-ans";
        correctOrIncEl.textContent = "Previous answer is Correct!"
        mainContainer.appendChild(correctOrIncEl);
        correctAnswers++;
    }
    
    function incorrecth3() {
        correctOrIncEl.id = "incorrect-ans";
        correctOrIncEl.textContent = "Previous answer is Incorrect!"
        mainContainer.appendChild(correctOrIncEl);
        inCorrectAnswers++;
        timeEl.textContent -= 15;
    }

    console.log(timeEl.textContent);
    firstAnswer.addEventListener("click", function answerAlpha() {
        if (h1El.textContent === questions[0] || h1El.textContent === questions[2] || h1El.textContent === questions[5]) {
            correctOrIncEl.remove();
            correcth3();
        } else {
            correctOrIncEl.remove();
            incorrecth3();
        }
        questionsh1El();
        displayScore();
    });


    secondAnswer.addEventListener("click", function answerBravo() {
        if (h1El.textContent === questions[1] || h1El.textContent === questions[3]) {
            correctOrIncEl.remove();
            correcth3();
        } else {
            correctOrIncEl.remove();
            incorrecth3();
        }
        questionsh1El();
        displayScore();
    });

    
    thirdAnswer.addEventListener("click", function answerCharlie() {
        if (h1El.textContent === questions[6]) {
            correctOrIncEl.remove();
            correcth3();
        } else {
            incorrecth3();
        }
        questionsh1El();
        displayScore();
    });

    fourthAnswer.addEventListener("click", function answerDelta() {
        if (h1El.textContent === questions[4]){
            correctOrIncEl.remove();
            correcth3();
        } else {
            correctOrIncEl.remove();
            incorrecth3();
        }
        questionsh1El();
        displayScore();
    });
};


// main function for starting the quiz
startQuizEl.addEventListener("click", function nextQuestion() {
    questionsh1El();
    correctIncAns();
});

