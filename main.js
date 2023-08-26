function getComputerChoice() {
    let units = ["scout","archer","spear"];
    let randomUnitIndex = Math.random()*3;
    let randomUnit = units[Math.floor(randomUnitIndex)];
    return randomUnit;
}

console.log(getComputerChoice());