let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let array = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    
    let randomSelection = Math.floor(Math.random()* array.length);
    
    return array[randomSelection]
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore += 1;
        return `The computer won this round ` ;

    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore += 1;
        return `The player won this round ` ;

    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore += 1;
        return `The computer won this round`;

    } else if (playerSelection === 'Paper' && computerSelection === "Rock") {
        playerScore += 1;
        return `The player won this round`;

    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore += 1;
        return `The computer won this round`;

    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore +=1;
        return `The player won this round`;

    } else {
        return 'Multa Muie';
    }
}

function gameCompleted() {
 for (let i = 0; i <= 5; i++){
    if (i < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Rock, Paper, Scissors');
        let game = playRound(playerSelection, computerSelection);
        console.log(game);
        console.log(`player score is ${playerScore}`);
        console.log(`Computer score is ${computerScore}`);
         } 
    else {
        if (playerScore > computerScore) {
            console.log('The Humanity has won')
        } else {
            console.log('Terminator is coming')
        }
    }  
       }
    }
    
gameCompleted();




