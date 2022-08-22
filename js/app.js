const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");


// Get the random computer choice between Rock, Paper, Scissors
function getComputerChoice() {
    let array = [
        'Rock',
        'Paper',
        'Scissors'
    ];
    
    let randomSelection = Math.floor(Math.random()* array.length);
    
    return array[randomSelection]
}

// Decide winner for 1 round

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
        return "This round it's a tie! ";
    }
}


function gameCompleted() {
 
        // Run the computer choice, playerselection(prompt), playround and show the score in realtime
        const computerSelection = getComputerChoice();
        // const playerSelection = prompt('Rock, Paper, Scissors');
        let game = playRound(playerSelection, computerSelection);
        console.log(game);
        console.log(`player score is ${playerScore}`);
        console.log(`Computer score is ${computerScore}`);
         
         //When i gets to 5 run the else to decide the winner
   
       
        }
    
    
    
let playerScore = 0;
let computerScore = 0;  

const btns = document.querySelectorAll('.button');
btns.forEach(button => button.addEventListener('click', playRound));
btns.addEventListener('click', gameCompleted);





/* function gameCompleted() {
    for (let i = 0; i <= 5; i++){
       if (i < 5) {
           // Run the computer choice, playerselection(prompt), playround and show the score in realtime
           const computerSelection = getComputerChoice();
           const playerSelection = prompt('Rock, Paper, Scissors');
           let game = playRound(playerSelection, computerSelection);
           console.log(game);
           console.log(`player score is ${playerScore}`);
           console.log(`Computer score is ${computerScore}`);
            } 
            //When i gets to 5 run the else to decide the winner
       else {
           if (playerScore > computerScore) {
               console.log('The Humanity has won')
           } else {
               console.log('Terminator is coming')
           }
       }  
          }
       }
    */