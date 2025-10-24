const account_button = document.getElementById("accbutton")
const account_info = document.getElementById("acc")
const infScore = document.getElementById("infScore")
const surWins = document.getElementById("survWins")

const resetProgress = document.getElementById("resetProgress")
console.log(account_info.style.display)
account_button.onclick = function(){
    if(account_info.style.display == ""){
        account_info.style.display = "block"
         infScore.textContent =  `Infinite Mode Score: ${Number(localStorage.getItem("playerV") || 0)}`
        surWins.textContent = `Survival Mode Score: ${Number(localStorage.getItem("wins") || 0)}`

        return
    }
    else if(account_info.style.display == "block"){
        account_info.style.display = ""
        return
    }
}
resetProgress.onclick =  function(){
    localStorage.removeItem("playerV")
    localStorage.removeItem("computerV")
    localStorage.removeItem("wins")
         infScore.textContent =  `Infinite Mode Score: ${Number(localStorage.getItem("playerV") || 0)}`
        surWins.textContent = `Survival Mode Score: ${Number(localStorage.getItem("wins") || 0)}`
    }
