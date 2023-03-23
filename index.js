const userChoice = document.querySelectorAll('button');
const user = document.getElementById('user');
const computer = document.getElementById('computer');
const result = document.getElementById('result');

document.addEventListener('click', (event) =>{
    const temp = event.target.id;
    const choice = document.getElementById(temp);
    user.innerHTML = choice.innerHTML;
    generateComputerChoice();
    finalresult();
})

let computerChoice;
let res;

function generateComputerChoice(){
   const choices = Math.floor(Math.random() * userChoice.length);
   
   if(choices === 0){
    computerChoice = 'Rock';
   }
   if(choices === 1){
    computerChoice = 'Paper';
   }
   if(choices === 2){
    computerChoice = 'Scissors';
   }
   computer.innerHTML = computerChoice;
}

function finalresult(){
    if(user.innerHTML === computerChoice){
        res = "DRAW";
    }
    if(computerChoice === 'Rock' && user.innerHTML === 'Paper'){
        res = "You Win"
    }

    if(computerChoice === 'Rock' && user.innerHTML === 'Scissors'){
        res = "You Lost"
    }

    if(computerChoice === 'Paper' && user.innerHTML === 'Scissors'){
        res = "You Win"
    }

    if(computerChoice === 'Paper' && user.innerHTML === 'Rock'){
        res = "You Lost"
    }

    if(computerChoice === 'Scissors' && user.innerHTML === 'Rock'){
        res = "You Win"
    }

    if(computerChoice === 'Scissors' && user.innerHTML === 'Paper'){
        res = "You Lost"
    }
    result.innerHTML = res;
}
