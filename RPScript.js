//STEP 1: CREATE ALL YOUR CONSTANTS AND VARIABLES
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const chose = document.getElementById("chose");
const playerscore = document.getElementById("pscore")
const computerscore = document.getElementById("Cscore")
let playerV = Number(localStorage.getItem("playerV")) || 0;
let computerV = Number(localStorage.getItem("computerV")) || 0;
let randomInterval = Math.floor(Math.random() * (4000 - 2000) + 2000) 
let choice;
let AIchoice;

function saveScores(){
    localStorage.setItem("playerV",playerV)
    localStorage.setItem("computerV",computerV)
}
function highlightAI(){
   if(AIchoice == "rock"){
    rock.style.backgroundColor = "red"}
   if(AIchoice == "paper"){
    paper.style.backgroundColor = "red"}
   if(AIchoice == "scissors"){
    scissors.style.backgroundColor = "red"}
   }

//COMPUTER'S THREE OPTIONS
const computer = ["rock","paper","scissors"];
//STEP 2: MAKE THE BUTTONS INTERACTABLE WITH EVENT LISTENERS
paper.addEventListener("click", function(event){
    paper.classList.add("selected");
    rock.classList.remove("selected");
    scissors.classList.remove("selected");
    submit.classList.add("canSubmit");
    choice = "paper";

})
rock.addEventListener("click", function(event){
    paper.classList.remove("selected");
    rock.classList.add("selected");
    scissors.classList.remove("selected");
    submit.classList.add("canSubmit");
    choice = "rock";
})
scissors.addEventListener("click", function(event){
    paper.classList.remove("selected");
    rock.classList.remove("selected");
    scissors.classList.add("selected");
    submit.classList.add("canSubmit");
    choice = "scissors";
})
//RESULT WHEN YOU LOCK IN YOUR ANSWER
submit.onclick = function(){
    chose.textContent = choice;
    paper.style.backgroundColor = "transparent"
    rock.style.backgroundColor = "transparent"
    scissors.style.backgroundColor = "transparent"
result.textContent = "AI is Thinking"
result.style.color = "black"
let theDots = setInterval(function(){result.textContent += ".";
    if(result.textContent.includes("....")){result.textContent = result.textContent.replace("....","")}},500)

setTimeout(function(){
    clearInterval(theDots)

result.textContent = "Result:";
let num = Math.floor(Math.random() * (2 - 0 + 1) + 0)
AIchoice = computer[num];
//IF YOUR ANSWER AND THE COMPUTERS ANSWER IS EQUIVALENT
if(AIchoice == choice){
  result.textContent += " It is a tie!"
   result.style.color = "orange";
  
   computerV += 0.5;
   playerV += 0.5;
}
//IF YOU CHOSE SCISSORS AND THE COMPUTER CHOSE ROCK
else if(AIchoice == "rock" && choice == "scissors"){
    result.textContent += " AI chose rock! You lose!"
    result.style.color = "red";
    computerV += 1;
}
//IF YOU CHOSE PAPER AND THE COMPUTER CHOSE ROCK
else if(AIchoice == "rock" && choice == "paper"){
    result.textContent += " AI chose rock! You win!"
     result.style.color = "green";
    playerV += 1;
}
//IF YOU CHOSE SCISSORS AND THE COMPUTER CHOSE PAPER
else if(AIchoice == "paper" && choice == "scissors"){
    result.textContent += " AI chose paper! You win!"
     result.style.color = "green";
     playerV += 1;
}
//IF YOU CHOSE ROCK AND THE COMPUTER CHOSE PAPER
else if(AIchoice == "paper" && choice == "rock"){
    result.textContent += " AI chose paper! You lose!"
     result.style.color = "red";
     computerV += 1;
}
//IF YOU CHOSE ROCK AND THE COMPUTER CHOSE SCISSORS
else if(AIchoice == "scissors" && choice == "rock"){
    result.textContent += " AI chose scissors! You win!"
     result.style.color = "green";
     playerV += 1;
}
//IF YOU CHOSE PAPER AND THE COMPUTER CHOSE SCISSORS
else if(AIchoice == "scissors" && choice == "paper"){
    result.textContent += " AI chose scissors! You lose!"
     result.style.color = "red";
     computerV += 1;
}
//THE COLORS OF THE SCORES

//IF IT IS A TIE
  if(computerV == playerV){
    computerscore.style.color = "orange"
    playerscore.style.color = "orange"
  }
  //IF YOU ARE LOSING
  else if(computerV > playerV){
        computerscore.style.color = "green"
    playerscore.style.color = "red"
  }
  //IF YOU ARE WINNING
  else if(computerV < playerV){
        computerscore.style.color = "red"
    playerscore.style.color = "green"
  }
highlightAI()
  //RESETTING THE IMAGES AND LOCK IN BUTTON AND CHOICE
    paper.classList.remove("selected");
    rock.classList.remove("selected");
    scissors.classList.remove("selected");
    submit.classList.remove("canSubmit");
    choice = ""

    

    //DISPLAYING THE SCORES
computerscore.textContent = `AI Score: ${computerV} `
playerscore.textContent = `Player Score: ${playerV} `

},randomInterval)}


setInterval(saveScores,1000)