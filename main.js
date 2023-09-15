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

function game() {
    let score = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Select a unit!").toLowerCase();
        let computerSelection = getComputerUnit();
        let result = playRound(playerSelection, computerSelection);
        alert(result)
        if(result.includes("Invalid")) {
            i--;
        } else if(result.includes("Win")) {
            score++;
        }
    }

    alert(`Final score: ${score}`);
}

game();