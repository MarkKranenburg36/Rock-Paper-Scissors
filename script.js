let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

//get main
const main = document.querySelector('main');
//kies knoppen
const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');
//scoreboard
const teamAScore = document.querySelector('#teamAScore'); 
const teamBScore = document.querySelector('#teamBScore');
//restult display
const containerResult = document.createElement('div');
const winOrLoseP = document.createElement('p');
winOrLoseP.textContent = '';
const resultmsg = document.createElement('p');
resultmsg.textContent = '';
const playerAndComputerPicks = document.createElement('p');
//modal
const winEndGameModal = document.querySelector('#winEndGameModal');
const loseEndGameModal = document.querySelector('#loseEndGameModal')
const closeWinModalBtn = document.querySelector('#closeW');
const closeLoseModalBtn = document.querySelector('#closeL');
const newGameWin = document.querySelector('#btn-newGameWin');
const newGameLose = document.querySelector('#btn-newGameLose');

let getComputerChoice = () => {
        let random = Math.floor(Math.random() * 3) + 1;
        if (random === 1){
                return 'Rock';
        } else if (random === 2){
                return 'Paper';
        } else if (random === 3){
                return 'Scissors';
        }
}

//puts playersChoice and computersChoice in playRound to decide who wins this round. than call the displayResult function.
const play = e => {
        winOrLoseP.classList.remove('winStyle', 'loseStyle', 'tieStyle');
        playerChoice = e.target.textContent;
        computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        displayResults();
        updateScore();
}

function playRound(playersPick, computersPick) {
        if (playersPick === 'Rock' && computersPick === 'Rock') {
                winOrLoseP.textContent = 'It\'s a tie!';
                resultmsg.textContent = 'You both picked rock, seems like you\'re both rock-solid.';
        }
        else if (playersPick === 'Rock' && computersPick === 'Paper'){
                winOrLoseP.textContent = 'You lose this round!';
                resultmsg.textContent = 'A rock ain\'t always a hard place, sometimes paper can cover it!';
                computerScore++;
        }
        else if (playersPick === 'Rock' && computersPick === 'Scissors'){
                winOrLoseP.textContent = 'You win this round!';
                resultmsg.textContent = 'Rock and roll baby!';
                playerScore++;
        }
        else if (playersPick === 'Paper' && computersPick === 'Rock'){
                winOrLoseP.textContent = 'You win this round!';
                resultmsg.textContent = 'Looks like the computer just got schooled, paper always wins.';
                playerScore++;
        }
        else if (playersPick === 'Paper' && computersPick === 'Paper'){
                winOrLoseP.textContent = 'It\'s a tie!';
                resultmsg.textContent = 'You both picked paper, but let\'s be real, paper is the best choice anyway.';
        }
        else if (playersPick === 'Paper' && computersPick === 'Scissors'){
                winOrLoseP.textContent = 'You lose this round!';
                resultmsg.textContent = 'Looks like paper just met its mortal enemy, scissors always wins!';
                computerScore++;
        }
        else if (playersPick === 'Scissors' && computersPick === 'Rock'){
                winOrLoseP.textContent = 'You lose this round!';
                resultmsg.textContent = 'But I bet the rockband next door is loving this!';
                computerScore++;
        }
        else if (playersPick === 'Scissors' && computersPick === 'Paper'){
                winOrLoseP.textContent = 'You win this round!';
                resultmsg.textContent = 'Looks like the computer got cut down to size!';
                playerScore++;
        }
        else if (playersPick === 'Scissors' && computersPick === 'Scissors'){
                winOrLoseP.textContent = 'It\'s a tie!';
                resultmsg.textContent = 'You both picked scissorts, seems like you both have a sharp mind and cutting edge strategy!';
        }
};



function updateScore() {
        if (playerScore <= 5) {
                teamAScore.innerText = playerScore;
        } else {
                teamAScore.innerText = 5;
        }

        if (computerScore <= 5) {
                teamBScore.innerText = computerScore;
        } else {
                teamBScore.innerText = 5;
        }

        if (playerScore >= 5) {
                winEndGameModal.style.display = 'block';
        } else if (computerScore >= 5) {
                loseEndGameModal.style.display = 'block';
        }
}

function addWinerOrLoserStyle(){
        if (winOrLoseP.textContent === 'You win this round!') {
                winOrLoseP.classList.add('winStyle');
        } else if (winOrLoseP.textContent === 'You lose this round!') {
                winOrLoseP.classList.add('loseStyle');
        } else if (winOrLoseP.textContent === 'It\'s a tie!') {
                winOrLoseP.classList.add('tieStyle');
        }
}

function displayResults(){
        main.appendChild(containerResult);
        addWinerOrLoserStyle();
        containerResult.appendChild(winOrLoseP);
        playerAndComputerPicks.innerText = `\nYou chose: ${playerChoice} \nComputer chose: ${computerChoice}\n`;
        containerResult.appendChild(playerAndComputerPicks);
        containerResult.appendChild(resultmsg);
}





rock.addEventListener('click', play);
paper.addEventListener('click', play);
scissors.addEventListener('click', play);
window.addEventListener('click', (event) => {
        if (event.target === winEndGameModal) {
                winEndGameModal.style.display = 'none';
        } else if (event.target === loseEndGameModal) {
                loseEndGameModal.style.display = 'none';
        }
});

closeWinModalBtn.addEventListener('click', () => {
        winEndGameModal.style.display = 'none';
});

closeLoseModalBtn.addEventListener('click', () => {
        loseEndGameModal.style.display = 'none';
});

newGameWin.addEventListener('click', () => {
        window.location.reload();
});

newGameLose.addEventListener('click', () => {
        window.location.reload();
});