const choices = ["coconut", "bible", "g&t"];
const randomNum = Math.floor(Math.random() * choices.length);
const fleabagChoice = "g&t";
let hotPriestChoice;
let hotPriestScore = 0;
let fleabagScore = 0;

function hotPriestPlay() {
  for(let i = 0; i < 5; i++) {
    
  }
  return choices[randomNum];
}

function playRound() {
  hotPriestChoice = hotPriestPlay();
  console.log(hotPriestChoice);
  if(fleabagChoice === hotPriestChoice) {
    return "It's a tie!";
  }
  else if(fleabagChoice !== hotPriestChoice && hotPriestChoice === "bible") {
    fleabagScore++;
    return "You won! G&T spills all over bible";
  }
  else if(fleabagChoice !== hotPriestChoice && hotPriestChoice === "coconut") {
    hotPriestScore++;
    return "You lose! Coconut smashes G&T can";
  }
}


console.log(hotPriestChoice);

console.log(playRound(fleabagChoice, hotPriestChoice));

function gameOn() {
  let display = playRound(fleabagChoice, hotPriestChoice);
  document.querySelector("#test").innerHTML = display;
}

console.log(gameOn());


