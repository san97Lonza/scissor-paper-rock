function getHumanChoice() {
    let humanInput = prompt("Pls choose: Scissors, Paper or Rock!").toLowerCase();
    return humanInput;
}

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    let computerInput;
    if (choice == 1) {
        computerInput = "paper";
    } else if (choice == 2) {
        computerInput = "scissors";
    } else {
        computerInput = "rock";
    }
    console.log(choice);
    return computerInput;
}