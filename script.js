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
        choiceText.innerText = `${yourChoice} vs ${tedChoice}`;
        winText.innerText = "It's a draw";
        yourCounter += 1;
        tedCounter += 1;
        yourScore.innerText = yourCounter;
        tedScore.innerText = tedCounter;
    } else if (yourChoice === 'rock') {
        if (tedChoice === 'scissors') {
            choiceText.innerText = `${yourChoice} vs ${tedChoice}`;
            winText.innerText = "You win!";
            yourCounter += 3;
            yourScore.innerText = yourCounter;
        } else if (tedChoice === 'paper') {
            choiceText.innerText = `${yourChoice} vs ${tedChoice}`;
            winText.innerText = "Ted wins";
            tedCounter += 3;
            tedScore.innerText = tedCounter;
        }
    } else if (yourChoice === 'scissors') {
        if (tedChoice === 'rock') {
            choiceText.innerText = `${yourChoice} vs ${tedChoice}`;
            winText.innerText = "Ted wins";
            tedCounter += 3;
            tedScore.innerText = tedCounter;
        } else if (tedChoice === 'paper') {
            choiceText.innerText = `${yourChoice} vs ${tedChoice}`;
            winText.innerText = "You win!";
            yourCounter += 3;
            yourScore.innerText = yourCounter;
        }
    } else if (yourChoice === 'paper') {
        if (tedChoice === 'rock') {
            choiceText.innerText = `${yourChoice} vs ${tedChoice}`;
            winText.innerText = "You win";
            yourCounter += 3;
            yourScore.innerText = yourCounter;
        } else if (tedChoice === 'scissors') {
            choiceText.innerText = `${yourChoice} vs ${tedChoice}`;
            winText.innerText = "Ted wins";
            tedCounter += 3;
            tedScore.innerText = tedCounter;
        }
    }
}

(() => {
    document.getElementById('rock').addEventListener('click', () => {
        yourChoice = 'rock';
        console.log(yourChoice);
    })
    document.getElementById('scissors').addEventListener('click', () => {
        yourChoice = 'scissors';
        console.log(yourChoice);
    })
    document.getElementById('paper').addEventListener('click', () => {
        yourChoice = 'paper';
        console.log(yourChoice);
    })
    let choiceArr = ['rock', 'scissors', 'paper'];
    document.getElementById('ted').addEventListener('click', () => {
        tedChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
        console.log(tedChoice);
        check();
    })
})();
