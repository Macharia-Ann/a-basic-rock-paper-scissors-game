
const rpsBtns = document.querySelectorAll(".btn");
const resultDiv = document.getElementById("result");
const endGameBtn = document.getElementById("endGameBtn");
function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}
function getResult(playerChoice, compChoice){
    let message;
    if(playerChoice === compChoice){
        message = "Draw!";
    }
    else if(
        (playerChoice === "rock" && compChoice === "scissors")||
        (playerChoice === "paper" && compChoice === "rock")||
        (playerChoice === "scissors" && compChoice === "paper")
    ){
        message = "Player won!";
    }
    else{
        message = "Computer won!";
    }
    return message;
}

const emojis = {
    rock: '✊',
    paper: '🤚',
    scissors: '✌️'
}
function showResult(playerChoice,compChoice,message){
    resultDiv.innerHTML = `
    <h3 class='game-result'>Game Results</h3>
    <div class='container2'>
    <div class='player-side'>
    <button class='playerBtn'>${emojis[playerChoice]}</button>
    </div>
    <h3 class='message'>${message}</h3>
    <div class='comp-side'>
    <button class='compBtn'>${emojis[compChoice]}</button>
    </div>
    </div>
    `
}


endGameBtn.addEventListener("click", ()=>{
    resultDiv.innerHTML = "";
})
rpsBtns.forEach(rpsBtn=>rpsBtn.addEventListener("click", ()=>{
const playerChoice = rpsBtn.id;
const compChoice = getComputerChoice();
const message = getResult(playerChoice,compChoice);
showResult(playerChoice,compChoice,message);
}))
