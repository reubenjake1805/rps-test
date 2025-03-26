// This is the file for the rps project

console.log("Hello World");

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function getComputerChoice() {
let computerChoice = "dummy";
let x = Math.floor(Math.random()*100);

if(x <= 33){
    let computerChoice = "rock";
    return computerChoice;
}
if(x > 33 && x <= 66){
    let computerChoice = "paper";
    return computerChoice;
}
if(x > 66 && x <= 99){
    let computerChoice = "scissors";
    return computerChoice;
}
}