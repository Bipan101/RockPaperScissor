let Hchoices = document.querySelectorAll('.choice');
let userChoice ;
let Human = document.getElementById('human');
let Computer = document.getElementById('computer');
let HumanScore = +Human.textContent;
let ComputerScore = +Computer.textContent;


for (let i = 0; i < Hchoices.length; i++) {
    Hchoices[i].addEventListener('click', function () {
        userChoice = Hchoices[i].id;
        let ComputerChoices = getComputerChoices();
        console.log(userChoice,ComputerChoices);
        let winner = checkWinner(userChoice,ComputerChoices);

    });
}

function getComputerChoices() {
    let ComputerChoices = ['rock', 'paper', 'scissor'];
    let selectedIndex = parseInt(Math.random() * 3);
    return ComputerChoices[selectedIndex];
}

function checkWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissor') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissor' && computer === 'paper')
    ) {
        HumanScore = HumanScore + 1;
        Human.textContent = HumanScore;
       
    } else {
        ComputerScore=ComputerScore + 1;
        Computer.textContent =ComputerScore;
    }
}

function toggleBackground() {
    let body = document.body;
    let currentColor = body.style.backgroundColor;
    if (currentColor === "black") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "black";
    }
}

let mode = document.getElementById('mode');
mode.addEventListener('click', toggleBackground);

