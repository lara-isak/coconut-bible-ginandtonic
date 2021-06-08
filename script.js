const choices = ["coconut", "bible", "g&t"];
let priestScore = 0;
let fleabagScore = 0;
const selectGameButtons = document.querySelectorAll('.gameButton');
const displayGameText = document.querySelector('#gameText');
const displayFleabagScore = document.querySelector('.fleabagScore');
const displayPriestScore = document.querySelector('.priestScore');
let displayFleabagChoice = document.querySelector('.fleabagChoice');
let displayPriestChoice = document.querySelector('.priestChoice');
const fleabagSpiritAnimal = document.querySelector('.fleabagSpiritAnimal');
const priestSpiritAnimal = document.querySelector('.priestSpiritAnimal');

displayFleabagScore.textContent = fleabagScore;
displayPriestScore.textContent = priestScore;

function priestPlay() {
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

function playRound(val) {
  const fleabagChoice = val;
  displayFleabagChoice.textContent = fleabagChoice;

  const priestChoice = priestPlay();
  displayPriestChoice.textContent = priestChoice;

  if(fleabagChoice === "g&t" && priestChoice === "bible") {
    fleabagScore++;
    displayFleabagScore.textContent = fleabagScore;
    displayGameText.textContent = "You win! G&T spills all over Bible";
  }
  else if(fleabagChoice === "g&t" && priestChoice === "coconut") {
    priestScore++;
    displayPriestScore.textContent = priestScore;
    displayGameText.textContent = "You lose! Coconut smashes G&T can";
  }
  else if(fleabagChoice === "bible" && priestChoice === "coconut") {
    fleabagScore++;
    displayFleabagScore.textContent = fleabagScore;
    displayGameText.textContent = "You win! Bible covers Coconut";
  }
  else if(fleabagChoice === "bible" && priestChoice === "g&t") {
    priestScore++;
    displayPriestScore.textContent = priestScore;
    displayGameText.textContent = "You lose! G&T spills all over Bible";
  }
  else if(fleabagChoice === "coconut" && priestChoice === "g&t") {
    fleabagScore++;
    displayFleabagScore.textContent = fleabagScore;
    displayGameText.textContent = "You win! Coconut smashes G&T can";
  }
  else if(fleabagChoice === "coconut" && priestChoice === "bible") {
    priestScore++;
    displayPriestScore.textContent = priestScore;
    displayGameText.textContent = "You lose! Bible covers Coconut";
  }
  else {
    displayGameText.textContent = "It's a tie!";
  }

  gameOver();
}

function gameOver() {
  if(fleabagScore === 5) {
    displayGameText.textContent = "You won! Celebrate by feeding Hilary!";
    fleabagSpiritAnimal.style.transform = "translateY(-100px)";
    toggleButtonsAbility();
  }
  else if(priestScore === 5) {
    displayGameText.textContent = "You lost! Point the priest to the fox!";
    priestSpiritAnimal.style.transform = "translateY(-100px)";
    toggleButtonsAbility();
  }
}

function toggleButtonsAbility() {
  for(let i = 0; i < selectGameButtons.length; i++) {
    if(selectGameButtons[i].disabled === false) {
      selectGameButtons[i].disabled = true;
    }
    else {
      selectGameButtons[i].disabled = false;
    }
  }
}

function gameReset() {
  fleabagScore = 0;
  priestScore = 0;
  displayFleabagScore.textContent = fleabagScore;
  displayPriestScore.textContent = priestScore;
  displayGameText.textContent = "";
  displayFleabagChoice.textContent = "";
  displayPriestChoice.textContent = "";
  fleabagSpiritAnimal.style.transform = "translateY(0px)";
  priestSpiritAnimal.style.transform = "translateY(0px)";
  toggleButtonsAbility();
}

