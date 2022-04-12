let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let pCount = document.getElementById('p-count');
let cCount = document.getElementById('c-count');
let result = document.getElementById('result');

function computerSelect() {
let choice = Math.floor(Math.random() * 3);
switch (choice) {
  case 0:
    computerChoice = "paper";
    break;
  case 1:
    computerChoice = "rock";
    break;
  case 2:
    computerChoice = "scissors";
    break;
}
}

function chooseRock() {
computerSelect();
switch (computerChoice) {
  case "paper":
    document.getElementById('rightimg').src = 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg';
    computerScore++;
    result.textContent = "You lose!";
    break;
  case "rock":
  document.getElementById("leftimg").src = 'https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg';
  document.getElementById("rightimg").src = 'https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg';
  result.textContent = "Tie!";
    break;
  case "scissors":
    playerScore++;
    document.getElementById('rightimg').src = 'https://freepngimg.com/thumb/scissor/36873-8-scissors-transparent.png';
    result.textContent = "You win!";
    break;
}
pCount.textContent = playerScore;
cCount.textContent = computerScore;
document.getElementById("leftimg").src = 'https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg';
}

function choosePaper() {
computerSelect();
switch (computerChoice) {
  case "scissors":
    computerScore++;
    document.getElementById('rightimg').src = 'https://freepngimg.com/thumb/scissor/36873-8-scissors-transparent.png';
    result.textContent = "You lose!";
    break;
  case "paper":
  document.getElementById('leftimg').src = 'https://www.kindpng.com/picc/m/131-1318570_transparent-note-paper-png-crumpled-paper-transparent-background.png';
  document.getElementById('rightimg').src = 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg';
  result.textContent = "Tie!";
    break;
  case "rock":
    playerScore++;
    document.getElementById("rightimg").src = 'https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg';
    result.textContent = "You win!";
    break;
}
pCount.textContent = playerScore;
cCount.textContent = computerScore;
document.getElementById('leftimg').src = 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg';
}

function chooseScissors() {
computerSelect();
switch (computerChoice) {
  case "rock":
    computerScore++;
    document.getElementById("rightimg").src = 'https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/Limestone-060-RD010-C-SH_by22j3.jpg';
    result.textContent = "You lose!";
    break;
  case "scissors":
  document.getElementById('leftimg').src = 'https://freepngimg.com/thumb/scissor/36873-8-scissors-transparent.png';
  document.getElementById('rightimg').src = 'https://freepngimg.com/thumb/scissor/36873-8-scissors-transparent.png';
  result.textContent = "Tie!";
    break;
  case "paper":
    document.getElementById('rightimg').src = 'https://www.collinsdictionary.com/images/full/paper_111691001.jpg';
    playerScore++;
    result.textContent = "You win!";
    break;
}
pCount.textContent = playerScore;
cCount.textContent = computerScore;
document.getElementById('leftimg').src = 'https://freepngimg.com/thumb/scissor/36873-8-scissors-transparent.png';
}

function reset() {
computerScore = 0;
playerScore = 0;
pCount.textContent = playerScore;
cCount.textContent = computerScore;
document.getElementById('leftimg').src = '';
document.getElementById('rightimg').src = '';
result.textContent = "Choose your move"
}
