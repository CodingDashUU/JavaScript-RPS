//STEP 1: CREATE ALL YOUR CONSTANTS AND VARIABLES
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const chose = document.getElementById("chose");
const playerscore = document.getElementById("pscore")
const computerscore = document.getElementById("Cscore")
let wins = Number(localStorage.getItem("wins")) || 0
let playerV =  3;
let computerV = 3;
playerscore.textContent = `Player Score: ${playerV}`
computerscore.textContent = `Player Score: ${computerV}`
let randomInterval = Math.floor(Math.random() * (3000 - 1000) + 1000) 
let choice = "";
let AIchoice;


choice = ""
    function win_lose(){
    if(playerV == 0){
        result.textContent = "Sorry Player... but you lost..."
        setTimeout(() => window.location.href = "index.html",4000)
        
        return true
    }
    else if(computerV == 0){
        wins++
        localStorage.setItem("wins",wins)
        setTimeout(() => {result.textContent = "You won..."},1000)
        setTimeout(() => {window.location.href = "index.html"},4000)
        return true
    }
    else{
        return false
    }}
function saveScores(){
    localStorage.setItem("playerVleft",playerV)
    localStorage.setItem("computerVleft",computerV)
}
function highlightAI(){
   if(AIchoice == "rock"){
    rock.style.backgroundColor = "red"}
   if(AIchoice == "paper"){
    paper.style.backgroundColor = "red"}
   if(AIchoice == "scissors"){
    scissors.style.backgroundColor = "red"}
   }
  function resetRound(){
    paper.classList.remove("selected");
    rock.classList.remove("selected");
    scissors.classList.remove("selected");
    submit.classList.remove("canSubmit");
    choice = ""
  }
  function displayScore(){
computerscore.textContent = `AI Score: ${computerV} `
playerscore.textContent = `Player Score: ${playerV} `
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
    result.textContent = "Result: "

})
rock.addEventListener("click", function(event){
    paper.classList.remove("selected");
    rock.classList.add("selected");
    scissors.classList.remove("selected");
    submit.classList.add("canSubmit");
    choice = "rock";
    result.textContent = "Result: "
})
scissors.addEventListener("click", function(event){
    paper.classList.remove("selected");
    rock.classList.remove("selected");
    scissors.classList.add("selected");
    submit.classList.add("canSubmit");
    choice = "scissors";
    result.textContent = "Result: "
})
//RESULT WHEN YOU LOCK IN YOUR ANSWER
submit.onclick = function(){
    
    if(!choice){
        result.textContent = "Choose a weapon!!"
        result.style.color = "red"
        
    }

    else{
        submit.disabled = true
    chose.textContent = choice;
    paper.style.backgroundColor = "transparent"
    rock.style.backgroundColor = "transparent"
    scissors.style.backgroundColor = "transparent"
result.textContent = "AI is Thinking"
result.style.color = "black"
let theDots = setInterval(function(){result.textContent += "."; submit.disabled = true;
    if(result.textContent.includes("....")){result.textContent = result.textContent.replace("....","")}},100)

setTimeout(function(){
    clearInterval(theDots)
    
result.textContent = "Result:";
let num = Math.floor(Math.random() * (2 - 0 + 1) + 0)
AIchoice = computer[num];

//IF YOUR ANSWER AND THE COMPUTERS ANSWER IS EQUIVALENT
if(AIchoice == choice){
  result.textContent += " It is a tie!"
   result.style.color = "orange";

}
//IF YOU CHOSE SCISSORS AND THE COMPUTER CHOSE ROCK
else if(AIchoice == "rock" && choice == "scissors"){
    playerV -= 1;
    win_lose()
    if(win_lose() == false){
    result.textContent += " AI chose rock! You lose!"
    result.style.color = "red";
    }
}
//IF YOU CHOSE PAPER AND THE COMPUTER CHOSE ROCK
else if(AIchoice == "rock" && choice == "paper" ){
    computerV -= 1;
    if(win_lose() == false){
    result.textContent += " AI chose rock! You win!"
     result.style.color = "green";
    }
}
//IF YOU CHOSE SCISSORS AND THE COMPUTER CHOSE PAPER
else if(AIchoice == "paper" && choice == "scissors"){
    computerV -= 1;
    win_lose()
    if(win_lose() == false){
    result.textContent += " AI chose paper! You win!"
     result.style.color = "green";
    }
     
}
//IF YOU CHOSE ROCK AND THE COMPUTER CHOSE PAPER
else if(AIchoice == "paper" && choice == "rock"){
     playerV -= 1;
     if(win_lose() == false){
    result.textContent += " AI chose paper! You lose!"
     result.style.color = "red";
     }
}
//IF YOU CHOSE ROCK AND THE COMPUTER CHOSE SCISSORS
else if(AIchoice == "scissors" && choice == "rock"){
    computerV -= 1;
    if(win_lose() == false){
    result.textContent += " AI chose scissors! You win!"
     result.style.color = "green";
    }
}
//IF YOU CHOSE PAPER AND THE COMPUTER CHOSE SCISSORS
else if(AIchoice == "scissors" && choice == "paper" ){
    playerV -= 1;
    if(win_lose() == false){
    result.textContent += " AI chose scissors! You lose!"
     result.style.color = "red";
    }
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
resetRound()
displayScore()
    
submit.disabled = false




},randomInterval)}
}


setInterval(saveScores,1000)