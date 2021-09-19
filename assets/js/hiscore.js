let hiScoreContainer = document.querySelector(".hiscore-list");
let clearHighScores = document.querySelector("#start-answer-btn");
let percentAnswer = "";
let sortVar = [];
let sorting = true;

function hiScoreList() {
    placedNum = 1;

    for (let i = 0; i < localStorage.length; i++){
        sortVar.push( (localStorage.key(i), localStorage.getItem(localStorage.key(i)) ));
        sortVar.sort();
    }

    while (sorting) {
    
        for (let i = 0; i < sortVar.length; i++) {
            let percentAnswer = localStorage.getItem(localStorage.key(i));
            
            if ( localStorage.getItem(localStorage.key(i)) == sortVar[0]) {
                let hiList = document.createElement("li")
                hiList.textContent = placedNum + ". " + localStorage.key(i) + " - " + percentAnswer.replace('"', '') + "%";
                
                sortVar.shift();
                console.log(sortVar.length, sortVar);
                hiScoreContainer.appendChild(hiList);
            }

        }
        if (placedNum > localStorage.length) {
            sorting = false;
        }
        placedNum++;
    }

}


hiScoreList();
clearHighScores.addEventListener("click", function() {
    localStorage.clear();
    hiScoreContainer.replaceChildren()
});
