// This is the file for the rps project

console.log("Ready your hands!");

let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let computerChoice = "dummy";
let humanChoice = "dummy";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
let x = Math.floor(Math.random()*100);

if(x <= 33){
    let computerChoice = rock;
    return computerChoice;
}
if(x > 33 && x <= 66){
    let computerChoice = paper;
    return computerChoice;
}
if(x > 66 && x <= 99){
    let computerChoice = scissors;
    return computerChoice;
}
}

function getHumanChoice() {
    let humanChoice = prompt("Make your choice!");
    return humanChoice.toLowerCase();
}