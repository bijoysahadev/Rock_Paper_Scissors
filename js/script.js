const choices =["rock" ,"paper","scissors"]
const playerDisplay =document.getElementById("playerDisplay");
const computerDisplay =document.getElementById("computerDisplay");
const resultDisplay =document.getElementById("resultDisplay");
const  playerScoreDisplay =document.getElementById("playerScoreDisplay")
const  computerScoreDisplay =document.getElementById("computerScoreDisplay")
let playerScore= 0 ;
let computerScore = 0 ;
function playGame (playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3) ]
  let result = " "
  if (playerChoice=== computerChoice){
    result="Its a tie"
  }
  else {
     switch(playerChoice){
      case "rock" :
        result = (computerChoice === "scissors") ? "You Win!" : "you lose!"
        break
         case "paper" :
        result = (computerChoice === "rock") ? "You Win!" : "you lose!"
        break ;
         case "scissors" :
        result = (computerChoice === "paper") ? "You Win!" : "you lose!"
        break ;
     }
  }
  playerDisplay.textContent = `Player : ${playerChoice}`;
  computerDisplay.textContent =` computer :  ${computerChoice}`;
  resultDisplay.textContent = result ;
  resultDisplay.classList.remove("greenText","redText")
   switch(result) {
    case "You Win!":
    resultDisplay.classList.add("greenText");
    playerScore ++ ;
    playerScoreDisplay.textContent=playerScore
    break;
    case "you lose!":
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore ;
    break;
   }
}