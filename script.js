function gethumanResult() {
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
    return computerInput;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        let computerResult = computerChoice();
        let humanResult = humanChoice();

        console.log(`Your choice is ${humanResult}`);
        console.log(`The computer choice is ${computerResult}`);


        if (humanResult === computerResult) {
            console.log(`Its a draw! ${humanResult} equal to ${computerResult}!`);
            console.log(`Your score is ${humanScore}\nThe Computer score is ${computerScore}`);
            return;
        } else if ((humanResult == "scissors" && computerResult == "paper") || (humanResult == "paper" && computerResult == "rock") || (humanResult == "rock" && computerResult == "scissors")) {
            humanScore += 1;
            console.log(`You win this round! ${humanResult} beats ${computerResult}!`);
            console.log(`Your score is ${humanScore}\nThe Computer score is ${computerScore}`);
            return;
        } else {
            computerScore += 1;
            console.log(`You lose this round! ${computerResult} beats ${humanResult}!`);
            console.log(`Your score is ${humanScore}\nThe Computer score is ${computerScore}`);
            return;
        }
    }

    function checkScore() {
        if (humanScore === computerScore) {
            console.log(`Your score is ${humanScore}\nThe Computer score is ${computerScore}\nIt is a tie`);
            return;
        } else if (humanScore > computerScore) {
            console.log(`You won! Your total score is ${humanScore}\nThe Computer total score is ${computerScore}\n`);
            return;

        } else {
            console.log(`The Computer won! Your total score is ${humanScore}\nThe Computer total score is ${computerScore}\n`);
            return;
        }
    }

    playRound(gethumanResult, getComputerChoice);
    playRound(gethumanResult, getComputerChoice);
    playRound(gethumanResult, getComputerChoice);
    playRound(gethumanResult, getComputerChoice);
    playRound(gethumanResult, getComputerChoice);
    checkScore();
    return;
}

playGame();