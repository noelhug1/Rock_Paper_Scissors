function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        const rock = "rock"
        const paper = "paper"
        const scissors = "scissors"

        if (humanChoice === computerChoice) {
            humanScore++
            computerScore++
            return "Draw"
        } else if (humanChoice === rock) {
            if (computerChoice === paper) {
                computerScore++
                return "You loose"
            } else if (computerChoice === scissors) {
                humanScore++
                return "You win"
            }
        } else if (humanChoice === paper) {
            if (computerChoice === scissors) {
                computerScore++
                return "You loose"
            } else if (computerChoice === rock) {
                humanScore++
                return "You win"

            }
        } else if (humanChoice === scissors) {
            if (computerChoice === rock) {
                computerScore++
                return "You loose"
            } else if (computerChoice === paper) {
                humanScore++
                return "You win"
            }
        }
    }


    function getHumanChoice() {

        while (true) {
            let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();

            if (choice === "rock" || choice === "paper" || choice === "scissors") {
                return choice;
            } else {
                alert("Ungültige Eingabe. Bitte versuche es erneut.");

            }
        }
    }

    function getComputerChoice() {

        let random_num = Math.floor(Math.random() * 3)
        if (random_num === 0) {
            return "rock";
        } else if (random_num === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    for (let i = 1; i <= 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()))
    }


}









