let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#btn-rock');
const paper = document.querySelector('#btn-paper');
const scissors = document.querySelector('#btn-scissors');

rock.addEventListener('click', () => {
        let playersChoice = event.target.textContent;
        console.log(playersChoice);
});















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

function playRound(playerSelection, getComputerChoice) {
        if (playerSelection === 'rock' && getComputerChoice() === 'rock') {
         return 'Its a tie! You both picked rock, seems like you\'re both rock-solid.';
        }
        else if (playerSelection === 'rock' && getComputerChoice() === 'paper'){
        return 'You lose! A rock ain\'t always a hard place, sometimes paper can cover it!';
                playerScore++;
        }
        else if (playerSelection === 'rock' && getComputerChoice() === 'scissors'){
        return 'You win! Rock and roll baby!';
        }
        else if (playerSelection === 'paper' && getComputerChoice() === 'rock'){
                return 'You win! Looks like the computer just got schooled, paper always wins.';
        }
        else if (playerSelection === 'paper' && getComputerChoice() === 'paper'){
        return 'It\'s a tie! You both picked paper, but let\'s be real, paper is the best choice anyway.';
        }
        else if (playerSelection === 'paper' && getComputerChoice() === 'scissors'){
        return 'You lose! Looks like paper just met its mortal enemy, scissors always wins!';
        }
        else if (playerSelection === 'scissors' && getComputerChoice() === 'rock'){
        return 'You lose! But I bet the rock band next door is loving this!';
        }
        else if (playerSelection === 'scissors' && getComputerChoice() === 'paper'){
        return 'You win! Looks like the computer got cut down to size!';
        }
        else
        return 'It\'s a tie! You both picked scissorts, seems like you both have a sharp mind and cutting edge strategy!';
};