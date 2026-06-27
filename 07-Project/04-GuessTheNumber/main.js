const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();

        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Please enter a number greater than 0");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess);

        if (numGuess === 10) {
            displayGuess(guess);
            displayMsg(`Game Over! Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMsg("🎉 You guessed it right!");
        endGame();
    } else if (guess < randomNumber) {
        displayMsg("Number is TOO LOW");
    } else {
        displayMsg("Number is TOO HIGH");
    }
}

function displayGuess(guess) {
    userInput.value = "";

    guessSlot.innerHTML += `${guess}, `;
    numGuess++;

    remaining.innerHTML = `${10 - numGuess + 1}`;
}

function displayMsg(msg) {
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");

    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

    startOver.appendChild(p);

    playGame = false;

    newGame();
}

function newGame() {
    const newGameButton = document.getElementById("newGame");

    newGameButton.addEventListener("click", function () {
        window.location.reload();
    });
}