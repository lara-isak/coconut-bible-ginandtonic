const choices = ["coconut", "bible", "g&t"];
let hotPriestScore = 0;
let fleabagScore = 0;
const selectButtons = document.querySelectorAll('.gameButton');
const displayText = document.querySelector('#gameText');
const displayFleabagScore = document.querySelector('.fleabagScore');
const displayHotPriestScore = document.querySelector('.hotPriestScore');

displayFleabagScore.textContent = fleabagScore;
displayHotPriestScore.textContent = hotPriestScore;

function hotPriestPlay() {
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

// selectButtons.forEach(button => )

function playRound(val) {
  const fleabagChoice = val;
  console.log(fleabagChoice);

  const hotPriestChoice = hotPriestPlay();
  console.log(hotPriestChoice);

  if(fleabagChoice === "g&t" && hotPriestChoice === "bible") {
    fleabagScore++;
    displayFleabagScore.textContent = fleabagScore;
    displayText.textContent = "Yesss! G&T spills all over Bible";
  }
  else if(fleabagChoice === "g&t" && hotPriestChoice === "coconut") {
    hotPriestScore++;
    displayHotPriestScore.textContent = hotPriestScore;
    displayText.textContent = "Shit! Coconut smashes G&T can";
  }
  else if(fleabagChoice === "bible" && hotPriestChoice === "coconut") {
    fleabagScore++;
    displayFleabagScore.textContent = fleabagScore;
    displayText.textContent = "Yesss! Bible covers Coconut";
  }
  else if(fleabagChoice === "bible" && hotPriestChoice === "g&t") {
    hotPriestScore++;
    displayHotPriestScore.textContent = hotPriestScore;
    displayText.textContent = "Shit! G&T spills all over Bible";
  }
  else if(fleabagChoice === "coconut" && hotPriestChoice === "g&t") {
    fleabagScore++;
    displayFleabagScore.textContent = fleabagScore;
    displayText.textContent = "Yesss! Coconut smashes G&T can";
  }
  else if(fleabagChoice === "coconut" && hotPriestChoice === "bible") {
    hotPriestScore++;
    displayHotPriestScore.textContent = hotPriestScore;
    displayText.textContent = "Shit! Bible covers Coconut";
  }
  else {
    displayText.textContent = "It's a tie!";
  }

  gameOver();
}

function gameOver() {
  if(fleabagScore === 5) {
    displayText.textContent = "Game Over! You won!";
    toggleButtonsAbility();
  }
  else if(hotPriestScore === 5) {
    displayText.textContent = "Game Over! You lost!";
    toggleButtonsAbility();
  }
}

function toggleButtonsAbility() {
  for(let i = 0; i < selectButtons.length; i++) {
    if(selectButtons[i].disabled === false) {
      selectButtons[i].disabled = true;
    }
    else {
      selectButtons[i].disabled = false;
    }
  }
}

function gameReset() {
  fleabagScore = 0;
  hotPriestScore = 0;
  displayFleabagScore.textContent = fleabagScore;
  displayHotPriestScore.textContent = hotPriestScore;
  displayText.textContent = "";
  toggleButtonsAbility();
}

