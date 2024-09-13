let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
// console.log("choice : ", choices);

const scoreP = document.querySelector("#scoreP");
const scoreC = document.querySelector("#scoreC");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const drawGame = () => {
  message.innerText = "Game was draw, play again!";
  message.style.backgroundColor = "#50727b";
};

choices.forEach((element) => {
  element.addEventListener("click", () => {
    const userChoice = element.getAttribute("id");
    playGame(userChoice);
    // console.log("userChoice", userChoice);
  });
});

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    scoreP.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    scoreC.innerText = computerScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //   console.log("userChoice", userChoice);
  const compChoice = genComputerChoice();
  //   console.log("compChoice : ", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
