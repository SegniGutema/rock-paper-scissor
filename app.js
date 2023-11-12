let roundResult;
let totalGamePlayed = 0;
let playerWin = 0;
let computerWin = 0;
let draw = 0;
const choices = ["rock", "paper", "scissor"];
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const report = document.querySelector(".game-page-header");
const buttons = document.querySelectorAll("button");
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}
buttons.forEach((btn) => {
  btn.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      console.log(e.target.id);
      let computerSelection = getComputerChoice();

      if (e.target.id === computerSelection) {
        totalGamePlayed++;
        draw++;
        report.textContent = "It' a tie";
      } else if (
        (e.target.id === "rock" && computerSelection === "scissor") ||
        (e.target.id === "paper" && computerSelection === "rock") ||
        (e.target.id === "scissor" && computerSelection === "paper")
      ) {
        totalGamePlayed++;
        playerWin++;
        report.textContent = "Yay, you won the round";
        playerScore.textContent = "Score : " + playerWin;
      } else {
        totalGamePlayed++;
        computerWin++;
        report.textContent = "You lost the round";
        computerScore.textContent = "Score : " + computerWin;
      }
      if (totalGamePlayed === 5) {
        const gamePage = document.querySelector(".game-page");
        gamePage.style.display = "none";
        const announcement = document.createElement("div");
        announcement.style.cssText = `
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        width:60%;
        height:50%;
        // display:block;
        display:grid;
        place-items:center;
        z-index:999;
        background-color:black`;

        const h1 = document.createElement("h1");

        const playAgain = document.createElement("a");

        playAgain.style.cssText = `
        width:150px;
        padding-top:7px;
        padding-bottom:7px;
        background-color:green;
        color:white;
        text-align:center;
        text-decoration:none;
        border:none;
        border-radius:7px;
        cursor:pointer;`;

        const cancel = document.createElement("a");
        cancel.setAttribute("href", "index.html");
        cancel.style.cssText = `
        width:150px;
        padding-top:7px;
        padding-bottom:7px
        background-color:red;
        color:white;
        background-color:red;
        text-align:center;
        text-decoration:none;
        border:none;
        border-radius:7px
        margin-inline:1rem`;
        playAgain.textContent = "Play Again";
        cancel.textContent = "Cancel";
        announcement.appendChild(h1);
        announcement.appendChild(playAgain);
        announcement.appendChild(cancel);

        if (playerWin > computerWin) {
          h1.textContent = "Congrats!!, You Won";
        } else if (playerWin < computerWin) {
          h1.textContent = "sorry, You lose";
        } else {
          h1.textContent = "It's a tie";
        }
        totalGamePlayed = 0;
        playerWin = 0;
        computerWin = 0;
        draw = 0;
        playerScore.textContent = "Score : ";
        computerScore.textContent = "Score : ";
        report.textContent = "Let Us Play";
        playAgain.addEventListener("click", () => {
          announcement.style.display = "none";
          gamePage.style.display = "grid";
        });
        const body = document.querySelector("body");
        body.appendChild(announcement);
      }
    },
    true
  );
});
