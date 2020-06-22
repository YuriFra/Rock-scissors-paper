let yourScore = document.getElementById('yourScore');
let tedScore = document.getElementById('tedScore');

let choiceText = document.getElementById('choiceText');
let winText = document.getElementById('winText');
let yourCounter = 0;
let tedCounter = 0;
let yourChoice;
let tedChoice;

//reset scores to 0
document.getElementById('reset').addEventListener('click', () => {
    yourScore.innerText = '0';
    tedScore.innerText = '0';
})
function check() {
    if (yourChoice === tedChoice) {
        choiceText.innerText = "";
        winText.innerText = "- It's a draw -";
        yourCounter += 1;
        tedCounter += 1;
        yourScore.innerText = yourCounter;
        tedScore.innerText = tedCounter;
    } else if (yourChoice === 0) {
        if (tedChoice === 1) {
            choiceText.innerText = "Rock vs scissors"
            winText.innerText = "- You win -";
            yourCounter += 3;
            yourScore.innerText = yourCounter;
        } else if (tedChoice === 2) {
            choiceText.innerText = "Rock vs paper"
            winText.innerText = "- Ted wins -";
            tedCounter += 3;
            tedScore.innerText = tedCounter;
        }
    } else if (yourChoice === 1) {
        if (tedChoice === 0) {
            choiceText.innerText = "Scissors vs rock"
            winText.innerText = "- Ted wins -";
            tedCounter += 3;
            tedScore.innerText = tedCounter;
        } else if (tedChoice === 2) {
            choiceText.innerText = "Scissors vs paper"
            winText.innerText = "- You win -";
            yourCounter += 3;
            yourScore.innerText = yourCounter;
        }
    } else if (yourChoice === 2) {
        if (tedChoice === 0) {
            choiceText.innerText = "Paper vs rock"
            winText.innerText = "- You win -";
            yourCounter += 3;
            yourScore.innerText = yourCounter;
        } else if (tedChoice === 1) {
            choiceText.innerText = "Paper vs scissors"
            winText.innerText = "- Ted wins -";
            tedCounter += 3;
            tedScore.innerText = tedCounter;
        }
    }
}

(() => {
    document.getElementById('rock').addEventListener('click', () => {
        yourChoice = 0;
        console.log(yourChoice);
    })
    document.getElementById('scissors').addEventListener('click', () => {
        yourChoice = 1;
        console.log(yourChoice);
    })
    document.getElementById('paper').addEventListener('click', () => {
        yourChoice = 2;
        console.log(yourChoice);
    })
    document.getElementById('ted').addEventListener('click', () => {
        tedChoice = Math.floor(Math.random() * 3);
        console.log(tedChoice);
        check();
    })
})();
