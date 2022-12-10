const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const Result =document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let  userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    UserChoiceDisplay.innerHTML= userChoice
    generateComputerChoice()
    getResult();
}))

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)+1;
    if(randomNum === 1){
        computerChoice ="rock"
    }
    if(randomNum === 2){
        computerChoice ="scissor"
    }
    if(randomNum === 3){
        computerChoice="paper"
    }
    ComputerChoiceDisplay.innerHTML= computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result="its a draw"
    }
    if(computerChoice==='rock' && userChoice==='paper'){
        result="you win"
    }
    if(computerChoice==='paper' && userChoice==='rock'){
        result="you lose"
    }
    if(computerChoice==='scissor' && userChoice==='rock'){
        result="you win"
    }
    if(computerChoice==='scissor' && userChoice==='paper'){
        result="you lose"
    }
    if(computerChoice==='rock' && userChoice==='scissor'){
        result="you lose"
    }
    if(computerChoice==='paper' && userChoice==='scissor'){
        result="you win"
    }
    Result.innerHTML= result
}

