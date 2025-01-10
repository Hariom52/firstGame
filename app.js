/*let  userScore = 0;
let  compScore  = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp Choice = ", compChoice);
};

choices.forEach((choice) => {
   console.log(choice);
    choice.addEventListener("click", () => {
      const userchoice = choice.getAttribute("id");
      playGame(userChoice);

   });
});*/

/*let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin){
  console.log("you win!");
  msg.innerText = 'You win! ${userChoice} beats ${compChoice';
  msg.style .backgroundColor = "green";                
  }else{
    console.log("you lose");
    msg.innerText ='You lose! ${compChoice} beats ${userChoice';
    msg.style.backgroundColor = "red";
  } 
  };

  const playGames = (userchoice) => {
    console.log("user choice =",userchoice);
  const compChoice = genCompChoice();
  console.log("comp Choice =",compChoice);
  
if (userChoice === compChoice)     {
   // Draw Game
   drawGame();
} else {
   let userWin = turn;
   if (userChoice === "rock") {
      // scissors, paper
     userWin = compChoice === "paper" ? false : true; 
} else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
} else {
   // rock, paper
   userWin compChoice === "rock" ? false : true;
}
 showWinner (userWin, userchoice, compChoice);
}
};
choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    const userChoice = choice.getAttribute("id"); // Assuming each choice element has an id of "rock", "paper", or "scissors"
    playGame(userChoice);
  });
});*/


let userScore1 = 0;
let compScore1 = 0;
const userScore  = document.getElementById("user-score");
const compScore  = document.getElementById("comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was draw.");
  msg.innerText = "Game was Draw. Play again.";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore1++;
    userScore.innerText = userScore1;
    console.log("you win!");
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    
  } else {
    compScore1++;
    compScore.innerText = compScore1;
    console.log("you lose");
    msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp Choice =", compChoice);

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    const userChoice = choice.getAttribute("id"); // Assuming each choice element has an id of "rock", "paper", or "scissors"
    playGame(userChoice);
  });
});
