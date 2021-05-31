const choices = ["coconut", "bible", "g&t"];
let hotPriestScore = 0;
let fleabagScore = 0;
const select = document.querySelectorAll('.gameButtons');
const display = document.querySelector('#test');
const displayFleabagScore = document.querySelector('.fleabagScore');
const displayHotPriestScore = document.querySelector('.hotPriestScore');

displayFleabagScore.textContent = fleabagScore;
displayHotPriestScore.textContent = hotPriestScore;

function hotPriestPlay() {
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

function playRound(val) {
  const fleabagChoice = val;
  console.log(fleabagChoice);

  const hotPriestChoice = hotPriestPlay();
  console.log(hotPriestChoice);

  if(fleabagChoice === "g&t" && hotPriestChoice === "bible") {
    fleabagScore++;
    displayFleabagScore.textContent = fleabagScore;
    display.textContent = "You won! G&T spills all over bible";
  }
  else if(fleabagChoice === "g&t" && hotPriestChoice === "coconut") {
    hotPriestScore++;
    displayHotPriestScore.textContent = hotPriestScore;
    display.textContent = "You lose! Coconut smashes G&T can";
  }
  else if(fleabagChoice === "bible" && hotPriestChoice === "coconut") {
    fleabagScore++;
    displayFleabagScore.textContent = fleabagScore;
    display.textContent = "You win! Bible covers coconut";
  }
  else if(fleabagChoice === "bible" && hotPriestChoice === "g&t") {
    hotPriestScore++;
    displayHotPriestScore.textContent = hotPriestScore;
    display.textContent = "You lose! G&T spills all over bible";
  }
  else if(fleabagChoice === "coconut" && hotPriestChoice === "g&t") {
    fleabagScore++;
    displayFleabagScore.textContent = fleabagScore;
    display.textContent = "You win! Coconut smashes G&T can";
  }
  else if(fleabagChoice === "coconut" && hotPriestChoice === "bible") {
    hotPriestScore++;
    displayHotPriestScore.textContent = hotPriestScore;
    display.textContent = "You lose! Bible covers coconut";
  }
  else {
    display.textContent = "It's a tie!";
  }

  // gameOver();
}



