// This is the file for the rps project

console.log("Ready your hands!");

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerChoice = "dummy";
let humanChoice = "dummy";

let humanScore = 0;
let computerScore = 0;

let postRoundMessage = `dummy`;
let currentScore = `Your score is ${humanScore} and the computer's score is ${computerScore}`;

function getComputerChoice() {
let x = Math.floor(Math.random()*100);

if(x <= 33){
    computerChoice = rock;
    return computerChoice;
}
if(x > 33 && x <= 66){
    computerChoice = paper;
    return computerChoice;
}
if(x > 66 && x <= 99){
    computerChoice = scissors;
    return computerChoice;
}
}

function getHumanChoice() {
    humanChoice = prompt("Make your choice!");
    return humanChoice.toLowerCase();
}

function playRound() {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if(humanChoice == "rock" && computerChoice == "rock") {
        postRoundMessage = `Both of you chose rock. It's a draw! Your score is ${humanScore} and the computer's score is ${computerScore}`;
        return postRoundMessage;
    }
    if(humanChoice == "paper" && computerChoice == "paper") {
        postRoundMessage = `Both of you chose paper. It's a draw! Your score is ${humanScore} and the computer's score is ${computerScore}`;
        return postRoundMessage;
    }
    if(humanChoice == "scissors" && computerChoice == "scissors") {
        postRoundMessage = `Both of you chose scissors. It's a draw! Your score is ${humanScore} and the computer's score is ${computerScore}`;
        return postRoundMessage;
    }
    if(humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        postRoundMessage = `Scissors beats paper. You win! Your score is ${humanScore} and the computer's score is ${computerScore}`;
        return postRoundMessage;
    }
    if(humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        postRoundMessage = `Rock beats scissors. You lose! Your score is ${humanScore} and the computer's score is ${computerScore}`;
        return postRoundMessage;
    }
    if(humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        postRoundMessage = `Paper beats rock. You win! Your score is ${humanScore} and the computer's score is ${computerScore}`;
        return postRoundMessage;
    }
    if(humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        postRoundMessage = `Scissors beats paper. You lose! Your score is ${humanScore} and the computer's score is ${computerScore}`;
        return postRoundMessage;
    }
    if(humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        postRoundMessage = `Rock beats scissors. You win! Your score is ${humanScore} and the computer's score is ${computerScore}`;
        return postRoundMessage;
    }
    if(humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        postRoundMessage = `Paper beats rock. You lose! Your score is ${humanScore} and the computer's score is ${computerScore}`;
        return postRoundMessage;
    }
}