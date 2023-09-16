//Get a random unit from the computer
function getComputerUnit() {
    let units = ["scout","archer","spear"];
    let randomUnitIndex = Math.random()*3;
    let randomUnit = units[Math.floor(randomUnitIndex)];
    return randomUnit;
}

//Play a round
function playRound(playerUnit, computerUnit) {
    switch(playerUnit) {
        case "scout":
            switch(computerUnit){
                case "scout":
                    return "It's a tie!"
                case "archer":
                    return "You Win! Scouts beat Archers"
                case "spear":
                    return "You Lose! Spears beat Scouts"
            }
        case "archer":
            switch(computerUnit){
                case "scout":
                    return "You Lose! Scouts beat Archers"
                case "archer":
                    return "It's a tie!"
                case "spear":
                    return "You Win! Archers beat Spears"
            }
        case "spear":
            switch(computerUnit){
                case "scout":
                    return "You Win! Spears beat Scouts"
                case "archer":
                    return "You Lose! Archers beat Spears"
                case "spear":
                    return "It's a tie!"
            }
        default:
            return "Invalid unit name. Choose between Scout, Archer and Spear"
    }
}

let result = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

let playerDisplay = document.getElementById("player-score");
let computerDisplay = document.getElementById("computer-score");

let unitButtons = [];

unitButtons.push(
    document.getElementById("archer"),
    document.getElementById("scout"), 
    document.getElementById("spear")
);

function playGame(e) {
    let matchResult = playRound(e.target.id, getComputerUnit());

    if(matchResult.includes("Win")) {
        playerScore++;
        playerDisplay.innerText = `Player score ${playerScore}`;
        if(playerScore == 5) {
            result.innerText = "Player has won!!!";
            this.removeEventListener("click", (e) => playGame(e));
        } else {
            result.innerText = matchResult;
        }
    } else if(matchResult.includes("Lose")) {
        computerScore++;
        computerDisplay.innerText = `Computer score ${computerScore}`;
        if(computerScore == 5) {
            result.innerText = "Computer has won!!!";
            this.removeEventListener("click", (e) => playGame(e));
        } else {
            result.innerText = matchResult;
        }
    };
}

unitButtons.forEach(unitButton => {
    unitButton.addEventListener("click", (e) => playGame(e));
});