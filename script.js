let roundNo = 1;

function gethumanResult() {
    let humanInput = prompt(`Round ${roundNo} - Pls choose: Scissors, Paper or Rock!`).toLowerCase();
    if (!(humanInput == "scissors" || humanInput == "paper" || humanInput == "rock")) {

        let defaultChoice = () => {
            let userChoice = Math.floor((Math.random() * 3) + 1);
            let humanInput;
            if (userChoice == 1) {
                humanInput = "paper";
            } else if (userChoice == 2) {
                humanInput = "scissors";
            } else {
                humanInput = "rock";
            }
            return humanInput;
        }
        humanInput = defaultChoice();
        console.log(`\nWe will be giving a default value of ${humanInput} for round ${roundNo} since you did not give a valid option`)
    }

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
        console.log(`\n\tRound ${roundNo}`)
        console.log(`Your choice is ${humanResult}`);
        console.log(`The computer choice is ${computerResult}\n`);
        roundNo += 1;


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
            console.log(`\nYour score is ${humanScore}\nThe Computer score is ${computerScore}\nIt is a tie after ${roundNo - 1} rounds`);
            return;
        } else if (humanScore > computerScore) {
            console.log(`\nYou won! Your total score is ${humanScore}\nThe Computer total score is ${computerScore}.\nYou won ${humanScore}/${roundNo - 1} rounds.`);
            return;

        } else {
            console.log(`\nThe Computer won! Your total score is ${humanScore}\nThe Computer total score is ${computerScore}\nThe Computer beat you in ${computerScore}/${roundNo - 1} rounds.`);
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