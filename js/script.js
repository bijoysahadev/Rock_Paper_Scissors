const choices = ["rock","paper","scissors"]
const PlayerDisplay =document.getElementById("playerDisplay")
const ComputerDisplay=document.getElementById("ComputerDisplay")
const ResultDisplay=document.getElementById("ResultDisplay")
function playGame (playerChoice){
    const computerChoice =choices[Math.floor(Math.random() *3 )];
  let result = " "
  if (playerChoice===computerChoice){
    result ="ITs a tie"

  }
  else {
    switch(playerChoice) {
        case "rock":
            result = (computerChoice=== "scissors") ? "You Win" : "You Lose !"
            break
                   case "paper":
            result = (computerChoice=== "rock") ? "You Win" : "You Lose !"
            break
           
                   case "scissors":
            result = (computerChoice=== "paper") ? "You Win" : "You Lose !"
            break
           
    }
  }
    playerDisplay.textContent=`Player :${playerChoice}`;

    ComputerDisplay.textContent=`  Computer: ${ComputerDisplay}`;
    ResultDisplay.textContent = result;
}