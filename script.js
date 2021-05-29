const choices = ["coconut", "bible", "g&t"];
const randomNum = Math.floor(Math.random() * choices.length);
const hotPriestChoice = hotPriestPlay();
const fleabagChoice = "g&t";
const hotPriestScore = 0;
const fleabagScore = 0;

function hotPriestPlay() {
  return choices[randomNum];
}

function playRound(fleabagChoice, hotPriestChoice) {
  if(fleabagChoice === hotPriestChoice) {
    return "It's a tie!"
  }
  else if(fleabagChoice !== hotPriestChoice && hotPriestChoice === "bible") {
    return "You won! G&T spills all over bible"
  }
  else if(fleabagChoice !== hotPriestChoice && hotPriestChoice === "coconut") {
    return "You lose! Coconut smashes G&T can"
  }
}

function gameOn(round) {
  for(let i = 0; i < 5; i++) {
    if(round === "You won! G&T spills all over bible") {
      fleabagScore++;
      return "Fleabag is in the lead!";
    }
  }
}

console.log(fleabagChoice);
console.log(hotPriestChoice);

console.log(playRound(fleabagChoice, hotPriestChoice));

console.log(gameOn(playRound(fleabagChoice, hotPriestChoice)));
