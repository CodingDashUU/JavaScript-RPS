const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const chose = document.getElementById("chose");
const playerscore = document.getElementById("pscore")
const computerscore = document.getElementById("Cscore")
let playerV = 0;
let computerV = 0;
let choice;

const computer = ["rock","paper","scissors"];

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

submit.onclick = function(){
chose.textContent = choice;
result.textContent = "Result:";
let num = Math.floor(Math.random() * (2 - 0 + 1) + 0)
let AIchoice = computer[num];

if(AIchoice == choice){
  result.textContent += " It is a tie!"
   result.style.color = "orange";
   computerV += 0.5;
   playerV += 0.5;
}
else if(AIchoice == "rock" && choice == "scissors"){
    result.textContent += " AI chose rock! You lose!"
    result.style.color = "red";
    computerV += 1;
}
else if(AIchoice == "rock" && choice == "paper"){
    result.textContent += " AI chose rock! You win!"
     result.style.color = "green";
    playerV += 1;
}
else if(AIchoice == "paper" && choice == "scissors"){
    result.textContent += " AI chose paper! You win!"
     result.style.color = "green";
     playerV += 1;
}
else if(AIchoice == "paper" && choice == "rock"){
    result.textContent += " AI chose paper! You lose!"
     result.style.color = "red";
     computerV += 1;
}
else if(AIchoice == "scissors" && choice == "rock"){
    result.textContent += " AI chose scissors! You win!"
     result.style.color = "green";
     playerV += 1;
}
else if(AIchoice == "scissors" && choice == "paper"){
    result.textContent += " AI chose scissors! You lose!"
     result.style.color = "red";
     computerV += 1;
}
  if(computerV == playerV){
    computerscore.style.color = "orange"
    playerscore.style.color = "orange"
  }
  else if(computerV > playerV){
        computerscore.style.color = "green"
    playerscore.style.color = "red"
  }
  else if(computerV < playerV){
        computerscore.style.color = "red"
    playerscore.style.color = "green"
  }

    paper.classList.remove("selected");
    rock.classList.remove("selected");
    scissors.classList.remove("selected");
    submit.classList.remove("canSubmit");
    choice = ""

computerscore.textContent = `AI Score: ${computerV} `
playerscore.textContent = `Player Score: ${playerV} `
}