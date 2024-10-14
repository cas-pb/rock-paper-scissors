console.log('Let\'s play Rock, Paper, or Scissors in 5 rounds!');

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

if (computerChoice === 0) {
  return 'rock';
} else if (computerChoice === 1) {
  return 'paper';
} else {
  return 'scissors';
}
}

function getHumanChoice() {
  let humanChoice = prompt('Let\'s play a game. Enter Rock, Paper, or Scissors').toLowerCase();

  switch (humanChoice) {
    case 'rock':
      return 'rock';
    case 'paper':
      return 'paper';
    case 'scissors':
      return 'scissors';
      break;
    default:
      return 'Please choose between Rock, Paper, or Scissors.';
  }

}
// console.log(getHumanChoice());

function playGame() {

  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
  
  if ((humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')) {
      computerScore++;
      return `Computer chose ${computerChoice}. You lose. Player: ${humanScore}. Computer: ${computerScore}`;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return `Computer chose ${computerChoice}. You win! Player: ${humanScore}. Computer: ${computerScore}`;
      } else if (humanChoice === computerChoice) {
        return `Computer chose ${computerChoice}. It\'s a tie! Player: ${humanScore}. Computer: ${computerScore}`
      } else {
        return 'Please choose between Rock, Paper, or Scissors.';
      }
  }

  
  for (let i = 0; i < 5; i++) {
  
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  
  console.log(playRound(humanSelection, computerSelection));
  
  }
  
  function gameOver(humanScore, computerScore) {


    if (humanScore > computerScore) {
      return `Game end! Congratulations, you win! 
      Final Score:
      Your score: ${finalHumanScore}
      Computer score: ${finalComputerScore}`;
    } else if (humanScore < computerScore) {
      return `Game end! Sorry, you lost. 
      Final Score:
      Your score: ${finalHumanScore}
      Computer score: ${finalComputerScore}`;
    } else {
      return `Game end! It\'s a tie! 
      Final Score:
      Your score: ${finalHumanScore}
      Computer score: ${finalComputerScore}`;
    }
  }
  
  let finalHumanScore = humanScore;
  let finalComputerScore = computerScore;
  
  console.log(gameOver(finalHumanScore, finalComputerScore));

}

console.log(playGame());