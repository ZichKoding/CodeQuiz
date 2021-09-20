let hiScoreContainer = document.querySelector(".hiscore-list");
let clearHighScores = document.querySelector("#start-answer-btn");
let percentAnswer = [];
let sortVar = [];
let sorting = true;

function hiScoreList() {
    placedNum = 1;
    for (let i = 0; i < localStorage.length; i++){
        let initials =  localStorage.key(i);
        let initScores = parseInt(localStorage.getItem(localStorage.key(i)));
        sortVar.push( initials, initScores );
        // console.log(sortVar);

    }

    // while (sorting) {
    for (let i = 0; i < localStorage.length; i++) {
        
        percentAnswer.push(localStorage.getItem(localStorage.key(i)));
        // console.log("original" + percentAnswer);

        // if ( localStorage.getItem(localStorage.key(i)) == sortVar[0]) {
        let hiList = document.createElement("li");
        hiList.textContent = placedNum + ". " + localStorage.key(i) + " - " + percentAnswer[i] + "%";
        
        // sortVar.shift();
        // console.log(sortVar.length, sortVar);
        percentAnswer.sort();
        hiScoreContainer.appendChild(hiList);
        console.log(percentAnswer);

        // }
        placedNum++;

    }
    console.log(percentAnswer.reverse());
    // if (placedNum > localStorage.length) {
    //     sorting = false;
    // }
    // placedNum++;

};

hiScoreList();
clearHighScores.addEventListener("click", function() {
    localStorage.clear();
    hiScoreContainer.replaceChildren();
});